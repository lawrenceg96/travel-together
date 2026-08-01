"use client";

import { useState } from "react";

type WelcomeScreenProps = {
  onContinue: (name: string) => void;
};

export default function WelcomeScreen({
  onContinue,
}: WelcomeScreenProps) {
  const [name, setName] = useState("");

  const handleContinue = () => {
    const trimmed = name.trim();

    if (!trimmed) return;

    onContinue(trimmed);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#08110C] p-6 text-white">

      <div
        className="
          w-full
          max-w-xl
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
          p-10
          shadow-2xl
        "
      >

        <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">
          Welcome
        </p>

        <h1 className="mt-4 font-benguiat text-5xl uppercase leading-tight">
          Travel Together
        </h1>

        <p className="mt-6 text-lg text-white/70">
          Before we begin, what's your first name?
        </p>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="First name"
          className="
            mt-8
            w-full
            rounded-2xl
            border
            border-white/10
            bg-black/20
            px-5
            py-4
            text-lg
            outline-none
            transition
            focus:border-emerald-500
          "
        />

        <button
          onClick={handleContinue}
          disabled={!name.trim()}
          className="
            mt-8
            w-full
            rounded-2xl
            bg-emerald-600
            py-4
            text-lg
            font-medium
            transition
            hover:bg-emerald-500
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          Continue
        </button>

      </div>

    </div>
  );
}