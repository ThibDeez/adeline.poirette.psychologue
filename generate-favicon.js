const fs = require('fs');
const path = require('path');

/**
 * Script pour générer le favicon.ico à partir du SVG
 *
 * INSTRUCTIONS :
 * 1. Installez sharp : npm install --save-dev sharp
 * 2. Exécutez : node generate-favicon.js
 * 3. Le fichier favicon.ico sera créé dans static/img/
 */

async function generateFavicon() {
  try {
    // Tentative d'import de sharp
    let sharp;
    try {
      sharp = require('sharp');
    } catch (e) {
      console.log('❌ Sharp n\'est pas installé.');
      console.log('📦 Installez-le avec : npm install --save-dev sharp');
      console.log('\n💡 Alternative : Utilisez un convertisseur en ligne :');
      console.log('   - https://convertio.co/fr/svg-ico/');
      console.log('   - https://favicon.io/favicon-converter/');
      console.log('   - https://realfavicongenerator.net/');
      return;
    }

    const svgPath = path.join(__dirname, 'static', 'img', 'favicon.svg');
    const icoPath = path.join(__dirname, 'static', 'img', 'favicon.ico');
    const pngPath = path.join(__dirname, 'static', 'img', 'favicon.png');

    // Lire le SVG
    const svgBuffer = fs.readFileSync(svgPath);

    // Convertir en PNG 32x32 (taille standard pour favicon)
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile(pngPath);

    console.log('✅ favicon.png généré (32x32)');

    // Note : Sharp ne peut pas créer directement des .ico
    // Il faut utiliser un outil externe ou un convertisseur en ligne
    console.log('\n⚠️  Pour créer le favicon.ico :');
    console.log('1. Utilisez favicon.png généré');
    console.log('2. Convertissez-le en .ico sur : https://convertio.co/fr/png-ico/');
    console.log('3. Ou utilisez directement : https://realfavicongenerator.net/');

  } catch (error) {
    console.error('❌ Erreur lors de la génération :', error.message);
  }
}

generateFavicon();

