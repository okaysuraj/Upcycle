const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? 
      walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(path.join(__dirname, 'app'), function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Match export default function 2FA SetupScreen() {
    // and replace with export default function Screen() {
    let newContent = content.replace(/export default function\s+([^({]+)\s*\(/g, (match, p1) => {
      // If p1 is not a valid JS identifier (e.g. contains spaces, starts with number)
      if (!/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(p1.trim())) {
        return `export default function Screen(`;
      }
      return match;
    });

    if (content !== newContent) {
      console.log('Fixed', filePath);
      fs.writeFileSync(filePath, newContent, 'utf8');
    }
  }
});
