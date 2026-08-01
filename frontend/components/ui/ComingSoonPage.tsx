import DashboardLayout from "@/components/Dashboard/DashboardLayout";

type ComingSoonPageProps = {
  emoji: string;
  title: string;
  description: string;
};

export default function ComingSoonPage({
  emoji,
  title,
  description,
}: ComingSoonPageProps) {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-5xl">

        <div className="rounded-[36px] border border-white/10 bg-white/[0.03] p-16">

          <div className="text-8xl">
            {emoji}
          </div>

          <h1 className="mt-8 text-7xl font-light">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-white/60">
            {description}
          </p>

          <div className="mt-16 rounded-3xl border border-dashed border-white/10 bg-black/20 p-12 text-center">

            <h2 className="text-3xl font-light">
              Coming Soon
            </h2>

            <p className="mt-4 text-white/50">
              This section is currently being built.
              Soon you'll be able to use all of its features.
            </p>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}