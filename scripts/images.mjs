// Turns the source pictures in site-shots/ and photos/ into the sizes the site
// serves: public/img/<name>-<width>.webp. Run with `npm run images` after adding
// or replacing a picture. Sources stay out of the build; only the webp files ship.
import { readdir, mkdir } from 'node:fs/promises'
import { extname, basename, join } from 'node:path'
import sharp from 'sharp'

const SOURCES = ['site-shots', 'photos']
const WIDTHS = [800, 1600]
const OUT = 'public/img'

await mkdir(OUT, { recursive: true })
for (const dir of SOURCES) {
  let files = []
  try { files = await readdir(dir) } catch { continue }
  for (const file of files) {
    if (!/\.(png|jpe?g|webp|heic)$/i.test(file)) continue
    const name = basename(file, extname(file))
    for (const width of WIDTHS) {
      const out = join(OUT, `${name}-${width}.webp`)
      await sharp(join(dir, file)).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 78 }).toFile(out)
      console.log(out)
    }
  }
}
