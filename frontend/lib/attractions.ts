export type Attraction = {
  id: string;
  cityId: string;
  name: string;
  image: string;
  category: string;
  description: string;
};

export const attractions: Attraction[] = [
  {
    id: "colosseum",
    cityId: "rome",
    name: "Colosseum",
    image: "/images/attractions/colosseum.jpg",
    category: "Historic Landmark",
    description:
      "Rome's iconic amphitheatre and one of the world's greatest ancient monuments.",
  },
  {
    id: "trevi-fountain",
    cityId: "rome",
    name: "Trevi Fountain",
    image: "/images/attractions/trevi.jpg",
    category: "Landmark",
    description:
      "Throw a coin into the fountain and ensure your return to Rome.",
  },
  {
    id: "pantheon",
    cityId: "rome",
    name: "Pantheon",
    image: "/images/attractions/pantheon.jpg",
    category: "Historic Site",
    description:
      "One of the best-preserved buildings from Ancient Rome.",
  },

  {
    id: "fushimi-inari",
    cityId: "kyoto",
    name: "Fushimi Inari Shrine",
    image: "/images/attractions/fushimi.jpg",
    category: "Shrine",
    description:
      "Famous for its thousands of vibrant red torii gates.",
  },

  {
    id: "banff-lake-louise",
    cityId: "banff",
    name: "Lake Louise",
    image: "/images/attractions/lake-louise.jpg",
    category: "Nature",
    description:
      "One of Canada's most photographed turquoise lakes.",
  },
];