export type Destination = {

  id: string;

  name: string;

  tags: string[];

};



export const destinations: Destination[] = [


  {
    id: "japan",

    name: "Japan",

    tags: [
      "culture",
      "food",
      "nature",
      "city-break",
      "history",
    ],

  },


  {
    id: "greece",

    name: "Greece",

    tags: [
      "beach",
      "food",
      "relaxation",
      "history",
      "islands",
    ],

  },


  {
    id: "italy",

    name: "Italy",

    tags: [
      "food",
      "culture",
      "history",
      "city-break",
      "art",
    ],

  },


  {
    id: "canada",

    name: "Canada",

    tags: [
      "nature",
      "adventure",
      "hiking",
      "wildlife",
      "road-trip",
    ],

  },


];