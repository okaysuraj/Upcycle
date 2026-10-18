// One catalog for API validation and both clients, organized by domain.
import sustainability from './features/sustainability.json' with { type: 'json' };
import marketplace from './features/marketplace.json' with { type: 'json' };
import campus from './features/campus.json' with { type: 'json' };
import operations from './features/operations.json' with { type: 'json' };
import community from './features/community.json' with { type: 'json' };
import rewards from './features/rewards.json' with { type: 'json' };
import account from './features/account.json' with { type: 'json' };
import administration from './features/administration.json' with { type: 'json' };
import information from './features/information.json' with { type: 'json' };

export default [
  ...sustainability,
  ...marketplace,
  ...campus,
  ...operations,
  ...community,
  ...rewards,
  ...account,
  ...administration,
  ...information,
];
