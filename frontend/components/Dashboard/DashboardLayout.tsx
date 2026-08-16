"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Plane,
  Globe2,
  BookOpen,
  Heart,
  Settings,
} from "lucide-react";


type DashboardLayoutProps = {
  children: ReactNode;
};



export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {


  return (

    <div>


      {/* Header */}

      <header
        className="
          sticky
          top-0
          z-50
          border-b
          border-white/10
          bg-[#090909]/90
          backdrop-blur-xl
        "
      >

        <div
          className="
            mx-auto
            flex
            h-20
            max-w-7xl
            items-center
            justify-between
            px-8
          "
        >

          <Link href="/dashboard">

            <h1
              className="
                font-benguiat
                text-3xl
                uppercase
                tracking-[0.08em]
              "
            >

              Ciara & Lawrence&apos;s

            </h1>

          </Link>



          <Link
            href="/settings"
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              transition
              hover:border-emerald-500
              hover:bg-white/5
            "
          >

            <Settings size={20} />

          </Link>


        </div>

      </header>







      <div
        className="
          mx-auto
          flex
          max-w-7xl
        "
      >



        {/* Sidebar */}


        <aside
          className="
            sticky
            top-20
            h-[calc(100vh-80px)]
            w-72
            border-r
            border-white/10
            bg-white/[0.02]
            backdrop-blur-xl
          "
        >


          <div className="p-6">


            <p
              className="
                mb-6
                text-xs
                uppercase
                tracking-[0.35em]
                text-white/40
              "
            >

              Navigation

            </p>





            <nav className="space-y-2">



              <SidebarItem

                href="/dashboard"

                icon={<LayoutDashboard size={20} />}

                text="Dashboard"

              />




              <SidebarItem

                href="/travel-dna/questionnaire"

                icon={<Globe2 size={20} />}

                text="Travel Questionnaire"

              />




              <SidebarItem

                href="/trips"

                icon={<Plane size={20} />}

                text="Trip Planner"

              />




              <SidebarItem

                href="/world"

                icon={<Globe2 size={20} />}

                text="World"

              />




              <SidebarItem

                href="/shared-world"

                icon={<Globe2 size={20} />}

                text="Shared World"

              />





              <SidebarItem

                href="/journal"

                icon={<BookOpen size={20} />}

                text="Journal"

              />





              <SidebarItem

                href="/wishlist"

                icon={<Heart size={20} />}

                text="Wishlist"

              />





              <SidebarItem

                href="/settings"

                icon={<Settings size={20} />}

                text="Settings"

              />



            </nav>



          </div>


        </aside>







        {/* Main Content */}


        <main className="flex-1 p-10">

          {children}

        </main>



      </div>


    </div>

  );

}






type SidebarItemProps = {
  href: string;
  icon: ReactNode;
  text: string;
};




function SidebarItem({
  href,
  icon,
  text,
}: SidebarItemProps) {


  const pathname =
    usePathname();



  const active =
    pathname === href ||
    (
      href !== "/dashboard" &&
      pathname.startsWith(href)
    );




  return (

    <Link

      href={href}

      className={`
        group
        relative
        flex
        items-center
        gap-4
        overflow-hidden
        rounded-2xl
        px-5
        py-4
        transition-all
        duration-300
        ${
          active
            ? "bg-emerald-600/20 text-white"
            : "text-white/65 hover:bg-white/5 hover:text-white"
        }
      `}

    >



      {
        active &&

        <div
          className="
            absolute
            left-0
            top-2
            bottom-2
            w-1
            rounded-r-full
            bg-emerald-500
          "
        />

      }





      <div
        className={`
          transition-transform
          duration-300
          ${
            active
              ? "text-emerald-400"
              : "group-hover:scale-110"
          }
        `}
      >

        {icon}

      </div>





      <span
        className="
          text-[15px]
          font-medium
        "
      >

        {text}

      </span>



    </Link>

  );

}