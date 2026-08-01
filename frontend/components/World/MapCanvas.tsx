"use client";

import { geoMercator, geoPath } from "d3-geo";
import { useMemo } from "react";
import {
  CountryCollection,
  CountryProperties,
} from "@/types/geo";

interface Props {
  data: CountryCollection;
  selected?: string | null;
  onHover?: (country: CountryProperties | null) => void;
  onClick?: (country: CountryProperties) => void;
}

export default function MapCanvas({
  data,
  selected,
  onHover,
  onClick,
}: Props) {
  const projection = useMemo(
    () => geoMercator().fitSize([1200, 700], data),
    [data]
  );

  const path = useMemo(
    () => geoPath(projection),
    [projection]
  );

  return (
    <svg
      viewBox="0 0 1200 700"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {data.features.map((feature, index) => {
        const props = feature.properties;

        if (!props) return null;

        const active =
          props["ISO3166-1-Alpha-2"] === selected;

        return (
          <path
            key={
              props["ISO3166-1-Alpha-3"] ?? index
            }
            d={path(feature) ?? ""}
            fill={active ? "#5C9D7A" : "#2E6F57"}
            stroke="#D6F5E3"
            strokeWidth={active ? 1 : 0.35}
            className="
              cursor-pointer
              transition-all
              duration-200
              hover:fill-[#73B38D]
            "
            onMouseEnter={() => onHover?.(props)}
            onMouseLeave={() => onHover?.(null)}
            onClick={() => onClick?.(props)}
          />
        );
      })}
    </svg>
  );
}