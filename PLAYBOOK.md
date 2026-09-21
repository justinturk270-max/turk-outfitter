# Site playbook (reusable process)

Stack: plain HTML/CSS/JS, no build step. Preview by opening `index.html` or running `python -m http.server` in this folder.

## New site in ~10 steps
1. Copy this folder and rename it.
2. **Re-skin:** edit `assets/css/tokens.css` (colors, fonts, radius, spacing). Everything inherits from it.
3. **Brand:** find/replace `Turk Outfitters`, the tagline, phone, email, and location in each page header/footer.
4. **Logo:** swap the inline SVG in `.brand` (same markup on every page and in the favicon).
5. **Hero:** edit the `.hero__art` SVG, or replace it with a background image.
6. **Content:** edit the cards on `index.html`/`trips.html`, the copy on `about.html`, and the form fields on `contact.html`.
7. **Card visuals:** `.img-*` classes in `site.css` are gradient placeholders. Replace with `<img>` in `.card__img` when real photos exist.
8. **Form:** set the `action` on `#inquiry-form` (Formspree, Netlify Forms, etc.). With no action it shows a demo message.
9. **SEO:** update `<title>` and `<meta name="description">` per page.
10. **Deploy:** drag the folder to Netlify, Cloudflare Pages, or GitHub Pages.

## Conventions
- Header/footer markup is duplicated per page. Update all pages together (or introduce a build step later if pages grow).
- Set `aria-current="page"` on the active nav link.
- Colors only via tokens, never hard-coded in components.
