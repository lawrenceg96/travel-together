"use client";

import Dashboard from "../Dashboard/Dashboard";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import InstaxWide from "./InstaxWide";
import TitleScreen from "./TitleScreen";

export default function OpeningScreen() {
  const [showPhoto, setShowPhoto] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPhoto(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative h-screen overflow-hidden bg-[#090909]">

      <AnimatePresence mode="wait">

        {showPhoto ? (
          <motion.div
            key="photo"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <InstaxWide />
          </motion.div>
        ) : (
          <TitleScreen />
        )}

      </AnimatePresence>

    </main>
  );
}