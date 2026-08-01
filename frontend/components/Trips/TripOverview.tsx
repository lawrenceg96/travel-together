"use client";

type TripOverviewProps = {
  days: number;
  activities: number;
  travellers: number;
};

export default function TripOverview({
  days,
  activities,
  travellers,
}: TripOverviewProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

        <p className="text-sm uppercase tracking-wider text-white/50">
          Days
        </p>

        <h2 className="mt-4 text-5xl font-light">
          {days}
        </h2>

      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

        <p className="text-sm uppercase tracking-wider text-white/50">
          Activities
        </p>

        <h2 className="mt-4 text-5xl font-light">
          {activities}
        </h2>

      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

        <p className="text-sm uppercase tracking-wider text-white/50">
          Travellers
        </p>

        <h2 className="mt-4 text-5xl font-light">
          {travellers}
        </h2>

      </div>

    </div>
  );
}