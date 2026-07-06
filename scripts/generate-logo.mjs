import sharp from "sharp";
import { writeFileSync } from "fs";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800">
  <defs>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.12 0"/>
      <feBlend in="SourceGraphic" mode="multiply"/>
    </filter>
    <path id="topArc" d="M 170 250 A 230 230 0 0 1 630 250" fill="none"/>
    <path id="bottomArc" d="M 200 560 A 200 200 0 0 0 600 560" fill="none"/>
  </defs>
  <rect width="800" height="800" fill="#0a0a0a"/>
  <circle cx="400" cy="400" r="340" fill="#111" stroke="#f5f0e6" stroke-width="10" filter="url(#grain)"/>
  <circle cx="400" cy="400" r="300" fill="none" stroke="#f5f0e6" stroke-width="4" opacity="0.85"/>
  <text font-family="Arial Black, Impact, sans-serif" font-size="34" font-weight="900" fill="#f5f0e6" letter-spacing="6">
    <textPath href="#topArc" startOffset="8%">CARNES</textPath>
  </text>
  <text font-family="Arial Black, Impact, sans-serif" font-size="34" font-weight="900" fill="#f5f0e6" letter-spacing="6">
    <textPath href="#topArc" startOffset="62%">AHUMADAS</textPath>
  </text>
  <g transform="translate(400 215)">
    <path d="M0 -28 C-10 -8 -18 8 -8 24 C-2 34 8 34 0 44 C-8 34 2 34 8 24 C18 8 10 -8 0 -28Z" fill="#f5f0e6"/>
    <path d="M-18 -8 C-8 0 -4 10 0 18 C4 10 8 0 18 -8 C10 -18 0 -20 -18 -8Z" fill="#f5f0e6" opacity="0.75"/>
  </g>
  <rect x="145" y="300" width="510" height="150" rx="6" fill="#0a0a0a" stroke="#f5f0e6" stroke-width="3"/>
  <text x="400" y="395" text-anchor="middle" font-family="Arial Black, Impact, sans-serif" font-size="108" font-weight="900" fill="#f5f0e6" letter-spacing="8">SMOKE</text>
  <text x="400" y="500" text-anchor="middle" font-family="Arial Black, Impact, sans-serif" font-size="92" font-weight="900" fill="#f5f0e6" letter-spacing="4">120°</text>
  <g transform="translate(400 590)">
    <rect x="-180" y="0" width="360" height="90" fill="#f5f0e6"/>
    <g stroke="#0a0a0a" stroke-width="14">
      <line x1="-170" y1="15" x2="170" y2="75"/>
      <line x1="-170" y1="35" x2="170" y2="95"/>
      <line x1="-170" y1="55" x2="170" y2="115"/>
      <line x1="-150" y1="-5" x2="190" y2="55"/>
      <line x1="-150" y1="15" x2="190" y2="75"/>
    </g>
  </g>
</svg>`;

const out = "public/references/logo.png";
await sharp(Buffer.from(svg)).png().toFile(out);
writeFileSync("public/references/logo.svg", svg);
console.log("Logo generado:", out);
