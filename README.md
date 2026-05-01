# RK Enterprises Website

This folder is ready to deploy as a Netlify static site with Decap CMS editing.

## Build locally

```bash
npm run build
```

The build generates `index.html` from `src/index.template.html` and `content/site.json`.

## Edit content

After deploying on Netlify and enabling Identity + Git Gateway, open:

```text
https://your-domain.com/admin/
```

The admin panel edits `content/site.json`; Netlify rebuilds the live website after each saved change.
