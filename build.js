const fs = require('fs');
const path = require('path');

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  for (let entry of fs.readdirSync(src, { withFileTypes: true })) {
    let s = path.join(src, entry.name);
    let d = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(s, d);
    } else {
      fs.copyFileSync(s, d);
    }
  }
}

console.log('Building static assets into public directory...');
if (!fs.existsSync('public')) fs.mkdirSync('public', { recursive: true });

fs.copyFileSync('index.html', 'public/index.html');
if (fs.existsSync('LogoGif-unscreen-ezgif.com-crop.gif')) {
  fs.copyFileSync('LogoGif-unscreen-ezgif.com-crop.gif', 'public/LogoGif-unscreen-ezgif.com-crop.gif');
}
copyDir('images', 'public/images');
copyDir('fonts', 'public/fonts');
copyDir('js', 'public/js');

console.log('Build complete! All static assets ready in public/.');
