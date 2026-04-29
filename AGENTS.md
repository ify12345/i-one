# AGENTS.md

## Commands

```bash
npm run dev    # Vite dev server on port 4500, host 0.0.0.0
npm run build  # tsc -b && vite build
npm run lint  # eslint .
npm run preview
```

## Path Aliases

- `@/*` → `./src`

## Tech Stack

- React 18 + TypeScript + Vite
- Redux Toolkit + redux-persist
- MUI v6 + Emotion, Tailwind CSS
- Leaflet (react-leaflet for maps)
- Formik + Yup (forms)
- Framer Motion (animations)
- Netlify deployment (netlify.toml)

## Notes

- No test framework configured
- Default port is 4500 (not 3000/5173)
- Dev server binds to `0.0.0.0` for container access
- No pre-commit hooks configured