# Gravity Apps

Developer site: app overviews + privacy policies for App Store / Play.

## Stack

Plain HTML / CSS / tiny JS. Published from `docs/` via **GitHub Pages**.

## Local preview

```bash
python3 -m http.server 5173 --directory docs
```

Open http://127.0.0.1:5173/

## GitHub Pages

1. Push this repo to GitHub.
2. **Settings → Pages → Build and deployment**
3. Source: **Deploy from a branch**
4. Branch: `main`, folder: **/docs**
5. Site: `https://<user>.github.io/MyDevPage/`

### EchoDex privacy URL (for stores + `legal.ts`)

```
https://<user>.github.io/MyDevPage/apps/echodex/privacy/
```

Wire that into:

- Pokemon repo `src/config/legal.ts` → `PRIVACY_POLICY_URL`
- `app.json` → `expo.extra.store.privacyPolicyUrl`
- `store/ios/*` and `store/android/*` → `PRIVACY_POLICY_URL`
- Replace `support@REPLACE_WITH_YOUR_DOMAIN` here and in the app

## Structure

```
docs/
  index.html
  apps/index.html
  apps/echodex/                 Overview + screenshots
  apps/echodex/privacy/         EN/DE privacy (from store/privacy)
  apps/echodex/screenshots/     EN phone 01–03 + tablet portrait/landscape
  css/styles.css
  js/main.js
```

## Apps

| App | Slug | Package |
|-----|------|---------|
| EchoDex | `echodex` | `com.gravityapps.echodex` |
