import { countries } from "@/lib/countries";
import { cities } from "@/lib/cities";
import { attractions } from "@/lib/attractions";

export type SearchResult = {
  id: string;
  name: string;
  type: "country" | "city" | "attraction";
  subtitle: string;
  href: string;
  image?: string;
  flag?: string;
};


export function searchTravel(query: string): SearchResult[] {
  if (!query.trim()) {
    return [];
  }


  const term = query.toLowerCase().trim();


  const countryResults: SearchResult[] = countries
    .filter((country) =>
      country.name
        .toLowerCase()
        .includes(term)
    )
    .slice(0, 5)
    .map((country) => ({
      id: country.id,
      name: country.name,
      type: "country",
      subtitle: "Country",
      href: `/countries/${country.id}`,
      image: country.image,
      flag: country.flag,
    }));



  const cityResults: SearchResult[] = cities
    .filter((city) =>
      city.name
        .toLowerCase()
        .includes(term)
    )
    .slice(0, 5)
    .map((city) => ({
      id: city.id,
      name: city.name,
      type: "city",
      subtitle: "City",
      href: `/countries/${city.countryId}/${city.id}`,
      image: city.image,
    }));



  const attractionResults: SearchResult[] = attractions
    .filter((attraction) =>
      attraction.name
        .toLowerCase()
        .includes(term)
    )
    .slice(0, 5)
    .map((attraction) => {

      const city = cities.find(
        (city) =>
          city.id === attraction.cityId
      );


      return {
        id: attraction.id,
        name: attraction.name,
        type: "attraction",
        subtitle: attraction.category,
        href: city
          ? `/countries/${city.countryId}/${city.id}/${attraction.id}`
          : "#",
        image: attraction.image,
      };

    });



  return [
    ...countryResults,
    ...cityResults,
    ...attractionResults,
  ];
}