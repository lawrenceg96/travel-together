import { countries } from "@/lib/countries";

const overrides: Record<string, string> = {
  gb: "united-kingdom",
  us: "united-states-of-america",
  kr: "south-korea",
  kp: "north-korea",
  cz: "czechia",
  ae: "united-arab-emirates",
  vn: "vietnam",
};

const normalise = (text: string) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/'/g, "")
    .replace(/\./g, "")
    .trim();

const names = new Map<string, string>();

countries.forEach((country) => {
  names.set(normalise(country.name), country.id);
});

export function countrySlug(
  name: string,
  alpha2: string
): string | null {
  const code = alpha2.toLowerCase();

  if (overrides[code]) {
    return overrides[code];
  }

  return names.get(normalise(name)) ?? null;
}