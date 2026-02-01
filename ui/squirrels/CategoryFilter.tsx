"use client";

import { ListFilter, Mouse, Mountain, Tent, TreeDeciduous, Wind } from "lucide-react";
import type { SquirrelCategory } from "@/lib/squirrels/squirrel.types";
import { Button } from "@/ui/Button";

type CategoryOption = {
  value: SquirrelCategory | null;
  label: string;
  icon: typeof ListFilter;
};

const CATEGORIES: CategoryOption[] = [
  { value: null, label: "All", icon: ListFilter },
  { value: "tree-squirrel", label: "Tree", icon: TreeDeciduous },
  { value: "ground-squirrel", label: "Ground", icon: Mountain },
  { value: "flying-squirrel", label: "Flying", icon: Wind },
  { value: "chipmunk", label: "Chipmunk", icon: Mouse },
  { value: "marmot", label: "Marmot", icon: Tent },
];

export type CategoryFilterProps = {
  selected: SquirrelCategory | null;
  onSelect: (category: SquirrelCategory | null) => void;
};

export function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map(({ value, label, icon: Icon }) => (
        <Button
          key={value ?? "all"}
          variant={selected === value ? "primary" : "ghost"}
          size="sm"
          onClick={() => onSelect(value)}
        >
          <Icon className="size-4" />
          {label}
        </Button>
      ))}
    </div>
  );
}
