// Shared projection for the projects map. Runs at build time only: d3-geo never ships
// to the browser. Outline paths and pin positions both come from `projection`, so they
// always agree.
import { geoPath, geoTransverseMercator } from 'd3-geo';
import type { FeatureCollection } from 'geojson';
import uk from '@/data/geo/uk.json';

export const MAP_W = 600;
export const MAP_H = 900;
const PAD = 28;

const features = uk as FeatureCollection;

// Transverse Mercator centred on 2°W (the same basis as the Ordnance Survey grid). Chosen
// over plain Mercator because it keeps Britain upright and Shetland in proportion.
export const projection = geoTransverseMercator()
  .rotate([2, 0])
  .fitExtent(
    [
      [PAD, PAD],
      [MAP_W - PAD, MAP_H - PAD],
    ],
    features,
  );

const path = geoPath(projection).digits(1);
const unit = (id: string) => {
  const f = features.features.find((f) => f.properties?.unit === id);
  if (!f) throw new Error(`uk.json is missing the "${id}" feature`);
  return f;
};

export const viewBox = `0 0 ${MAP_W} ${MAP_H}`;
export const paths = {
  uk: path(unit('UK')) ?? '',
  ie: path(unit('IE')) ?? '',
};

/** Map a lat/lng pair to SVG user units inside `viewBox`. */
export function project(lat: number, lng: number): [number, number] {
  const p = projection([lng, lat]);
  if (!p) throw new Error(`Could not project ${lat}, ${lng}`);
  return [Math.round(p[0] * 10) / 10, Math.round(p[1] * 10) / 10];
}
