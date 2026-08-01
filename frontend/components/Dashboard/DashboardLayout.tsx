"use client";

import { ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[#090909] text-white">

      <header className="border-b border-white/10">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

          <h1
            className="text-3xl"
            style={{
              fontFamily: "serif",
            }}
          >
            Ciara & Lawrence's Holiday Planner
          </h1>

          <button className="text-2xl">
            ⚙️
          </button>

        </div>

      </header>

      <div className="mx-auto flex max-w-7xl">

        <aside className="w-64 border-r border-white/10 p-6">

          <nav className="space-y-3">

            <SidebarItem icon="🏠" text="Dashboard" />
            <SidebarItem icon="🛂" text="Passport" />
            <SidebarItem icon="🌍" text="World" />
            <SidebarItem icon="📖" text="Journal" />
            <SidebarItem icon="📸" text="Memories" />
            <SidebarItem icon="❤️" text="Wishlist" />
            <SidebarItem icon="⚙️" text="Settings" />

          </nav>

        </aside>

        <main className="flex-1 p-10">
          {children}
        </main>

      </div>

    </div>
  );
}

function SidebarItem({
  icon,
  text,
}: {
  icon: string;
  text: string;
}) {
  return (
    <button
      className="
        flex
        w-full
        items-center
        gap-3
        rounded-xl
        px-4
        py-3
        text-left
        transition
        hover:bg-white/5
      "
    >
      <span>{icon}</span>

      <span>{text}</span>
    </button>
  );
}