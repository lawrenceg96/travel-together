export type Activity = {
  id: string;
  title: string;
  time: string;
  icon: string;
};

export type Day = {
  day: number;
  title: string;
  activities: Activity[];
};

export type Itinerary = {
  tripId: string;
  days: Day[];
};

export const itineraries: Itinerary[] = [
  {
    tripId: "italy-2027",
    days: [
      {
        day: 1,
        title: "Arrival in Rome",
        activities: [
          {
            id: "1",
            title: "Flight to Rome",
            time: "08:30",
            icon: "✈️",
          },
          {
            id: "2",
            title: "Hotel Check-in",
            time: "14:00",
            icon: "🏨",
          },
          {
            id: "3",
            title: "Dinner in Trastevere",
            time: "19:00",
            icon: "🍝",
          },
        ],
      },
      {
        day: 2,
        title: "Ancient Rome",
        activities: [
          {
            id: "4",
            title: "Colosseum",
            time: "09:00",
            icon: "🏛️",
          },
          {
            id: "5",
            title: "Roman Forum",
            time: "11:30",
            icon: "🏺",
          },
          {
            id: "6",
            title: "Trevi Fountain",
            time: "16:00",
            icon: "⛲",
          },
          {
            id: "7",
            title: "Pizza Dinner",
            time: "19:30",
            icon: "🍕",
          },
        ],
      },
    ],
  },
];