// Re-encodes the site's images for the web and writes them to
// attached_assets/web/: resized WebP, metadata stripped (the phone photos
// carry GPS EXIF), transparent renders trimmed. Run by hand, commit the output:
//   node scripts/images.mjs
import sharp from "sharp";
import { mkdir, stat } from "node:fs/promises";
import path from "node:path";

const SRC = "attached_assets";
const OUT = path.join(SRC, "web");

const jobs = [
  // Kiosk renders: trim the transparent padding, keep alpha.
  { in: "24 Unit UCU_1752157185779.png", out: "kiosk-24.webp", width: 900, trim: true, quality: 85 },
  { in: "8 Unit UCU_1752157185780.png", out: "kiosk-8.webp", width: 900, trim: true, quality: 85 },
  // Photos.
  { in: "IMG_3172_1775147417498.jpeg", out: "auto-show-kiosk.webp", width: 900, quality: 80 },
  { in: "IMG_1128_1757034121090.jpeg", out: "event-1128.webp", width: 1200, quality: 74 },
  { in: "DC5363E4-2F69-42A5-9C85-D87A3C070281_1757034151691.jpeg", out: "event-dc53.webp", width: 1200, quality: 74 },
  { in: "IMG_0268_1757034173508.jpeg", out: "event-0268.webp", width: 1200, quality: 74 },
  { in: "IMG_0205_1757034192238.jpeg", out: "event-0205.webp", width: 1200, quality: 74 },
  { in: "IMG_1735_1757034259783.jpeg", out: "event-1735.webp", width: 1200, quality: 74 },
  // Partner logos at twice their display width.
  { in: "BBB-LOGO_1752165222960.jpg", out: "logo-basement-burger-bar.webp", width: 320, quality: 88 },
  { in: "Ford_field_stadium_logo_1752165222960.png", out: "logo-ford-field.webp", width: 320, quality: 88 },
  { in: "Four-winds_1752165222960.png", out: "logo-four-winds.webp", width: 320, quality: 88 },
  { in: "Logo-2025RocketClassic-PresentingSponsorLogo-CMYK-8639137248_Horz-Color (7)_1752165222960.png", out: "logo-rocket-classic.webp", width: 320, quality: 88 },
  { in: "Fixins Logo_1752165204990.png", out: "logo-fixins.webp", width: 320, quality: 88 },
  { in: "afrobeats-festival-downtown-detroit.png_1757034151691.webp".replace("1757034151691", "1757032474149"), out: "logo-afro-future.webp", width: 320, quality: 88 },
  { in: "Virgin-logo_1772042074981.png", out: "logo-virgin-hotels.webp", width: 320, quality: 88 },
  // The logo itself: a lossless crop of the PNG's transparent padding, never recolored.
  { in: "NEW  UCU LOGO_1752157158761.png", out: "logo.png", width: 800, trim: true, png: true },
  // Credentials.
  { in: "mbe_1752170626183.webp", out: "badge-mbe.webp", width: 160, quality: 88 },
  { in: "nvidia-inception-program-badge.png", out: "badge-nvidia-inception.webp", width: 360, quality: 90 },
];

await mkdir(OUT, { recursive: true });
let total = 0;
for (const job of jobs) {
  const input = path.join(SRC, job.in);
  const output = path.join(OUT, job.out);
  let img = sharp(input).rotate(); // applies EXIF orientation, then EXIF is dropped
  if (job.trim) img = img.trim();
  img = img.resize({ width: job.width, withoutEnlargement: true });
  if (job.png) await img.png({ compressionLevel: 9 }).toFile(output);
  else await img.webp({ quality: job.quality, alphaQuality: 95, effort: 6 }).toFile(output);
  const before = (await stat(input)).size;
  const after = (await stat(output)).size;
  total += after;
  console.log(`${job.out.padEnd(32)} ${(before / 1024).toFixed(0).padStart(6)} KB -> ${(after / 1024).toFixed(0).padStart(5)} KB`);
}
console.log(`total ${(total / 1024).toFixed(0)} KB`);
