"use client";

interface Props {
  image: string;
  title: string;
  subtitle?: string;
  flagImage?: string;
}


export default function HeroImage({
  image,
  title,
  subtitle,
  flagImage,
}: Props) {


  return (

    <div
      className="
        relative
        h-[420px]
        overflow-hidden
        rounded-[40px]
        bg-[#08131d]
      "
    >


      {
        flagImage &&

        <img

          src={flagImage}

          alt={title}

          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "

        />

      }



      {
        !flagImage &&

        <img

          src={image}

          alt={title}

          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "

        />

      }





      <div

        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/85
          via-black/40
          to-black/10
        "

      />





      <div

        className="
          absolute
          bottom-8
          left-8
        "

      >



        <h1

          className="
            text-5xl
            font-light
          "

        >

          {title}


        </h1>




        {
          subtitle &&

          <p

            className="
              mt-3
              text-lg
              text-white/70
            "

          >

            {subtitle}


          </p>

        }



      </div>


    </div>

  );

}