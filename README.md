# juanmartinrios00.github.io

Portfolio de Juan Martín Rios. HTML, CSS y JS a mano, sin build: GitHub Pages lo sirve directo.

- `index.html`: estructura de las escenas (hero, sobre mí, proyectos, stack, idiomas, experiencia, trabajos, contacto).
- `main.js`: todo el contenido en ES/EN (proyectos y sus globos, stack, idiomas, experiencia) y las interacciones.
- `character.js`: el personaje. Se dibuja con formas y se pasa por un dither. Para usar una ilustración propia, poné `img/personaje.png` (fondo transparente) y cambiá `USE_IMAGE` a `true`.
- `icons.js`: logos de [Simple Icons](https://simpleicons.org) (CC0).
- `img/`: capturas de los proyectos.

## Para verlo en local

```
python3 -m http.server 8000
```
y abrí http://localhost:8000.

## Capturas

`tools/shots.js` saca capturas de escritorio y celular de cada sitio. Corre en GitHub Actions (`.github/workflows/shots.yml`) y deja las imágenes en la rama `capturas`.
