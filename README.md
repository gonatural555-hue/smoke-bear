# SMOKE 120 AHUMADOS

Demo visual en Next.js para presentar en Vercel una marca argentina de carnes ahumadas artesanales con estética Texas BBQ premium.

- Instagram: [@smoke120ahumados](https://www.instagram.com/smoke120ahumados/)
- WhatsApp: [+54 11 5573 0406](https://wa.me/541155730406)

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Abrí `http://localhost:3000`.

Para validar producción:

```bash
npm run build
```

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Google Fonts con `next/font`
- Datos estáticos, sin backend ni carrito funcional

## Estructura de páginas

- `/` Home
- `/productos` Catálogo / tienda visual
- `/producto/brisket-smoke` Página de producto
- `/producto/bondiola-smoke` Página de producto
- `/smoke-box` Landing Smoke Box
- `/smoke-box/opciones` Comparativa de Smoke Box
- `/blog` Listado editorial
- `/blog/guia-ahumado` Artículo del blog
- `/mi-cuenta` Dashboard visual
- `/mi-cuenta/pedidos` Historial de pedidos
- `/checkout` Checkout visual

## Componentes principales

Los componentes reutilizables están en `src/components/site.tsx`:

- `Header`
- `Footer`
- `CTAButton`
- `SectionTitle`
- `OrnamentalDivider`
- `Badge`
- `ProductCard`
- `SmokeBoxCard`
- `NewsletterBlock`
- `InstagramStrip`
- `TrustBadge`
- `Hero`
- `VisualImage`

Los datos estáticos están en `src/lib/data.ts`.

## Imágenes

Colocá o reemplazá las imágenes en:

```text
public/references/home.png
public/references/catalogo.png
public/references/pdp.png
public/references/smoke-box-hero.png
public/references/smoke-box-opciones.png
public/references/blog.png
public/references/blog-articulo.png
public/references/mi-cuenta.png
public/references/mis-pedidos.png
public/references/checkout.png
public/references/logo.png
public/references/logo.svg
public/references/productos/brisket-smoke.png
public/references/productos/ribs-smoke.png
public/references/productos/pulled-pork-smoke.png
```

La demo usa esos paths como apoyo visual dentro de componentes reales. Si algún archivo falta, los bloques siguen mostrando fondos con gradients oscuros.

## Deploy en Vercel

1. Subí el proyecto a GitHub.
2. En Vercel, elegí **Add New Project**.
3. Importá el repo.
4. Framework preset: **Next.js**.
5. Build command: `npm run build`.
6. Output: automático de Next.js.
7. Deploy.

No requiere variables de entorno.
