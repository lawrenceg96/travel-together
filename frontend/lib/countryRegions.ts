export type Region = {

  id: string;

  name: string;

  emoji: string;

  countries: string[];

};



export const countryRegions: Region[] = [


  {
    id: "europe",

    name: "Europe",

    emoji: "🌍",

    countries: [

      "albania",
      "andorra",
      "austria",
      "belarus",
      "belgium",
      "bosnia-and-herzegovina",
      "bulgaria",
      "croatia",
      "cyprus",
      "czech-republic",
      "denmark",
      "estonia",
      "finland",
      "france",
      "germany",
      "greece",
      "hungary",
      "iceland",
      "ireland",
      "italy",
      "latvia",
      "liechtenstein",
      "lithuania",
      "luxembourg",
      "malta",
      "moldova",
      "monaco",
      "montenegro",
      "netherlands",
      "north-macedonia",
      "norway",
      "poland",
      "portugal",
      "romania",
      "russia",
      "san-marino",
      "serbia",
      "slovakia",
      "slovenia",
      "spain",
      "sweden",
      "switzerland",
      "ukraine",
      "united-kingdom",
      "vatican-city"

    ]

  },


  {
    id: "asia",

    name: "Asia",

    emoji: "🌏",

    countries: [

      "japan",
      "china",
      "thailand",
      "vietnam",
      "south-korea",
      "india",
      "indonesia",
      "malaysia",
      "singapore",
      "philippines"

    ]

  },


  {
    id: "africa",

    name:"Africa",

    emoji:"🌍",

    countries:[

      "egypt",
      "south-africa",
      "morocco",
      "kenya",
      "tanzania"

    ]

  },


  {
    id:"north-america",

    name:"North America",

    emoji:"🌎",

    countries:[

      "canada",
      "united-states",
      "mexico"

    ]

  },


  {
    id:"south-america",

    name:"South America",

    emoji:"🌎",

    countries:[

      "brazil",
      "argentina",
      "chile",
      "peru"

    ]

  },


  {
    id:"oceania",

    name:"Oceania",

    emoji:"🌏",

    countries:[

      "australia",
      "new-zealand"

    ]

  }


];