# UK outline data

`uk.json` is a GeoJSON FeatureCollection with two features, keyed by `properties.unit`:

- `UK`: England, Scotland, Wales and Northern Ireland dissolved into one MultiPolygon
  (no internal borders), islands included.
- `IE`: the Republic of Ireland, drawn as dim context on the projects map.

## Source and licence

Natural Earth, 1:10m Cultural Vectors, "Admin 0 – Map Units" (version 5.1.1),
https://www.naturalearthdata.com/downloads/10m-cultural-vectors/

Natural Earth is in the public domain. No attribution is required, though crediting
Natural Earth is appreciated.

## How it was made

    npx mapshaper ne_10m_admin_0_map_units.shp \
      -filter 'GEOUNIT == "England" || GEOUNIT == "Scotland" || GEOUNIT == "Wales" || GEOUNIT == "Northern Ireland" || GEOUNIT == "Ireland"' \
      -each 'unit = GEOUNIT == "Ireland" ? "IE" : "UK"' \
      -dissolve unit \
      -simplify 35% keep-shapes weighted \
      -o format=geojson precision=0.001 uk.json

35% simplification keeps the coastline detailed at 900px tall (Scottish west coast and
islands recognisable) while staying under 60kb. The map projection that turns this into SVG
paths lives in `src/lib/map.ts`.
