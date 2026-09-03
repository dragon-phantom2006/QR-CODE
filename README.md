# Soham Sil — QR Portfolio

A premium, scan-first static portfolio built from the supplied portfolio ZIP.

## What was upgraded
- Premium editorial / dark-tech visual system
- Responsive mobile + desktop layout
- Strong CV-focused hero section
- Project showcase with structured data
- Skills and education/project content preserved and polished
- Dedicated QR section for CVs, printouts and presentations
- Scroll reveal animations
- Corrected the original JSON loading path
- Removed the embedded `.git` history from the delivery ZIP
- Added favicon and deployment notes

## QR destination
The included QR code points to:

`https://dragon-phantom2006.github.io/QR-CODE/`

**Important:** deploy the site at that exact GitHub Pages URL for the QR to open the live portfolio. If your final URL is different, regenerate the QR code and replace `assets/qr-portfolio.svg`.

## Deploy with GitHub Pages
1. Create/use repository: `QR-CODE`
2. Upload all files in this folder to the repository root.
3. Push to the `main` branch.
4. In GitHub: **Settings → Pages**
5. Select **Deploy from a branch → main → / (root)**.
6. Your expected URL is:
   `https://dragon-phantom2006.github.io/QR-CODE/`

## Local preview
Because the portfolio loads JSON with `fetch()`, preview it through a local server rather than opening `index.html` directly.

Example:
```bash
python -m http.server 5500
```
Then open `http://localhost:5500`.

## Files
- `index.html` — page structure
- `assets/css/styles.css` — complete design system
- `assets/js/script.js` — data loading + interactions
- `assets/data/data.json` — editable portfolio content
- `assets/images/profile.jpeg` — supplied profile photo
- `assets/qr-portfolio.svg` — CV QR code
