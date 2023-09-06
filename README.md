# leu-design-scaffold

## Auschecken und Loslegen

- Folgendes muss installiert sein: NodeJS mit NPM
- Im Hauptverzeichnis: `npm update`


## Starten und Entwickeln

Im Projektverzeichnis

```
webpack-dev-server
```

ausführen. Die Website aus `html/index.html` ist dann unter http://localhost:4000 erreichbar.


## Dateien

- `webpack.config.js` - Webpack Konfiguration für Dev-Server und Build
- `html/index.html` - HTML Datei für die Website
- `src/` - Hier liegen die Quelldateien (SCSS) für die Website


## Elementnamen

Bitte BEM (Block Element Modifier) Notation verwenden. Siehe https://en.bem.info/methodology/quick-start/

Den namen von Element mit `tjs-` Prefixen: z.B. `tjs-header1`


## Best Practices

### Hintergrundbilder

Statt `background-image: url()` zu verwenden, sollte das Bild als `<img>` eingebunden werden und 
per `object-fit: cover` über den Container gestretcht werden. 
