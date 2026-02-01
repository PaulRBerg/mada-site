"use client";

import { Globe, MapPin } from "lucide-react";
import type { SquirrelRegion } from "@/lib/squirrels/squirrel.types";
import { Button } from "@/ui/Button";

type RegionOption = {
  value: SquirrelRegion | null;
  label: string;
};

const REGIONS: RegionOption[] = [
  { value: null, label: "All" },
  { value: "north-america", label: "NA" },
  { value: "europe", label: "EU" },
  { value: "asia", label: "AS" },
  { value: "africa", label: "AF" },
  { value: "south-america", label: "SA" },
  { value: "oceania", label: "OC" },
];

export type RegionFilterProps = {
  selected: SquirrelRegion | null;
  onSelect: (region: SquirrelRegion | null) => void;
};

export function RegionFilter({ selected, onSelect }: RegionFilterProps) {
  return (
    <div className="flex gap-2">
      {REGIONS.map(({ value, label }) => {
        const Icon = value === null ? Globe : MapPin;
        return (
          <Button
            key={value ?? "all"}
            variant={selected === value ? "primary" : "ghost"}
            size="sm"
            onClick={() => onSelect(value)}
          >
            <Icon className="size-4" />
            {label}
          </Button>
        );
      })}
    </div>
  );
}
