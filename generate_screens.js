const fs = require('fs');
const path = require('path');

const SKILLS_WEB_DIR = path.join(__dirname, 'skills', 'upcycle-web-ui');
const SKILLS_MOBILE_DIR = path.join(__dirname, 'skills', 'upcycle-mobile-ui');

const FRONTEND_PAGES_DIR = path.join(__dirname, 'frontend', 'src', 'pages', 'generated');
const MOBILE_APP_DIR = path.join(__dirname, 'upcycle-mobile', 'app', '(generated)');

// Ensure output dirs exist
if (!fs.existsSync(FRONTEND_PAGES_DIR)) fs.mkdirSync(FRONTEND_PAGES_DIR, { recursive: true });
if (!fs.existsSync(MOBILE_APP_DIR)) fs.mkdirSync(MOBILE_APP_DIR, { recursive: true });

function convertHtmlToJsx(html) {
  // A very basic HTML to JSX converter
  return html
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/<!--[\s\S]*?-->/g, '') // Remove comments
    .replace(/<img(.*?)>/g, (match, p1) => {
      if (match.endsWith('/>')) return match;
      return `<img${p1} />`;
    })
    .replace(/<input(.*?)>/g, (match, p1) => {
      if (match.endsWith('/>')) return match;
      return `<input${p1} />`;
    })
    .replace(/<br>/g, '<br />')
    .replace(/<hr(.*?)>/g, (match, p1) => {
      if (match.endsWith('/>')) return match;
      return `<hr${p1} />`;
    })
    .replace(/style="([^"]*)"/g, (match, p1) => {
       // Just strip styles for now to avoid React errors with string styles
       return ''; 
    });
}

function processWebScreens() {
  const folders = fs.readdirSync(SKILLS_WEB_DIR);
  const routes = [];

  for (const folder of folders) {
    const codePath = path.join(SKILLS_WEB_DIR, folder, 'code.html');
    if (fs.existsSync(codePath)) {
      const htmlContent = fs.readFileSync(codePath, 'utf8');
      
      // Extract body content
      const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
      let jsxContent = bodyMatch ? bodyMatch[1] : htmlContent;
      
      // Strip script tags
      jsxContent = jsxContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
      
      jsxContent = convertHtmlToJsx(jsxContent);
      
      const componentName = folder.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
      
      const fileContent = `
import React from 'react';

export default function ${componentName}() {
  return (
    <div className="min-h-screen bg-surface-ice text-on-surface flex flex-col items-center justify-center relative overflow-hidden">
      ${jsxContent}
    </div>
  );
}
`;
      fs.writeFileSync(path.join(FRONTEND_PAGES_DIR, `${componentName}.jsx`), fileContent);
      routes.push({ path: `/${folder.replace(/_/g, '-')}`, component: componentName });
    }
  }

  // Generate a routes file
  let routesFileContent = `import React from 'react';\nimport { Routes, Route, Link } from 'react-router-dom';\n`;
  for (const route of routes) {
    routesFileContent += `import ${route.component} from './${route.component}';\n`;
  }
  
  routesFileContent += `\nexport default function GeneratedRoutes() {\n  return (\n    <>\n      <div className="p-4 bg-gray-100 flex flex-wrap gap-2">\n`;
  
  for (const route of routes) {
    routesFileContent += `        <Link to="${route.path}" className="text-blue-500 hover:underline">${route.component}</Link>\n`;
  }

  routesFileContent += `      </div>\n      <Routes>\n`;
  for (const route of routes) {
    routesFileContent += `        <Route path="${route.path}" element={<${route.component} />} />\n`;
  }
  routesFileContent += `      </Routes>\n    </>\n  );\n}\n`;

  fs.writeFileSync(path.join(FRONTEND_PAGES_DIR, 'index.jsx'), routesFileContent);
  console.log(`Generated ${routes.length} Web screens.`);
}

function processMobileScreens() {
  const folders = fs.readdirSync(SKILLS_MOBILE_DIR);
  let count = 0;

  for (const folder of folders) {
    const codePath = path.join(SKILLS_MOBILE_DIR, folder, 'code.html');
    if (fs.existsSync(codePath)) {
      // We will just generate placeholder Expo Router screens for mobile, since converting raw HTML to React Native components is extremely complex (View, Text, StyleSheet).
      // We'll wrap the raw JSX in a react-native-webview or just a placeholder for now.
      
      const routeName = folder.replace(/_/g, '-');
      const componentName = folder.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
      
      const fileContent = `
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function ${componentName}Screen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>${componentName}</Text>
      <Text>This screen was scaffolded from the ${folder} skill.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f4faff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 }
});
`;
      fs.writeFileSync(path.join(MOBILE_APP_DIR, `${routeName}.tsx`), fileContent);
      count++;
    }
  }
  
  // Generate an index screen for Expo Router
  let indexFileContent = `import { Link } from 'expo-router';\nimport { ScrollView, View, Text, StyleSheet } from 'react-native';\n\nexport default function Index() {\n  return (\n    <ScrollView style={styles.container}>\n      <Text style={styles.title}>Generated Mobile Screens</Text>\n`;
  
  for (const folder of folders) {
    const routeName = folder.replace(/_/g, '-');
    indexFileContent += `      <Link href="/(generated)/${routeName}" style={styles.link}>${routeName}</Link>\n`;
  }
  
  indexFileContent += `    </ScrollView>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: { flex: 1, padding: 20 },\n  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },\n  link: { fontSize: 16, color: 'blue', marginBottom: 10 }\n});\n`;
  
  fs.writeFileSync(path.join(MOBILE_APP_DIR, 'index.tsx'), indexFileContent);

  console.log(`Generated ${count} Mobile screens.`);
}

processWebScreens();
processMobileScreens();
