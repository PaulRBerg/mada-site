"use client";

import type { SquirrelCategory, SquirrelRegion } from "@/lib/squirrels/squirrel.types";
import { CategoryFilter } from "./CategoryFilter";
import { RegionFilter } from "./RegionFilter";

export type FilterBarProps = {
  categoryFilter: SquirrelCategory | null;
  regionFilter: SquirrelRegion | null;
  onCategoryChange: (category: SquirrelCategory | null) => void;
  onRegionChange: (region: SquirrelRegion | null) => void;
};

export function FilterBar({
  categoryFilter,
  regionFilter,
  onCategoryChange,
  onRegionChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <span className="mb-1 block text-gray-500 text-xs uppercase tracking-wide">Category</span>
        <CategoryFilter selected={categoryFilter} onSelect={onCategoryChange} />
      </div>
      <div>
        <span className="mb-1 block text-gray-500 text-xs uppercase tracking-wide">Region</span>
        <RegionFilter selected={regionFilter} onSelect={onRegionChange} />
      </div>
    </div>
  );
}
