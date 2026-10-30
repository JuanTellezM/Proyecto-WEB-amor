const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const sourceDir = path.join(__dirname, '../Sofia');
const targetBase = path.join(__dirname, '../public/images');
const optimizedDir = path.join(targetBase, 'optimized');

if (!fs.existsSync(optimizedDir)) fs.mkdirSync(optimizedDir, { recursive: true });

async function processImages() {
  const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.jpg')).sort((a, b) => {
    const numA = parseInt(a.replace(/\D/g, '')) || 0;
    const numB = parseInt(b.replace(/\D/g, '')) || 0;
    return numA - numB;
  });

  console.log(`Processing ${files.length} images for Sofía...`);

  for (const file of files) {
    const num = parseInt(file.replace(/\D/g, '')) || 0;
    const srcPath = path.join(sourceDir, file);

    const mobileName = `photo-${num}-mobile.webp`;
    const mobilePath = path.join(optimizedDir, mobileName);
    await sharp(srcPath)
      .resize({ width: 720, height: 1280, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 84 })
      .toFile(mobilePath);

    const desktopName = `photo-${num}-desktop.webp`;
    const desktopPath = path.join(optimizedDir, desktopName);
    await sharp(srcPath)
      .resize({ width: 1440, height: 2160, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 86 })
      .toFile(desktopPath);

    const thumbName = `photo-${num}-thumb.webp`;
    const thumbPath = path.join(optimizedDir, thumbName);
    await sharp(srcPath)
      .resize({ width: 420, height: 620, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(thumbPath);

    console.log(`[Photo ${num}] processed successfully`);
  }
  console.log('All Sofia images processed.');
}

processImages().catch(err => {
  console.error(err);
  process.exit(1);
});
