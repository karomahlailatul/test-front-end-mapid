# Task React Front End Developer MAPID

![Logo](https://mapid.co.id/img/mapid_logo_warna-min.png)

## Clone

Clone this project

```bash
  git clone https://github.com/karomahlailatul/test-front-end-mapid.git
```

Go to directory project

```bash
  cd test-front-end-mapid
```

Install all Package

```bash
  npm install
```

Run the Project

```bash
  npm run dev
```

### Requirement Package

- [Mapbox](https://www.mapbox.com/)
- [react-map-gl](https://urbica.github.io/react-map-gl/#/Introduction)
- [react-redux](https://react-redux.js.org/)
- [redux-toolkit](https://redux.js.org/)


## Application Structure

```
.
├── public                        # Static public assets and favicon
├── src                           # Application source code
│   ├── component                   # Store application
│   |   ├── Filter                    # Filter Data Api by colour marker
│   |   ├── index                     # initiate Filter, Layer, Menu, PopUp
│   |   ├── Layer                     # Layer Marker on Map
│   |   ├── Menu                      # Menu Bar right bottom
│   |   └── Popup                     # PopUp Show detail data Marker by Nama, Status, Angka
│   ├── configs                     # Redux configuration folder
│   |   ├── DataApi                   # Slice and Reducer Data Api 
│   |   ├── index                     # initiate Redux Store, Data Api, Token Storage
│   |   ├── Store                     # Redux Store configuration
│   |   └── TokenStorage              # Slice and Reducer Token Storage 
│   ├── scss                        # scss style folder 
│   |   ├── Component.module          # Component Module scss
│   |   ├── GlobalStyle               # Global scss
│   |   ├── index                     # initiate scss global and component
│   |   └── Variable                  # Variable scss
│   ├── App.js                      # Home Pages initiate 
│   └── index.js                    # Default Router and Redux Provider
└── package.json                  # package file
```


### Feature
- Showing Map with marker
- Show Popup on click marker
- Filter by colour on marker
- Dark/Light Map Mode

