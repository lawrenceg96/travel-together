"use client";

import { useState } from "react";

import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import PassportCountryCard from "@/components/Passport/PassportCountryCard";

import { countries as initialCountries } from "@/lib/countries";
import { Country } from "@/types/country";

export default function PassportPage() {
  const [countries, setCountries] = useState<Country[]>(initialCountries);

  function toggleSelection(
    id: string,
    person: "lawrence" | "ciara"
  ) {
    setCountries((currentCountries) =>
      currentCountries.map((country) => {
        if (country.id !== id) return country;

        return {
          ...country,
          [person]: !country[person],
        };
      })
    );
  }

  return (
    <DashboardLayout>
      <h1 className="text-5xl font-light">
        Passport
      </h1>

      <p className="mt-4 text-white/60">
        Choose your dream destinations together.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {countries.map((country) => (
          <PassportCountryCard
            key={country.id}
            country={country}
            onToggle={toggleSelection}
          />
        ))}
      </div>
    </DashboardLayout>
  );
}