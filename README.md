# Vega Producciones

Sitio web de Vega Producciones (estudio de foto y video) — React + Vite.

## Desarrollo

```bash
npm install
npm run dev      # servidor local
npm run build    # build de producción (dist/)
npm run lint
```

## Estructura

- `src/components/` — secciones del sitio (Navbar, Hero, Locations, Services, About, Contact, Footer, WhatsAppButton).
- `src/data/services.json` — paquetes y precios.
- `src/data/locations.json` — locaciones (galerías en Cloudinary).
- `src/index.css` — variables globales (paleta azul de marca, tipografía, sombras).

## Despliegue

Cloudflare Workers despliega automáticamente desde `main`.

Los datos de servicios y locaciones son estáticos (JSON); para actualizarlos, edita los archivos de `src/data/`.
