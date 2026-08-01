import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import WorldMap from "@/components/World/WorldMap";

export default function WorldPage() {
  return (
    <DashboardLayout>

      <div className="mb-12">

        <h1 className="text-6xl font-light">
          World Explorer
        </h1>

        <p className="mt-4 max-w-3xl text-xl text-white/60">
          Explore countries across the globe and start planning your next adventure together.
        </p>

      </div>

      <WorldMap />

    </DashboardLayout>
  );
}