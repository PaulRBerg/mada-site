"use client";

import { useState } from "react";
import { squirrels } from "@/lib/squirrels/squirrel-data";
import type { SquirrelCategory, SquirrelRegion } from "@/lib/squirrels/squirrel.types";
import { FilterBar } from "@/ui/squirrels/FilterBar";
import { RotatingSquirrel } from "@/ui/squirrels/RotatingSquirrel";
import { SquirrelCard } from "@/ui/squirrels/SquirrelCard";
import { SquirrelGrid } from "@/ui/squirrels/SquirrelGrid";
import { SquirrelStats } from "@/ui/squirrels/SquirrelStats";

export default function Home() {
  const [categoryFilter, setCategoryFilter] = useState<SquirrelCategory | null>(null);
  const [regionFilter, setRegionFilter] = useState<SquirrelRegion | null>(null);

  const filteredSquirrels = squirrels.filter((squirrel) => {
    if (categoryFilter && squirrel.category !== categoryFilter) {
      return false;
    }
    if (regionFilter && !squirrel.regions.includes(regionFilter)) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 dark:from-stone-900 dark:to-stone-950">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <header className="mb-12 flex flex-col items-center text-center">
          <RotatingSquirrel size={160} className="mb-6 text-amber-700 dark:text-amber-500" />
          <h1 className="mb-3 font-bold font-sans text-4xl text-stone-800 tracking-tight sm:text-5xl dark:text-stone-100">
            MADA
          </h1>
          <p className="mb-2 font-mono text-amber-700 text-lg dark:text-amber-400">
            The Squirrel Catalog
          </p>
          <p className="max-w-2xl text-stone-600 dark:text-stone-400">
            Discover the fascinating world of squirrels — from acrobatic tree dwellers to
            hibernating ground squirrels, gliding flyers to busy chipmunks and mighty marmots.
          </p>
        </header>

        {/* Stats Bar */}
        <div className="mb-8">
          <SquirrelStats squirrels={filteredSquirrels} />
        </div>

        {/* Filters */}
        <div className="mb-8 rounded-xl bg-white/60 p-4 shadow-sm backdrop-blur-sm dark:bg-stone-800/60">
          <FilterBar
            categoryFilter={categoryFilter}
            regionFilter={regionFilter}
            onCategoryChange={setCategoryFilter}
            onRegionChange={setRegionFilter}
          />
        </div>

        {/* Squirrel Grid */}
        <SquirrelGrid>
          {filteredSquirrels.map((squirrel) => (
            <SquirrelCard key={squirrel.id} squirrel={squirrel} />
          ))}
        </SquirrelGrid>

        {/* Empty State */}
        {filteredSquirrels.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg text-stone-500 dark:text-stone-400">
              No squirrels match your filters. Try adjusting your selection.
            </p>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 border-stone-200 border-t pt-8 text-center dark:border-stone-700">
          <p className="text-sm text-stone-500 dark:text-stone-400">
            Made with 🐿️ love for squirrels everywhere
          </p>
        </footer>
      </div>
    </div>
  );
}
