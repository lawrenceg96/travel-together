import {
  travelExperiences,
} from "@/lib/travelExperiences";


export type TravelDNAAnswer =
  | "love"
  | "enjoy"
  | "maybe"
  | "not-really"
  | "no";


export type TravelDNAResponse = {

  person:
    | "Lawrence"
    | "Ciara";

  experienceId: string;

  answer: TravelDNAAnswer;

};



export const travelDNAQuestions =
  travelExperiences.map(

    (experience) => ({

      id: experience.id,

      category: experience.category,

      question: experience.question,

      experienceName: experience.name,

    })

  );