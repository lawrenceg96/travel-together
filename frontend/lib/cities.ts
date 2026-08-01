export type City = {
  id: string;
  countryId: string;
  name: string;
  image: string;
  budget: string;
  season: string;
  description: string;
};

export const cities: City[] = [
  // Italy
  {
    id: "rome",
    countryId: "italy",
    name: "Rome",
    image: "/images/cities/rome.jpg",
    budget: "£££",
    season: "Apr • May • Sep",
    description: "History, food and iconic landmarks.",
  },
  {
    id: "florence",
    countryId: "italy",
    name: "Florence",
    image: "/images/cities/florence.jpg",
    budget: "£££",
    season: "Apr • Jun",
    description: "Art, architecture and Tuscan charm.",
  },
  {
    id: "venice",
    countryId: "italy",
    name: "Venice",
    image: "/images/cities/venice.jpg",
    budget: "£££",
    season: "May • Sep",
    description: "Canals, sunsets and hidden streets.",
  },
  {
    id: "milan",
    countryId: "italy",
    name: "Milan",
    image: "/images/cities/milan.jpg",
    budget: "£££",
    season: "Apr • Oct",
    description: "Fashion and modern Italy.",
  },
  {
    id: "naples",
    countryId: "italy",
    name: "Naples",
    image: "/images/cities/naples.jpg",
    budget: "££",
    season: "May • Sep",
    description: "Pizza, coastline and vibrant culture.",
  },
  {
    id: "amalfi-coast",
    countryId: "italy",
    name: "Amalfi Coast",
    image: "/images/cities/amalfi.jpg",
    budget: "£££",
    season: "May • Jun",
    description: "Cliffside villages and turquoise seas.",
  },

  // Japan
  {
    id: "tokyo",
    countryId: "japan",
    name: "Tokyo",
    image: "/images/cities/tokyo.jpg",
    budget: "£££",
    season: "Mar • Apr • Nov",
    description: "Neon lights, sushi and incredible culture.",
  },
  {
    id: "kyoto",
    countryId: "japan",
    name: "Kyoto",
    image: "/images/cities/kyoto.jpg",
    budget: "£££",
    season: "Mar • Apr",
    description: "Temples, gardens and cherry blossom.",
  },
  {
    id: "osaka",
    countryId: "japan",
    name: "Osaka",
    image: "/images/cities/osaka.jpg",
    budget: "££",
    season: "Apr • Oct",
    description: "Street food and nightlife.",
  },

  // Norway
  {
    id: "oslo",
    countryId: "norway",
    name: "Oslo",
    image: "/images/cities/oslo.jpg",
    budget: "£££",
    season: "Jun • Jul",
    description: "Modern Nordic capital.",
  },
  {
    id: "bergen",
    countryId: "norway",
    name: "Bergen",
    image: "/images/cities/bergen.jpg",
    budget: "£££",
    season: "Jun • Aug",
    description: "Gateway to the fjords.",
  },
  {
    id: "tromso",
    countryId: "norway",
    name: "Tromsø",
    image: "/images/cities/tromso.jpg",
    budget: "£££",
    season: "Jan • Mar",
    description: "Northern Lights and Arctic adventures.",
  },

  // Canada
  {
    id: "vancouver",
    countryId: "canada",
    name: "Vancouver",
    image: "/images/cities/vancouver.jpg",
    budget: "£££",
    season: "Jun • Sep",
    description: "Mountains, ocean and city life.",
  },
  {
    id: "banff",
    countryId: "canada",
    name: "Banff",
    image: "/images/cities/banff.jpg",
    budget: "£££",
    season: "Jun • Sep",
    description: "Turquoise lakes and wildlife.",
  },

  // Greece
  {
    id: "athens",
    countryId: "greece",
    name: "Athens",
    image: "/images/cities/athens.jpg",
    budget: "££",
    season: "Apr • May",
    description: "Ancient history and Mediterranean food.",
  },
  {
    id: "santorini",
    countryId: "greece",
    name: "Santorini",
    image: "/images/cities/santorini.jpg",
    budget: "£££",
    season: "May • Jun",
    description: "White villages and blue seas.",
  },

  // New Zealand
  {
    id: "queenstown",
    countryId: "new-zealand",
    name: "Queenstown",
    image: "/images/cities/queenstown.jpg",
    budget: "£££",
    season: "Dec • Feb",
    description: "Adventure capital of the world.",
  },
  {
    id: "auckland",
    countryId: "new-zealand",
    name: "Auckland",
    image: "/images/cities/auckland.jpg",
    budget: "£££",
    season: "Dec • Mar",
    description: "Harbour city with island escapes.",
  },
];