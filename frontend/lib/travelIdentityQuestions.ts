export type TravelIdentityQuestion = {

  id:string;

  title:string;

  emoji:string;

  options:{
    id:string;
    emoji:string;
    label:string;
  }[];

};




export const travelIdentityQuestions:
TravelIdentityQuestion[] = [



  {

    id:"discover",

    title:"What do you love discovering?",

    emoji:"🏛",

    options:[

      {
        id:"history",
        emoji:"🏰",
        label:"Castles & History"
      },

      {
        id:"architecture",
        emoji:"🏛",
        label:"Architecture"
      },

      {
        id:"museums",
        emoji:"🎨",
        label:"Museums & Art"
      },

      {
        id:"villages",
        emoji:"🏘️",
        label:"Local Villages"
      },

      {
        id:"wildlife",
        emoji:"🦁",
        label:"Wildlife"
      },

      {
        id:"landmarks",
        emoji:"📸",
        label:"Famous Landmarks"
      }

    ]

  },




  {

    id:"experiences",

    title:"What experiences excite you?",

    emoji:"🌄",

    options:[

      {
        id:"hiking",
        emoji:"🥾",
        label:"Hiking"
      },

      {
        id:"food",
        emoji:"🍜",
        label:"Food Experiences"
      },

      {
        id:"beaches",
        emoji:"🏖️",
        label:"Beach Days"
      },

      {
        id:"roadtrips",
        emoji:"🚗",
        label:"Road Trips"
      },

      {
        id:"photography",
        emoji:"📷",
        label:"Photography"
      },

      {
        id:"relaxation",
        emoji:"🧘",
        label:"Relaxation"
      }

    ]

  },




  {

    id:"souvenirs",

    title:"What would you love bringing home?",

    emoji:"🛍",

    options:[

      {
        id:"crafts",
        emoji:"🎨",
        label:"Local Crafts"
      },

      {
        id:"fashion",
        emoji:"👕",
        label:"Fashion"
      },

      {
        id:"food",
        emoji:"🍫",
        label:"Local Food"
      },

      {
        id:"art",
        emoji:"🖼️",
        label:"Artwork"
      }

    ]

  },




  {

    id:"feeling",

    title:"How do you want travel to feel?",

    emoji:"✨",

    options:[

      {
        id:"culture",
        emoji:"🌍",
        label:"Discovery"
      },

      {
        id:"adventure",
        emoji:"🏔️",
        label:"Adventure"
      },

      {
        id:"romance",
        emoji:"❤️",
        label:"Romance"
      },

      {
        id:"luxury",
        emoji:"🥂",
        label:"Luxury"
      },

      {
        id:"escape",
        emoji:"🌴",
        label:"Escape"
      }

    ]

  }


];