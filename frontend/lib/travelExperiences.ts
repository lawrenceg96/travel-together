export type TravelExperience = {

  id: string;

  category: string;

  name: string;

  question: string;

};



export const travelExperiences: TravelExperience[] = [


  // CULTURE

  {
    id: "ancient-temples",
    category: "Culture",
    name: "Ancient Temples",
    question:
      "Would you enjoy visiting ancient temples?"
  },


  {
    id: "museums",
    category: "Culture",
    name: "Museums",
    question:
      "Would you enjoy visiting museums?"
  },


  {
    id: "art-galleries",
    category: "Culture",
    name: "Art Galleries",
    question:
      "Would you enjoy visiting art galleries?"
  },


  {
    id: "castles-palaces",
    category: "History",
    name: "Castles and Palaces",
    question:
      "Would you enjoy exploring castles and palaces?"
  },


  {
    id: "historic-sites",
    category: "History",
    name: "Historic Sites",
    question:
      "Would you enjoy visiting important historic sites?"
  },



  // ADVENTURE


  {
    id: "road-trips",
    category: "Adventure",
    name: "Road Trips",
    question:
      "Would you enjoy going on a road trip?"
  },


  {
    id: "hiking",
    category: "Adventure",
    name: "Hiking",
    question:
      "Would you enjoy going hiking?"
  },


  {
    id: "kayaking",
    category: "Adventure",
    name: "Kayaking",
    question:
      "Would you enjoy kayaking or canoeing?"
  },


  {
    id: "scuba-diving",
    category: "Adventure",
    name: "Scuba Diving",
    question:
      "Would you enjoy scuba diving or snorkelling?"
  },



  // WILDLIFE


  {
    id: "zoos",
    category: "Wildlife",
    name: "Zoos",
    question:
      "Would you enjoy visiting zoos?"
  },


  {
    id: "aquariums",
    category: "Wildlife",
    name: "Aquariums",
    question:
      "Would you enjoy visiting aquariums?"
  },


  {
    id: "safaris",
    category: "Wildlife",
    name: "Safaris",
    question:
      "Would you enjoy going on a safari?"
  },


  {
    id: "nature-reserves",
    category: "Wildlife",
    name: "Nature Reserves",
    question:
      "Would you enjoy exploring nature reserves?"
  },



  // RELAXATION


  {
    id: "spa-days",
    category: "Relaxation",
    name: "Spa Days",
    question:
      "Would you enjoy having spa days?"
  },


  {
    id: "beaches",
    category: "Relaxation",
    name: "Beach Days",
    question:
      "Would you enjoy relaxing on beaches?"
  },


  {
    id: "slow-travel",
    category: "Relaxation",
    name: "Slow Travel",
    question:
      "Would you enjoy slower paced travel?"
  },



  // FOOD


  {
    id: "food-markets",
    category: "Food",
    name: "Food Markets",
    question:
      "Would you enjoy exploring local food markets?"
  },


  {
    id: "cooking-classes",
    category: "Food",
    name: "Cooking Classes",
    question:
      "Would you enjoy taking cooking classes?"
  },


  {
    id: "fine-dining",
    category: "Food",
    name: "Fine Dining",
    question:
      "Would you enjoy trying high-end restaurants?"
  },



  // SHOPPING


  {
    id: "local-shopping",
    category: "Shopping",
    name: "Local Shopping",
    question:
      "Would you enjoy shopping for local items and souvenirs?"
  },


  {
    id: "markets",
    category: "Shopping",
    name: "Markets",
    question:
      "Would you enjoy visiting markets?"
  },


];