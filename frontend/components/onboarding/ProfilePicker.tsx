"use client";

import { motion } from "framer-motion";

import ProfileCard from "./ProfileCard";

type User = {
  id: string;
  name: string;
};

type ProfilePickerProps = {
  users: User[];
  onSelect: (user: User) => void;
};

export default function ProfilePicker({
  users,
  onSelect,
}: ProfilePickerProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#08110C]">

      {/* Background */}

      <div className="absolute inset-0">

        <motion.div
          animate={{
            x: [-120, 120, -120],
            y: [-60, 40, -60],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-48
            -top-48
            h-[900px]
            w-[900px]
            rounded-full
            bg-emerald-700/20
            blur-[180px]
          "
        />

        <motion.div
          animate={{
            x: [100, -120, 100],
            y: [40, -30, 40],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-60
            -bottom-60
            h-[1000px]
            w-[1000px]
            rounded-full
            bg-green-500/10
            blur-[220px]
          "
        />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-20">

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <p className="text-center text-sm uppercase tracking-[0.4em] text-emerald-300">
            Welcome Back
          </p>

          <h1 className="mt-6 text-center font-benguiat text-6xl uppercase text-white md:text-7xl">
            Choose Your Travel Booklet
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-white/60">
            Pick who's planning today and continue your next adventure.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          {users.map((user) => {

            const theme =
              user.name.toLowerCase() === "lawrence"
                ? "navy"
                : "burgundy";

            return (
              <ProfileCard
                key={user.id}
                name={user.name}
                theme={theme}
                onClick={() => onSelect(user)}
              />
            );

          })}

        </div>

      </div>

    </div>
  );
}