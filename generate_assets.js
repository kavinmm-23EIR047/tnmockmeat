import Jimp from 'jimp';
import path from 'path';
import fs from 'fs';

const logoPath = './frontend/public/images/logo.png';
const publicDir = './frontend/public';

async function main() {
  if (!fs.existsSync(logoPath)) {
    console.error(`Logo not found at ${logoPath}`);
    return;
  }

  console.log(`Found logo at ${logoPath}. Generating assets...`);
  const image = await Jimp.read(logoPath);
  
  // favicon-16x16
  const fav16 = image.clone().resize(16, 16);
  await fav16.write(path.join(publicDir, 'favicon-16x16.png'));
  console.log('Generated favicon-16x16.png');

  // favicon-32x32
  const fav32 = image.clone().resize(32, 32);
  await fav32.write(path.join(publicDir, 'favicon-32x32.png'));
  console.log('Generated favicon-32x32.png');

  // favicon-48x48 (Google Search Preferred multiple of 48)
  const fav48 = image.clone().resize(48, 48);
  await fav48.write(path.join(publicDir, 'favicon-48x48.png'));
  console.log('Generated favicon-48x48.png');

  // apple-touch-icon (180x180)
  const apple = image.clone().resize(180, 180);
  await apple.write(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Generated apple-touch-icon.png');

  // android-chrome-192 (192x192)
  const chrome192 = image.clone().resize(192, 192);
  await chrome192.write(path.join(publicDir, 'android-chrome-192x192.png'));
  console.log('Generated android-chrome-192x192.png');

  // android-chrome-512 (512x512)
  const chrome512 = image.clone().resize(512, 512);
  await chrome512.write(path.join(publicDir, 'android-chrome-512x512.png'));
  console.log('Generated android-chrome-512x512.png');

  // For favicon.ico, we output 32x32
  const ico = image.clone().resize(32, 32);
  await ico.write(path.join(publicDir, 'favicon.ico'));
  console.log('Generated favicon.ico');

  // og-image (1200x630) with parchment (#E9DFC9) background
  // #E9DFC9 in hex is 0xE9DFC9FF in Jimp color representation
  const ogBg = await new Jimp(1200, 630, 0xE9DFC9FF);
  
  // Resize logo to fit inside 1200x630
  const logoResized = image.clone();
  logoResized.resize(Jimp.AUTO, 350);
  if (logoResized.getWidth() > 800) {
    logoResized.resize(800, Jimp.AUTO);
  }

  const x = Math.floor((1200 - logoResized.getWidth()) / 2);
  const y = Math.floor((630 - logoResized.getHeight()) / 2);
  
  ogBg.composite(logoResized, x, y);
  await ogBg.write(path.join(publicDir, 'og-image.jpg'));
  console.log('Generated og-image.jpg');

  console.log('All favicon and social preview assets generated successfully!');
}

main().catch(err => {
  console.error(err);
});
