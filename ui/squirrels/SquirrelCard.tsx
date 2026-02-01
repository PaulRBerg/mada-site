import {
  Clock,
  ExternalLink,
  Plane,
  Ruler,
  Scale,
  Snowflake,
  Squirrel as SquirrelIcon,
  TreePine,
} from "lucide-react";
import { tv } from "tailwind-variants";

import { cn } from "@/lib/cn";
import type { Squirrel, SquirrelCategory, SquirrelRegion } from "@/lib/squirrels/squirrel.types";
import { SmartLink } from "@/ui/SmartLink";

import { getActivityIcon, getDietIcon, getHabitatIcon } from "./CharacteristicIcon";
import { StatusBadge } from "./StatusBadge";

type SquirrelCardProps = {
  squirrel: Squirrel;
};

const card = tv({
  base: "block rounded-lg bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md",
  variants: {
    status: {
      "least-concern": "border border-green-200 hover:border-green-300",
      "near-threatened": "border border-yellow-200 hover:border-yellow-300",
      vulnerable: "border border-orange-200 hover:border-orange-300",
      endangered: "border border-red-200 hover:border-red-300",
      "critically-endangered": "border border-red-300 hover:border-red-400",
    },
  },
});

function getWikipediaUrl(scientificName: string): string {
  return `https://en.wikipedia.org/wiki/${scientificName.replace(/ /g, "_")}`;
}

const categoryIcons: Record<SquirrelCategory, typeof SquirrelIcon> = {
  "tree-squirrel": SquirrelIcon,
  "ground-squirrel": SquirrelIcon,
  "flying-squirrel": Plane,
  chipmunk: SquirrelIcon,
  marmot: SquirrelIcon,
};

const regionAbbreviations: Record<SquirrelRegion, string> = {
  "north-america": "NA",
  europe: "EU",
  asia: "AS",
  africa: "AF",
  "south-america": "SA",
  oceania: "OC",
};

function formatRange(range: [number, number], unit: string): string {
  return `${range[0]}-${range[1]}${unit}`;
}

export function SquirrelCard({ squirrel }: SquirrelCardProps) {
  const { characteristics, status } = squirrel;
  const CategoryIcon = categoryIcons[squirrel.category];
  const ActivityIcon = getActivityIcon(characteristics.activity);
  const wikipediaUrl = getWikipediaUrl(squirrel.scientificName);

  return (
    <SmartLink href={wikipediaUrl} className={card({ status })}>
      <article>
        {/* Header */}
        <header className="flex items-center gap-2">
          <CategoryIcon className="size-5 text-gray-600" />
          <h3 className="font-semibold">{squirrel.commonName}</h3>
          <ExternalLink className="ml-auto size-3.5 text-gray-400" />
        </header>

        {/* Scientific name */}
        <p className="font-mono text-gray-500 text-xs italic">{squirrel.scientificName}</p>

        <hr className="my-2 border-gray-100" />

        {/* Stats row */}
        <div className="flex flex-wrap gap-3 text-gray-600 text-xs">
          <span className="flex items-center gap-1" title="Body length">
            <Ruler className="size-3" />
            {formatRange(characteristics.bodyLengthCm, "cm")}
          </span>
          <span className="flex items-center gap-1" title="Weight">
            <Scale className="size-3" />
            {formatRange(characteristics.weightGrams, "g")}
          </span>
          <span className="flex items-center gap-1" title="Lifespan">
            <Clock className="size-3" />
            {characteristics.lifespan}y
          </span>
        </div>

        {/* Diet icons */}
        <div className="mt-2 flex items-center gap-1">
          <span className="text-gray-500 text-xs">Diet:</span>
          <div className="flex gap-1">
            {characteristics.diet.map((diet) => {
              const Icon = getDietIcon(diet);
              return (
                <span key={diet} title={diet}>
                  <Icon className="size-3.5 text-gray-500" />
                </span>
              );
            })}
          </div>
        </div>

        {/* Habitat icons */}
        <div className="mt-1 flex items-center gap-1">
          <span className="text-gray-500 text-xs">Habitat:</span>
          <div className="flex gap-1">
            {characteristics.habitat.map((habitat) => {
              const Icon = getHabitatIcon(habitat);
              return (
                <span key={habitat} title={habitat}>
                  <Icon className="size-3.5 text-gray-500" />
                </span>
              );
            })}
          </div>
        </div>

        {/* Activity, hibernation, gliding */}
        <div className="mt-2 flex flex-wrap items-center gap-2 text-gray-600 text-xs">
          <span className="flex items-center gap-1" title={characteristics.activity}>
            <ActivityIcon className="size-3.5" />
            {characteristics.activity}
          </span>
          {characteristics.hibernates && (
            <span className="flex items-center gap-1 text-blue-600" title="Hibernates">
              <Snowflake className="size-3.5" />
              hibernates
            </span>
          )}
          {characteristics.canGlide && (
            <span className="flex items-center gap-1 text-purple-600" title="Can glide">
              <TreePine className="size-3.5" />
              glides
            </span>
          )}
        </div>

        {/* Regions */}
        <div className="mt-2 flex flex-wrap gap-1">
          {squirrel.regions.map((region) => (
            <span
              key={region}
              className={cn("rounded bg-gray-100 px-1.5 py-0.5 text-gray-600 text-xs")}
              title={region.replace("-", " ")}
            >
              {regionAbbreviations[region]}
            </span>
          ))}
        </div>

        <hr className="my-2 border-gray-100" />

        {/* Status badge */}
        <div className="flex items-center justify-between">
          <StatusBadge status={status} />
        </div>

        {/* Fun fact */}
        <p className="mt-2 text-gray-600 text-sm italic">"{squirrel.funFact}"</p>
      </article>
    </SmartLink>
  );
}
