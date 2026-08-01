import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import DashboardCard from "@/components/Dashboard/DashboardCard";
import Link from "next/link";

import { trips } from "@/data/trips";

export default function DashboardPage() {
  const nextTrip = trips[0];

  return (
    <DashboardLayout>

      <h1 className="font-benguiat text-5xl uppercase tracking-[0.08em]">
        Dashboard
      </h1>

      <p className="mt-4 text-white/60">
        Welcome back. Ready for your next adventure?
      </p>

      {/* Continue Planning */}

      <div className="mt-10 rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-600/15 to-transparent p-8">

        <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">
          Continue Planning
        </p>

        <h2 className="mt-4 font-benguiat text-5xl uppercase">
          {nextTrip.title}
        </h2>

        <p className="mt-3 text-white/70">
          {nextTrip.startDate} — {nextTrip.endDate}
        </p>

        <Link
          href={`/trips/${nextTrip.id}`}
          className="
            mt-8
            inline-flex
            rounded-2xl
            bg-emerald-600
            px-6
            py-3
            font-medium
            transition
            hover:bg-emerald-500
          "
        >
          Continue Trip →
        </Link>

      </div>

      {/* Quick Access */}

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <DashboardCard
          emoji="🛂"
          title="Passport"
          description="Explore countries."
          href="/passport"
        />

        <DashboardCard
          emoji="✈️"
          title="Trips"
          description="Manage your holidays."
          href="/trips"
        />

        <DashboardCard
          emoji="❤️"
          title="Wishlist"
          description="Places you've saved."
          href="/wishlist"
        />

        <DashboardCard
          emoji="📖"
          title="Journal"
          description="Travel memories."
          href="/journal"
        />

      </div>

    </DashboardLayout>
  );
}