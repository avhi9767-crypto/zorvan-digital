# Zorvan Digital Website

Responsive static website for Zorvan Digital, built with plain HTML, CSS, and JavaScript for GitHub Pages.

## Files
- `index.html` — page content and structure
- `style.css` — responsive styling
- `script.js` — mobile menu, year, and contact-button configuration

## Before publishing
1. Open `script.js`.
2. Replace the empty `WHATSAPP_NUMBER` with the real business WhatsApp number, using international digits only (example format: `923001234567`, without `+`, spaces, or dashes).
3. Replace `BUSINESS_EMAIL` with the real business email.
4. In `index.html`, replace the visible email/contact-note text if needed.

Do not publish private keys or passwords. This is a static site; contact buttons open WhatsApp or the visitor's email app and do not store form submissions.

## GitHub Pages
1. Create a public GitHub repository, e.g. `zorvan-digital`.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root (not inside another folder).
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/(root)`, then save.
5. Wait for GitHub Pages to finish deploying and click **Visit site**.

Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
