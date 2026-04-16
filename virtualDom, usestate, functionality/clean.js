import fs from 'fs';
import path from 'path';

const srcDir = './src';
const publicDir = './public';

const filesToDelete = [
  path.join(srcDir, 'assets/react.svg'),
  path.join(srcDir, 'assets/vite.svg'),
  path.join(srcDir, 'assets/hero.png'),
  path.join(publicDir, 'favicon.svg'),
  path.join(publicDir, 'icons.svg'),
];

filesToDelete.forEach(file => {
  if (fs.existsSync(file)) fs.unlinkSync(file);
});

const componentsDir = path.join(srcDir, 'components');
if (!fs.existsSync(componentsDir)) fs.mkdirSync(componentsDir);

const indexCssContent = `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}\n`;
fs.writeFileSync(path.join(srcDir, 'index.css'), indexCssContent);

fs.writeFileSync(path.join(srcDir, 'app.css'), '');

const appJsxContent = `function App() {
  return (
    <>
      
    </>
  );
}

export default App;\n`;
fs.writeFileSync(path.join(srcDir, 'App.jsx'), appJsxContent);

console.log('🚀 Project is cleaned');