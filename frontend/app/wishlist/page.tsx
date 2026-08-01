"use client";

import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import { useWishlist } from "@/context/WishlistContext";

export default function WishlistPage() {
  const { items, clear } = useWishlist();

  return (
    <DashboardLayout>

      <div className="mb-12 flex items-center justify-between">

        <div>

          <h1 className="text-6xl font-light">
            ❤️ Wishlist
          </h1>

          <p className="mt-4 text-xl text-white/60">
            Everything you've saved so far.
          </p>

        </div>

        {items.length > 0 && (

          <button
            onClick={clear}
            className="
              rounded-xl
              border
              border-red-500/40
              px-5
              py-3
              text-red-400
              transition
              hover:bg-red-500/10
            "
          >
            Clear Wishlist
          </button>

        )}

      </div>

      {items.length === 0 ? (

        <div className="rounded-3xl border border-dashed border-white/10 py-24 text-center">

          <div className="text-7xl">
            ❤️
          </div>

          <h2 className="mt-6 text-3xl font-light">
            Nothing saved yet
          </h2>

          <p className="mt-4 text-white/50">
            Start tapping hearts around the app.
          </p>

        </div>

      ) : (

        <div className="grid gap-6">

          {items.map((item) => (

            <div
              key={`${item.type}-${item.id}`}
              className="
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-6
              "
            >

              <div>

                <p className="text-sm uppercase tracking-[0.3em] text-white/40">
                  {item.type}
                </p>

                <h2 className="mt-2 text-3xl font-light">
                  {item.id}
                </h2>

              </div>

              <div className="text-5xl">
                ❤️
              </div>

            </div>

          ))}

        </div>

      )}

    </DashboardLayout>
  );
}