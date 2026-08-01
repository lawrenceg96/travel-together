import countries from "@/data/countries.geojson";
import { CountryCollection } from "@/types/geo";

export function loadCountries(): CountryCollection {
  return countries as CountryCollection;
}