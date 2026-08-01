"use client";

import { motion } from "framer-motion";
import ContinueButton from "./ContinueButton";

export default function TitleScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex h-screen flex-col items-center justify-center bg-[#090909] text-white"
    >
      <motion.h1
        initial={{ y: 15 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="
          text-center
          text-5xl
          md:text-7xl
          leading-tight
          tracking-wide
          font-light
        "
        style={{
          fontFamily: "serif",
        }}
      >
        Ciara & Lawrence's
        <br />
        Holiday Planner
      </motion.h1>

      <ContinueButton />
    </motion.div>
  );
}