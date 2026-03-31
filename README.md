# Adybros Flask Website

This is a professional single-page Flask website for Adybros, a growth marketing agency. The project separates templates (base, navbar, footer, main page) and static assets for maintainability.

## Structure

- `app.py` — Flask application entry point
- `templates/` — Jinja2 HTML templates
  - `base.html` — Base layout
  - `navbar.html` — Navigation bar
  - `footer.html` — Footer
  - `index.html` — Main page content
- `static/css/style.css` — Main stylesheet
- `static/img/` — Image assets (add as needed)

## Setup

1. Install dependencies:
   ```bash
   pip install flask
   ```
2. Run the app:
   ```bash
   python app.py
   ```
3. Visit [http://127.0.0.1:5000](http://127.0.0.1:5000)

## Customization
- Add images to `static/img/` as needed.
- Update content in `templates/index.html` for your needs.
- Edit `static/css/style.css` for custom styles.

---
© 2026 Adybros. All rights reserved.
