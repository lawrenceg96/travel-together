"use client";

interface Props {
  image: string;
  title: string;
  subtitle?: string;
}


export default function HeroImage({
  image,
  title,
  subtitle,
}: Props) {

  return (
    <div
      className="
        relative
        h-[420px]
        overflow-hidden
        rounded-[32px]
      "
    >

      <img
        src={image}
        alt={title}
        className="
          h-full
          w-full
          object-cover
        "
      />


      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/80
          via-black/20
          to-transparent
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


        {subtitle && (
          <p
            className="
              mt-3
              text-lg
              text-white/70
            "
          >
            {subtitle}
          </p>
        )}

      </div>


    </div>
  );
}