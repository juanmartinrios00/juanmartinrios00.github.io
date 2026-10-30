# juanmartinrios00.github.io

Portfolio de Juan Martín Rios. HTML, CSS y JS a mano, sin build: GitHub Pages lo sirve directo.

- `index.html`: estructura de las escenas (hero, sobre mí, proyectos, stack, idiomas, experiencia, trabajos, contacto).
- `details.js`: el contenido de la página de cada proyecto (se abre con `#slug`, por ejemplo `#pulso`).
- `main.js`: todo el contenido en ES/EN (proyectos y sus globos, stack, idiomas, experiencia) y las interacciones.
- `character.js`: el personaje. Usa los cuatro fotogramas `img/juan-*.webp` (base, parpadeo, saludo, hablando) y con "Vestime" cambia entre color, pixel y duotono.
- `icons.js`: logos de [Simple Icons](https://simpleicons.org) (CC0).
- `img/`: capturas de los proyectos y el personaje. Para el logo de La Cocina de las Marcas, poné `img/lacocina-logo.png`.
- `assets/`: el CV en PDF.

## Para verlo en local

```
python3 -m http.server 8000
```
y abrí http://localhost:8000.

## Capturas

`tools/shots.js` saca capturas de escritorio y celular de cada sitio. Corre en GitHub Actions (`.github/workflows/shots.yml`) y deja las imágenes en la rama `capturas`.
