export interface CountryProperties {
  name: string;
  "ISO3166-1-Alpha-2": string;
  "ISO3166-1-Alpha-3": string;
}

export type CountryFeature = GeoJSON.Feature<
  GeoJSON.Geometry,
  CountryProperties
>;

export type CountryCollection = GeoJSON.FeatureCollection<
  GeoJSON.Geometry,
  CountryProperties
>;