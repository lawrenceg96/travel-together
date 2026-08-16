export type Experience = {

  id: string;

  name: string;

  emoji: string;

  category: string;

  question: string;

};




export const experiences: Experience[] = [


  // 🏛 CULTURE & HISTORY


  {
    id: "ancient-ruins",
    name: "Ancient Ruins",
    emoji: "🏛️",
    category: "Culture",
    question:
      "Would you enjoy exploring ancient ruins and archaeological sites?"
  },


  {
    id: "castles",
    name: "Castles",
    emoji: "🏰",
    category: "Culture",
    question:
      "Would you enjoy visiting castles and historic fortresses?"
  },


  {
    id: "palaces",
    name: "Palaces",
    emoji: "👑",
    category: "Culture",
    question:
      "Would you enjoy exploring grand palaces and royal residences?"
  },


  {
    id: "temples",
    name: "Temples",
    emoji: "🏯",
    category: "Culture",
    question:
      "Would you enjoy visiting ancient temples and sacred sites?"
  },


  {
    id: "history-museums",
    name: "History Museums",
    emoji: "🏛️",
    category: "Culture",
    question:
      "Would you enjoy visiting museums about history and civilisation?"
  },


  {
    id: "art-galleries",
    name: "Art Galleries",
    emoji: "🎨",
    category: "Culture",
    question:
      "Would you enjoy exploring famous art galleries and exhibitions?"
  },


  {
    id: "historic-towns",
    name: "Historic Towns",
    emoji: "🏘️",
    category: "Culture",
    question:
      "Would you enjoy wandering through old towns and historic streets?"
  },




  // 🐾 ANIMALS & NATURE


  {
    id: "zoos",
    name: "Zoos",
    emoji: "🦁",
    category: "Nature",
    question:
      "Would you enjoy visiting zoos and wildlife parks?"
  },


  {
    id: "aquariums",
    name: "Aquariums",
    emoji: "🐠",
    category: "Nature",
    question:
      "Would you enjoy visiting world-famous aquariums?"
  },


  {
    id: "wildlife",
    name: "Wildlife Experiences",
    emoji: "🦒",
    category: "Nature",
    question:
      "Would you enjoy seeing animals in their natural habitats?"
  },


  {
    id: "safaris",
    name: "Safaris",
    emoji: "🐘",
    category: "Nature",
    question:
      "Would you enjoy going on a safari?"
  },


  {
    id: "nature-reserves",
    name: "Nature Reserves",
    emoji: "🌿",
    category: "Nature",
    question:
      "Would you enjoy exploring protected nature reserves?"
  },




  // 🚗 ADVENTURE & EXPLORATION


  {
    id: "road-trips",
    name: "Road Trips",
    emoji: "🚗",
    category: "Adventure",
    question:
      "Would you enjoy exploring a destination by road trip?"
  },


  {
    id: "scenic-drives",
    name: "Scenic Drives",
    emoji: "🏔️",
    category: "Adventure",
    question:
      "Would you enjoy driving through beautiful landscapes and viewpoints?"
  },


  {
    id: "hiking",
    name: "Hiking",
    emoji: "🥾",
    category: "Adventure",
    question:
      "Would you enjoy hiking through mountains, forests or trails?"
  },


  {
    id: "kayaking",
    name: "Kayaking",
    emoji: "🛶",
    category: "Adventure",
    question:
      "Would you enjoy going kayaking while travelling?"
  },


  {
    id: "snorkelling",
    name: "Snorkelling",
    emoji: "🤿",
    category: "Adventure",
    question:
      "Would you enjoy snorkelling in clear waters?"
  },


  {
    id: "scuba-diving",
    name: "Scuba Diving",
    emoji: "🤿",
    category: "Adventure",
    question:
      "Would you enjoy scuba diving and exploring underwater worlds?"
  },


  {
    id: "skiing",
    name: "Skiing",
    emoji: "⛷️",
    category: "Adventure",
    question:
      "Would you enjoy skiing or snowboarding?"
  },




  // 🍜 FOOD & DRINK


  {
    id: "food-markets",
    name: "Food Markets",
    emoji: "🍜",
    category: "Food",
    question:
      "Would you enjoy exploring local food markets?"
  },


  {
    id: "street-food",
    name: "Street Food",
    emoji: "🌮",
    category: "Food",
    question:
      "Would you enjoy trying famous street food?"
  },


  {
    id: "local-restaurants",
    name: "Local Restaurants",
    emoji: "🍽️",
    category: "Food",
    question:
      "Would you enjoy discovering traditional local restaurants?"
  },


  {
    id: "cooking-classes",
    name: "Cooking Classes",
    emoji: "👨‍🍳",
    category: "Food",
    question:
      "Would you enjoy learning to cook local dishes?"
  },


  {
    id: "wine-tasting",
    name: "Wine Tasting",
    emoji: "🍷",
    category: "Food",
    question:
      "Would you enjoy visiting vineyards and trying local wines?"
  },




  // 🧖 RELAXATION


  {
    id: "spa-days",
    name: "Spa Days",
    emoji: "🧖",
    category: "Relaxation",
    question:
      "Would you enjoy visiting spas and wellness retreats?"
  },


  {
    id: "thermal-baths",
    name: "Thermal Baths",
    emoji: "♨️",
    category: "Relaxation",
    question:
      "Would you enjoy relaxing in natural thermal baths?"
  },


  {
    id: "beaches",
    name: "Beaches",
    emoji: "🏖️",
    category: "Relaxation",
    question:
      "Would you enjoy spending time relaxing on beautiful beaches?"
  },


  {
    id: "luxury-resorts",
    name: "Luxury Resorts",
    emoji: "🏝️",
    category: "Relaxation",
    question:
      "Would you enjoy staying in luxury resorts?"
  },




  // 🛍 SHOPPING & COLLECTING


  {
    id: "local-crafts",
    name: "Local Crafts",
    emoji: "🎨",
    category: "Shopping",
    question:
      "Would you enjoy buying handmade local crafts?"
  },


  {
    id: "fashion",
    name: "Fashion",
    emoji: "👗",
    category: "Shopping",
    question:
      "Would you enjoy exploring fashion and shopping districts?"
  },


  {
    id: "souvenirs",
    name: "Souvenirs",
    emoji: "🎁",
    category: "Shopping",
    question:
      "Would you enjoy collecting souvenirs from places you visit?"
  },




  // 🎭 ENTERTAINMENT


  {
    id: "festivals",
    name: "Festivals",
    emoji: "🎉",
    category: "Entertainment",
    question:
      "Would you enjoy experiencing local festivals and celebrations?"
  },


  {
    id: "live-music",
    name: "Live Music",
    emoji: "🎵",
    category: "Entertainment",
    question:
      "Would you enjoy seeing live music while travelling?"
  },


  {
    id: "theatre",
    name: "Theatre",
    emoji: "🎭",
    category: "Entertainment",
    question:
      "Would you enjoy watching theatre and performances abroad?"
  },


  {
    id: "nightlife",
    name: "Nightlife",
    emoji: "🌃",
    category: "Entertainment",
    question:
      "Would you enjoy experiencing nightlife in different cities?"
  }


];