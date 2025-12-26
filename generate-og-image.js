const fs = require('fs');
const path = require('path');

/**
 * Script pour générer l'image OpenGraph (og-image.jpg)
 * Format requis : 1200x630 pixels
 *
 * INSTRUCTIONS :
 * 1. Installez sharp : npm install --save-dev sharp
 * 2. Exécutez : node generate-og-image.js
 * 3. Le fichier og-image.jpg sera créé dans static/img/
 */

async function generateOGImage() {
  try {
    let sharp;
    try {
      sharp = require('sharp');
    } catch (e) {
      console.log('❌ Sharp n\'est pas installé.');
      console.log('📦 Installez-le avec : npm install --save-dev sharp');
      console.log('\n💡 Alternative : Convertissez og-image.svg manuellement :');
      console.log('   1. Ouvrez og-image.svg dans un navigateur');
      console.log('   2. Faites une capture d\'écran ou exportez en JPG (1200x630)');
      console.log('   3. Ou utilisez : https://cloudconvert.com/svg-to-jpg');
      return;
    }

    const svgPath = path.join(__dirname, 'static', 'img', 'og-image.svg');
    const jpgPath = path.join(__dirname, 'static', 'img', 'og-image.jpg');
    const pngPath = path.join(__dirname, 'static', 'img', 'og-image.png');

    // Lire le SVG
    const svgBuffer = fs.readFileSync(svgPath);

    // Convertir en JPG (1200x630)
    await sharp(svgBuffer)
      .resize(1200, 630)
      .jpeg({ quality: 90 })
      .toFile(jpgPath);

    console.log('✅ og-image.jpg généré (1200x630)');

    // Aussi en PNG pour plus de qualité
    await sharp(svgBuffer)
      .resize(1200, 630)
      .png()
      .toFile(pngPath);

    console.log('✅ og-image.png généré (1200x630)');

    console.log('\n📝 N\'oubliez pas de mettre à jour docusaurus.config.ts :');
    console.log('   image: \'img/og-image.jpg\',');

  } catch (error) {
    console.error('❌ Erreur lors de la génération :', error.message);
    console.log('\n💡 Essayez de convertir manuellement og-image.svg');
  }
}

generateOGImage();

