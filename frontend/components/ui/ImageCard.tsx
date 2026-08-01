"use client";

import Image from "next/image";
import Link from "next/link";

import FavoriteButton from "./FavoriteButton";

type ImageCardProps = {
  id: string;
  type: "country" | "city" | "attraction";
  href: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  badgeLeft?: string;
  badgeRight?: string;
};

export default function ImageCard({
  id,
  type,
  href,
  image,
  title,
  subtitle,
  description,
  badgeLeft,
  badgeRight,
}: ImageCardProps) {
  return (
    <Link
      href={href}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-white/20
        hover:shadow-2xl
        hover:shadow-black/40
      "
    >
      <div className="relative h-64">

        <FavoriteButton
          id={id}
          type={type}
        />

        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width:768px)100vw,(max-width:1280px)50vw,33vw"
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

      </div>

      <div className="space-y-4 p-6">

        <div>

          <p className="text-sm uppercase tracking-[0.35em] text-white/50">
            {subtitle}
          </p>

          <h2 className="mt-2 text-3xl font-light">
            {title}
          </h2>

        </div>

        <p className="leading-relaxed text-white/65">
          {description}
        </p>

        {(badgeLeft || badgeRight) && (
          <div className="flex items-center justify-between border-t border-white/10 pt-4 text-sm text-white/60">

            <span>{badgeLeft}</span>

            <span>{badgeRight}</span>

          </div>
        )}

      </div>
    </Link>
  );
}