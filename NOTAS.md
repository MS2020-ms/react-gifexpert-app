### Inicio
  >npm create-react-app gif-expert-app

## component GifExpertApp 
## Lista de categorias
## component AddCategory 

### Comunicacion entre Componentes
- envio desde GifExpertApp las setCategories a AddCategory por los props
- en componente AddCategory -> propTypes de setCategories requerido!
### Fetch API
# component GifGrid
- ir https://developers.giphy.com/docs/api/endpoint#search -> Gif URL
  api.giphy.com/v1/gifs/search
  q:Hulk
  limit:10 
  api key: DJAwg0P2H8NOAW9LPH6yLnqHuCuevuPz =>

  api.giphy.com/v1/gifs/search?q=Hulk&limit=10&api_key=DJAwg0P2H8NOAW9LPH6yLnqHuCuevuPz
  probar peticion GET en Postman
# useEffect
# component GifGridItem
# className -> clases en CSS
# Helpers
  getGifs
# Custom Hook
  useFetchGifs
# Animaciones por CSS 
  ir https://animate.style/ -> using a CDN:
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
  pegar en public/index.html

### Generando el build de producción y despliegues en Github Pages
- >npm run build
- https://www.npmjs.com/package/http-server (creamos un server local para probar el build)
  npm install --global http-server
- terminal en carpeta de proyecto/build
  >http-server -o
- navegador http://localhost:8080/
# despliegues en Github Pages
- >git init
  >git add .
  >git commit -m "First commit" 
- renombrar carpeta build por docs
  >git add .
  >git commit -m "docs agragado" 
- en github creo un nuevo repostorio:
  >git remote add origin https://github.com/MS2020-ms/react-gifexpert-app.git
  >git branch -M main
  >git push -u origin main

- en github -> Settings/GitHub Pages 
  source main: /docs save
  GitHub Pages -> link -> https://ms2020-ms.github.io/react-gifexpert-app/
  Si da ERROR, ir build index.html y poner eun punto ante cada href="./
