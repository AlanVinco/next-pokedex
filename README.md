Sitio creado en Next Js v14 y (https://pokeapi.co/)

## Requerimientos

- nodeV18

## Levantar entorno
- Clonar el repositorio 
- instalar dependencias
```bash
npm install
```


## Correr proyecto
```bash
npm run dev
```

Abrir en [http://localhost:3000](http://localhost:3000) en el navegador para ver los resultados.

## Singleton

El patrón Singleton asegura que una clase tenga una única instancia y proporciona un punto de acceso global a ella. Esto puede ser útil para manejar una instancia única de la conexión a la API o de la caché de datos.

## Arquitectura

```bash
app/
├── node_modules/
├── public/
│ └── images/
│ └── favicon.ico
├── app/
│ ├── components/
│ │ ├── cardMenu.tsx
│ │ ├── search.tsx
│ │ ├── table.tsx
│ │ └── translate.tsx
│ ├── interfaces/
│ │ └── pokemonTypes.ts
│ ├── pokedex/
│ │ └── pokemonId/
│ │ └── page.tsx
│ ├── _app.js
│ ├── _global.d.ts
│ ├── _global.css
│ ├── _layout.tsx
│ ├── _not-found.tsx
│ └── _page.tsx
├── styles/
│ ├── globals.css
│ └── Home.module.css
├── .gitignore
├── package.json
├── README.md
└── next.config.js
```

## Desiciones de Diseño

Para la parte de diseño, opté por los colores de los tres tipos primarios de Pokémon (fuego, agua y planta) en la parte del home, con una animación sencilla y un botón que te redirige hacia la Pokédex. Esto permite que el usuario se centre en la acción del botón.

![tipos primarios](https://cdn.wikimg.net/en/splatoonwiki/images/thumb/0/09/S3_Splatfest_Grass_vs_Fire_vs_Water.png/334px-S3_Splatfest_Grass_vs_Fire_vs_Water.png)

Para la sección de la Pokédex, me basé en el diseño de Pokémon Espada y Escudo que tiene tres colores primarios: blanco, naranja y rojo. Esto crea una atmósfera más amena y cálida, logrando estéticamente un concepto más limpio y ordenado para poder mostrar todo el catálogo de Pokémon. Estos, a su vez, están encerrados en un círculo para destacar la figura del Pokémon y adaptarlo visualmente mejor.

![Pokedex espada y escudo](https://i.ytimg.com/vi/8FDoyCsUt6A/maxresdefault.jpg)

En la sección del Pokémon, seguí el mismo patrón de colores para mantener la estética previamente mostrada, resaltando los atributos del Pokémon y colocando una animación similar a la que se muestra en los juegos. Los movimientos tienen un estilo arcade, similar a los botones en los juegos de Pokémon para DS.

![Botones Pokémon](https://lh3.googleusercontent.com/proxy/PCswIFQeOOkIe0GDz_7C2xVgi3lqpOvDB-KyOzRALR67_XlbFVfXNUe15INhTewZaxmQZAB1xIDBO5ZAUBIKLMvKwlZZbHD3vj1SwaHe7pMuKe8Ubg)

Por último, la página de error tiene un estilo más simple para no perder visibilidad con las demás páginas, pero agregando un Easter Egg en la misma.
