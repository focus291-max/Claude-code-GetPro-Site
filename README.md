# GetPro — LED Screens Homepage Demo

Static marketing homepage for **GetPro** — LED screens, illuminated signage, and screen rental for events and businesses.

- **Stack:** Plain HTML / CSS / vanilla JS — no backend, no build step.
- **Language:** Hebrew, full RTL.
- **Built with:** [Claude Code](https://claude.com/claude-code).

## Run locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Structure

```
index.html   # markup — header, hero, finder, services, gallery, contact, footer
style.css    # design tokens + all styling
script.js    # header scroll, mobile drawer, gallery filter, contact form (UI only)
images/      # photos and product/gallery assets
```

> This is a UI-only demo: the contact form does not submit anywhere.
