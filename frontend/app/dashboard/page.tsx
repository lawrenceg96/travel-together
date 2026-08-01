import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import DashboardCard from "@/components/Dashboard/DashboardCard";

export default function DashboardPage() {
  return (
    <DashboardLayout>

      <>
  <h2 className="text-5xl font-light">
    Welcome back 👋
  </h2>

  <p className="mt-4 text-white/60">
    Where would you like to begin?
  </p>

  <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

    <DashboardCard
      emoji="🛂"
      title="Passport"
      description="Choose countries you'd both love to visit."
      href="/passport"
    />

    <DashboardCard
      emoji="🌍"
      title="World"
      description="Browse the interactive world map."
    />

    <DashboardCard
      emoji="📖"
      title="Journal"
      description="Keep notes, ideas and plans."
    />

    <DashboardCard
      emoji="📸"
      title="Memories"
      description="Your favourite trips together."
    />

    <DashboardCard
      emoji="❤️"
      title="Wishlist"
      description="Places you've both matched on."
    />

    <DashboardCard
      emoji="⚙️"
      title="Settings"
      description="Personalise your experience."
    />

  </div>
</>

    </DashboardLayout>
  );
}