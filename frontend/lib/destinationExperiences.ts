"use client";


export type CityExperience = {

  city: string;

  countryId: string;

  countryName: string;

  experiences: string[];

};





export const destinationExperiences: CityExperience[] = [



  // 🇯🇵 JAPAN


  {
    city: "Kyoto",

    countryId: "japan",

    countryName: "Japan",

    experiences: [

      "temples",

      "palaces",

      "historic-towns",

      "history-museums",

      "art-galleries"

    ]

  },



  {
    city: "Tokyo",

    countryId: "japan",

    countryName: "Japan",

    experiences: [

      "history-museums",

      "art-galleries",

      "aquariums",

      "shopping",

      "nightlife",

      "live-music"

    ]

  },



  {
    city: "Osaka",

    countryId: "japan",

    countryName: "Japan",

    experiences: [

      "aquariums",

      "food-markets",

      "street-food",

      "shopping",

      "nightlife"

    ]

  },



  {
    city: "Hokkaido",

    countryId: "japan",

    countryName: "Japan",

    experiences: [

      "road-trips",

      "scenic-drives",

      "wildlife",

      "nature-reserves",

      "skiing"

    ]

  },






  // 🇮🇹 ITALY


  {
    city: "Rome",

    countryId: "italy",

    countryName: "Italy",

    experiences: [

      "ancient-ruins",

      "history-museums",

      "historic-towns",

      "art-galleries",

      "local-restaurants"

    ]

  },



  {
    city: "Florence",

    countryId: "italy",

    countryName: "Italy",

    experiences: [

      "art-galleries",

      "history-museums",

      "historic-towns",

      "local-restaurants"

    ]

  },



  {
    city: "Venice",

    countryId: "italy",

    countryName: "Italy",

    experiences: [

      "historic-towns",

      "art-galleries",

      "local-restaurants"

    ]

  },



  {
    city: "Tuscany",

    countryId: "italy",

    countryName: "Italy",

    experiences: [

      "scenic-drives",

      "wine-tasting",

      "historic-towns",

      "local-restaurants"

    ]

  },








  // 🇺🇸 UNITED STATES


  {
    city: "New York",

    countryId: "united-states-of-america",

    countryName: "United States",

    experiences: [

      "history-museums",

      "art-galleries",

      "theatre",

      "live-music",

      "nightlife",

      "shopping"

    ]

  },



  {
    city: "California Coast",

    countryId: "united-states-of-america",

    countryName: "United States",

    experiences: [

      "road-trips",

      "scenic-drives",

      "beaches",

      "aquariums"

    ]

  },



  {
    city: "Utah National Parks",

    countryId: "united-states-of-america",

    countryName: "United States",

    experiences: [

      "road-trips",

      "scenic-drives",

      "hiking",

      "nature-reserves"

    ]

  },



  {
    city: "Florida",

    countryId: "united-states-of-america",

    countryName: "United States",

    experiences: [

      "aquariums",

      "zoos",

      "beaches",

      "theme-parks"

    ]

  },








  // 🇳🇿 NEW ZEALAND


  {
    city: "South Island",

    countryId: "new-zealand",

    countryName: "New Zealand",

    experiences: [

      "road-trips",

      "scenic-drives",

      "hiking",

      "wildlife"

    ]

  },



  {
    city: "Rotorua",

    countryId: "new-zealand",

    countryName: "New Zealand",

    experiences: [

      "thermal-baths",

      "nature-reserves",

      "historic-towns"

    ]

  },








  // 🇫🇷 FRANCE


  {
    city: "Paris",

    countryId: "france",

    countryName: "France",

    experiences: [

      "art-galleries",

      "history-museums",

      "palaces",

      "theatre",

      "local-restaurants"

    ]

  },



  {
    city: "French Riviera",

    countryId: "france",

    countryName: "France",

    experiences: [

      "beaches",

      "luxury-resorts",

      "scenic-drives",

      "local-restaurants"

    ]

  },








  // 🇪🇸 SPAIN


  {
    city: "Barcelona",

    countryId: "spain",

    countryName: "Spain",

    experiences: [

      "architecture",

      "art-galleries",

      "beaches",

      "local-restaurants",

      "nightlife"

    ]

  },



  {
    city: "Andalusia",

    countryId: "spain",

    countryName: "Spain",

    experiences: [

      "palaces",

      "historic-towns",

      "local-restaurants",

      "festivals"

    ]

  }



];