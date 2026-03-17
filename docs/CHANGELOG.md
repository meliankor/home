# [17-03-2026 - 23:30]

- Corregido el centrado de los anuncios: el carrusel ahora usa `style.display = "none"` en lugar del atributo `hidden`, garantizando que solo el anuncio activo ocupa espacio en el layout y `text-align: center` del contenedor funcione correctamente.

# [17-03-2026 - 23:00]

- Carrusel de anuncios: segundo anuncio "He agregado un nuevo proyecto, échale un vistazo." apuntando al repo de Animal Crossing PC Port. Fade de 350ms entre anuncios cada 6s.
- Botón de idioma con icono `bi-translate` debajo del toggle de tema, guardado en localStorage. Aplica traducciones mediante `data-i18n` sin recargar la página.
- Nuevo proyecto "Animal Crossing — PC Port" en la sección de proyectos apuntando a https://github.com/meliankor/animal-crossing-pc-port.
- Todos los textos dinámicos etiquetados con `data-i18n`: badge, textos de anuncios, título "Proyectos", descripciones de ambos proyectos.

# [17-03-2026 - 22:30]

- Añadido `.announcement-meta` en HTML para agrupar badge + icono juntos, evitando que queden como elementos huérfanos en móvil al hacer wrap.
- CSS móvil (≤640px): barra con altura automática, texto ocupa su propia fila (`flex: 1 1 100%`), `white-space: normal` para que fluya sin cortes.
- Restaurado `positionThemeToggle` con `ResizeObserver` para posicionar el toggle dinámicamente debajo de la barra en cualquier altura.

# [17-03-2026 - 22:00]

- Rediseño definitivo de la barra de anuncios: se abandona la píldora en el hero.
- Barra superior con `position: absolute`, centrado vía `text-align: center` + `display: inline-flex` en `.announcement`.
- Toggle reposicionado a `top: calc(2.75rem + 0.6rem)`, justo debajo de la barra.
- Delays de animación del hero reescalonados (título: 0.2s, social links: 0.35s, iconos: 350–750ms) para sincronizar con la entrada de la barra.

# [17-03-2026 - 21:30]

- Rediseño de la sección de anuncios: se abandona el enfoque de barra superior y se adopta una píldora centrada dentro del hero, antes del título.
- Eliminados: `.announcement-bar`, `topBarReveal`, `mobileBarReveal`, `positionThemeToggle` y toda la lógica de posicionamiento dinámico.
- El toggle de tema vuelve a `position: absolute; top: 1.5rem; right: 1.5rem` sin JS.

# [17-03-2026 - 21:00]

- En móvil (≤640px): la barra de anuncios se rediseña como tarjeta flotante en la parte inferior de la pantalla (`position: fixed; bottom: 1.25rem`) con border-radius, borde completo y sombra.
- Animación móvil independiente (`mobileBarReveal`): entra desde abajo con `animation-delay: 0.6s` para no solapar con el hero.
- JS: `positionThemeToggle` usa `matchMedia` para aplicar el posicionamiento dinámico solo en escritorio (≥641px).

# [17-03-2026 - 20:30]

- El toggle de tema se ha separado de la barra de anuncios y vuelve a su propio `theme-toggle-wrap`.
- La barra de anuncios ahora usa `position: absolute` (no sigue al hacer scroll).
- El toggle se posiciona dinámicamente via `ResizeObserver` justo debajo de la barra.
- Texto actualizado: "¿Necesitas un servidor de Discord? No te preocupes, envíame un mensaje para ayudarte."
- Mejora móvil (≤640px): flecha oculta para liberar espacio, texto a 2 líneas máximo con `-webkit-line-clamp`.

# [17-03-2026 - 20:00]

- La sección de anuncios se ha rediseñado como barra fija (`position: fixed`) en la parte superior de la página, eliminando el panel flotante anterior.
- El toggle de tema se ha integrado dentro de la misma barra, eliminando el `theme-toggle-wrap` independiente.
- La barra entra con animación `topBarReveal` (slide desde arriba).
- Delays del hero reescalonados (título: 0.2s, social links: 0.35s, iconos: 350–750ms) para cascada sincronizada con la barra.

# [17-03-2026 - 00:30]

- El aviso de Discord se ha convertido en una sección de anuncios con panel expandible/colapsable.
- En escritorio (≥768px): panel siempre expandido con fondo secundario diferenciado, sombra y cabecera "Anuncios" con icono de megáfono.
- En móvil (<768px): panel colapsado por defecto; un botón chevron lo expande/cierra con animación suave mediante `grid-template-rows`.
- Al redimensionar de móvil a escritorio, el estado colapsado se resetea automáticamente vía `matchMedia`.

# [17-03-2026 - 00:00]

- Añadido un aviso en la esquina superior izquierda con el texto "¿Necesitas un servidor de Discord? — No te preocupes, puedo ayudarte." que enlaza al perfil de Discord del autor.
- El aviso incluye icono de Discord, animación de entrada y hover con elevación.
