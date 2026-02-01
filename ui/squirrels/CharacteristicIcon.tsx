import {
  Apple,
  Bug,
  Building2,
  Circle,
  CircleDot,
  Egg,
  Mountain,
  Moon,
  Palmtree,
  Sprout,
  Sun,
  Sunset,
  TreeDeciduous,
  TreePine,
  Wheat,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type { SquirrelActivity, SquirrelDiet, SquirrelHabitat } from "@/lib/squirrels/squirrel.types";

export function getDietIcon(diet: SquirrelDiet): LucideIcon {
  const icons: Record<SquirrelDiet, LucideIcon> = {
    nuts: CircleDot,
    seeds: Wheat,
    fungi: Circle,
    insects: Bug,
    bark: TreeDeciduous,
    fruits: Apple,
    eggs: Egg,
  };

  return icons[diet];
}

export function getHabitatIcon(habitat: SquirrelHabitat): LucideIcon {
  const icons: Record<SquirrelHabitat, LucideIcon> = {
    "deciduous-forest": TreeDeciduous,
    "coniferous-forest": TreePine,
    urban: Building2,
    grassland: Sprout,
    alpine: Mountain,
    tropical: Palmtree,
  };

  return icons[habitat];
}

export function getActivityIcon(activity: SquirrelActivity): LucideIcon {
  const icons: Record<SquirrelActivity, LucideIcon> = {
    diurnal: Sun,
    nocturnal: Moon,
    crepuscular: Sunset,
  };

  return icons[activity];
}
