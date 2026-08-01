import { notFound } from "next/navigation";
import Image from "next/image";

import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import ActivityCard from "@/components/Trips/ActivityCard";

import { trips } from "@/data/trips";
import { itineraries } from "@/data/itineraries";

type PageProps = {
  params: Promise<{
    tripId: string;
  }>;
};

export default async function TripPage({
  params,
}: PageProps) {
  const { tripId } = await params;

  const trip = trips.find((trip) => trip.id === tripId);

  if (!trip) {
    notFound();
  }

  const itinerary = itineraries.find(
    (itinerary) => itinerary.tripId === trip.id
  );

  return (
    <DashboardLayout>

      <div className="relative overflow-hidden rounded-3xl">

        <div className="relative h-[350px]">

          <Image
            src={trip.image}
            alt={trip.title}
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#08110C] via-black/30 to-transparent" />

          <div className="absolute bottom-10 left-10">

            <h1 className="font-benguiat text-6xl uppercase tracking-[0.08em]">
              {trip.title}
            </h1>

            <p className="mt-3 text-xl text-white/80">
              {trip.city}, {trip.country}
            </p>

          </div>

        </div>

      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

          <p className="text-sm uppercase text-white/50">
            Start Date
          </p>

          <h2 className="mt-3 text-2xl">
            {trip.startDate}
          </h2>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

          <p className="text-sm uppercase text-white/50">
            End Date
          </p>

          <h2 className="mt-3 text-2xl">
            {trip.endDate}
          </h2>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

          <p className="text-sm uppercase text-white/50">
            Travellers
          </p>

          <h2 className="mt-3 text-2xl">
            {trip.travellers}
          </h2>

        </div>

      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8">

        <div className="flex items-center justify-between">

          <h2 className="font-benguiat text-4xl uppercase">
            Itinerary
          </h2>

          <button
            className="
              rounded-xl
              bg-emerald-600
              px-5
              py-3
              font-medium
              transition
              hover:bg-emerald-500
            "
          >
            + Add Activity
          </button>

        </div>

        <div className="mt-8 space-y-8">

          {itinerary?.days.map((day) => (

            <div
              key={day.day}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >

              <p className="text-sm uppercase tracking-widest text-emerald-300">
                Day {day.day}
              </p>

              <h3 className="mt-2 text-2xl">
                {day.title}
              </h3>

              <div className="mt-6 space-y-4">

                {day.activities.map((activity) => (

                  <ActivityCard
                    key={activity.id}
                    icon={activity.icon}
                    title={activity.title}
                    time={activity.time}
                  />

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </DashboardLayout>
  );
}