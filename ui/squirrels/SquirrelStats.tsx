import { Globe, Layers, Squirrel } from "lucide-react";

import type { Squirrel as SquirrelType } from "@/lib/squirrels/squirrel.types";

type SquirrelStatsProps = {
  squirrels: SquirrelType[];
};

export function SquirrelStats({ squirrels }: SquirrelStatsProps) {
  const totalSpecies = squirrels.length;

  const uniqueRegions = new Set(squirrels.flatMap((s) => s.regions)).size;

  const uniqueCategories = new Set(squirrels.map((s) => s.category)).size;

  return (
    <div className="flex items-center justify-center gap-4 text-gray-600 text-sm">
      <div className="flex items-center gap-1.5">
        <Squirrel className="size-4" />
        <span>{totalSpecies} Species</span>
      </div>
      <span className="text-gray-300">•</span>
      <div className="flex items-center gap-1.5">
        <Globe className="size-4" />
        <span>{uniqueRegions} Regions</span>
      </div>
      <span className="text-gray-300">•</span>
      <div className="flex items-center gap-1.5">
        <Layers className="size-4" />
        <span>{uniqueCategories} Categories</span>
      </div>
    </div>
  );
}
