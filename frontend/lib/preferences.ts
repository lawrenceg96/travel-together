export type PreferenceOption = {
  id: string;
  label: string;
  emoji: string;
  category: string;
};


export const preferenceCategories = [

  {
    id: "holiday-style",
    title: "Holiday Style",
    description: "What type of trips do you enjoy?",
    options: [
      {
        id: "beach",
        label: "Beach holidays",
        emoji: "🏖️",
        category: "holiday-style",
      },
      {
        id: "city-break",
        label: "City breaks",
        emoji: "🏙️",
        category: "holiday-style",
      },
      {
        id: "luxury",
        label: "Luxury travel",
        emoji: "✨",
        category: "holiday-style",
      },
      {
        id: "adventure",
        label: "Adventure travel",
        emoji: "🌄",
        category: "holiday-style",
      },
      {
        id: "road-trip",
        label: "Road trips",
        emoji: "🚗",
        category: "holiday-style",
      },
      {
        id: "all-inclusive",
        label: "All inclusive",
        emoji: "🏝️",
        category: "holiday-style",
      },
    ],
  },


  {
    id: "activities",
    title: "Activities",
    description: "What would you like to do?",
    options: [
      {
        id: "hiking",
        label: "Hiking mountains",
        emoji: "🥾",
        category: "activities",
      },
      {
        id: "kayaking",
        label: "Kayaking",
        emoji: "🛶",
        category: "activities",
      },
      {
        id: "snorkelling",
        label: "Snorkelling",
        emoji: "🤿",
        category: "activities",
      },
      {
        id: "museums",
        label: "Museums",
        emoji: "🏛️",
        category: "activities",
      },
      {
        id: "spas",
        label: "Spa days",
        emoji: "🧖",
        category: "activities",
      },
      {
        id: "zoos",
        label: "Zoos & wildlife",
        emoji: "🦁",
        category: "activities",
      },
      {
        id: "food",
        label: "Food experiences",
        emoji: "🍝",
        category: "activities",
      },
      {
        id: "nightlife",
        label: "Nightlife",
        emoji: "🌃",
        category: "activities",
      },
    ],
  },


  {
    id: "accommodation",
    title: "Accommodation",
    description: "Where would you like to stay?",
    options: [
      {
        id: "hotel",
        label: "Hotels",
        emoji: "🏨",
        category: "accommodation",
      },
      {
        id: "airbnb",
        label: "Apartments / Airbnb",
        emoji: "🏠",
        category: "accommodation",
      },
      {
        id: "villa",
        label: "Private villas",
        emoji: "🏡",
        category: "accommodation",
      },
      {
        id: "resort",
        label: "Resorts",
        emoji: "🌴",
        category: "accommodation",
      },
    ],
  },


  {
    id: "budget",
    title: "Spending Style",
    description: "How do you like to spend?",
    options: [
      {
        id: "budget-friendly",
        label: "Budget conscious",
        emoji: "💰",
        category: "budget",
      },
      {
        id: "balanced",
        label: "Balanced spending",
        emoji: "⚖️",
        category: "budget",
      },
      {
        id: "premium",
        label: "Premium experiences",
        emoji: "💎",
        category: "budget",
      },
      {
        id: "luxury-budget",
        label: "Luxury experiences",
        emoji: "👑",
        category: "budget",
      },
    ],
  },

];