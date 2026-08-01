"use client";

import { motion, AnimatePresence } from "framer-motion";
import { userTrips } from "@/data/userTrips";
import { useState } from "react";

type AddToTripModalProps = {
  open: boolean;
  onClose: () => void;
  attraction: string;
};

export default function AddToTripModal({
  open,
  onClose,
  attraction,
}: AddToTripModalProps) {
  const [tripId, setTripId] = useState(userTrips[0]?.id ?? "");
  const [day, setDay] = useState("1");

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 40,
              scale: 0.96,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              fixed
              left-1/2
              top-1/2
              z-50
              w-full
              max-w-lg
              -translate-x-1/2
              -translate-y-1/2
              rounded-3xl
              border
              border-white/10
              bg-[#111]
              p-8
              shadow-2xl
            "
          >
            <h2 className="font-benguiat text-4xl uppercase">
              Add To Trip
            </h2>

            <p className="mt-3 text-white/60">
              {attraction}
            </p>

            <div className="mt-8 space-y-6">

              <div>

                <label className="mb-2 block text-sm uppercase text-white/50">
                  Trip
                </label>

                <select
                  value={tripId}
                  onChange={(e) => setTripId(e.target.value)}
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-black/20
                    p-4
                  "
                >
                  {userTrips.map((trip) => (
                    <option
                      key={trip.id}
                      value={trip.id}
                    >
                      {trip.name}
                    </option>
                  ))}
                </select>

              </div>

              <div>

                <label className="mb-2 block text-sm uppercase text-white/50">
                  Day
                </label>

                <select
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-black/20
                    p-4
                  "
                >
                  <option value="1">Day 1</option>
                  <option value="2">Day 2</option>
                  <option value="3">Day 3</option>
                  <option value="4">Day 4</option>
                  <option value="5">Day 5</option>
                </select>

              </div>

            </div>

            <div className="mt-10 flex justify-end gap-4">

              <button
                onClick={onClose}
                className="
                  rounded-xl
                  border
                  border-white/10
                  px-6
                  py-3
                "
              >
                Cancel
              </button>

              <button
                onClick={onClose}
                className="
                  rounded-xl
                  bg-emerald-600
                  px-6
                  py-3
                  hover:bg-emerald-500
                "
              >
                Add
              </button>

            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}