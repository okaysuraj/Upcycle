FROM node:24-bookworm-slim AS dependencies
RUN apt-get update && apt-get install -y --no-install-recommends openssl ca-certificates && rm -rf /var/lib/apt/lists/*
WORKDIR /app/backend
COPY backend/package.json backend/package-lock.json ./
COPY backend/prisma ./prisma
COPY backend/prisma.config.ts ./
RUN npm ci --include=dev
COPY backend/config ./config
COPY backend/middleware ./middleware
COPY backend/routes ./routes
COPY backend/utils ./utils
COPY backend/server.js ./
COPY shared /app/shared

# Run migrations as a separate release job, before starting the application.
FROM dependencies AS migration
CMD ["npm", "run", "db:deploy"]

FROM dependencies AS runtime-dependencies
RUN npm prune --omit=dev --ignore-scripts

FROM node:24-bookworm-slim AS runtime
RUN apt-get update && apt-get install -y --no-install-recommends openssl ca-certificates && rm -rf /var/lib/apt/lists/*
ENV NODE_ENV=production
ENV PORT=5000
WORKDIR /app/backend
COPY --from=runtime-dependencies --chown=node:node /app/backend/node_modules ./node_modules
COPY --from=runtime-dependencies --chown=node:node /app/backend/package.json ./package.json
COPY --from=runtime-dependencies --chown=node:node /app/backend/config ./config
COPY --from=runtime-dependencies --chown=node:node /app/backend/middleware ./middleware
COPY --from=runtime-dependencies --chown=node:node /app/backend/routes ./routes
COPY --from=runtime-dependencies --chown=node:node /app/backend/utils ./utils
COPY --from=runtime-dependencies --chown=node:node /app/backend/server.js ./server.js
COPY --from=runtime-dependencies --chown=node:node /app/shared /app/shared
USER node
EXPOSE 5000
HEALTHCHECK --interval=30s --timeout=5s --start-period=30s --retries=3 CMD node -e "fetch('http://127.0.0.1:' + process.env.PORT + '/api/live').then(r => { if (!r.ok) process.exit(1); }).catch(() => process.exit(1));"
CMD ["node", "server.js"]
