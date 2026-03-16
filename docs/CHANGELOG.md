# [15-03-2026 - 03:19]

- Reworked `src/index.html` to a dark, minimal directory-style layout inspired by the `uShare` page while preserving the personal links for GitHub, Discord, and source access.
- Replaced the previous decorative portfolio styling in `src/css/styles.css` with a monospace, centered, dark presentation aligned with the new aesthetic.
- Simplified `src/js/main.js` by removing theme-toggle behavior that no longer matches the updated interface and keeping only canonical URL setup.

# [15-03-2026 - 03:22]

- Updated the ASCII title in `src/index.html` to match the latest provided `Melian Kor` text exactly.

# [15-03-2026 - 03:28]

- Added a low-contrast ASCII background inspired by `The Creation of Adam` in `src/index.html`.
- Updated `src/css/styles.css` to render the ASCII as a fixed decorative background behind the main content without affecting readability.

# [16-03-2026 - 00:07]

- Añadida animación `icon-bounce` en `src/css/styles.css` al hacer hover sobre los íconos sociales: sube, escala y vuelve a su posición en 0.5s.

# [16-03-2026 - 00:08]

- Añadida animación de entrada a la sección de proyectos mediante Intersection Observer en `src/js/main.js`: los elementos revelan al hacer scroll con `data-reveal` + clase `revealed`.
- Eliminado `will-change` global de `html`, `body` y `.site-shell` — en dispositivos lentos causaba consumo excesivo de memoria sin beneficio.
- Añadido `@media (prefers-reduced-motion: reduce)` en `src/css/styles.css` para desactivar todas las animaciones/transiciones en dispositivos con esa preferencia.
- Añadidos estilos `[data-reveal]` con transition delay configurable via CSS custom property.

# [16-03-2026 - 00:06]

- Añadidos logos de X (`https://x.com/meliankor`) y YouTube (`https://www.youtube.com/@meliankor`) con Bootstrap Icons (`bi-twitter-x`, `bi-youtube`).
- Orden final: GitHub → X → YouTube → Discord → Ko-fi.
- Añadidos retrasos de animación para los íconos 4º y 5º en `src/css/styles.css`.

# [16-03-2026 - 00:00]

- Añadido enlace Ko-fi en `src/index.html` como tercer ícono social, usando SVG inline con `fill="currentColor"` para que adapte su color al tema activo (claro/oscuro).
- Añadidas reglas en `src/css/styles.css` para dimensionar el SVG (`svg.social-icon`) y su retraso de animación (`nth-child(3)`).

# [15-03-2026 - 19:00]

- Removed the decorative ASCII background from `src/index.html` so the `home` project aligns more closely with the current `ushop` interface style.
- Added a muted status line and kept the centered dark panel layout to match the `ushop` visual language while preserving `home` content.
