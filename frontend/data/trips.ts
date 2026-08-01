export type Trip = {
  id: string;
  title: string;
  country: string;
  city: string;
  startDate: string;
  endDate: string;
  image: string;
  travellers: number;
};

export const trips: Trip[] = [
  {
    id: "italy-2027",
    title: "Italy 2027",
    country: "Italy",
    city: "Rome",
    startDate: "12 May 2027",
    endDate: "21 May 2027",
    image: "/images/countries/italy.jpg",
    travellers: 2,
  },
];