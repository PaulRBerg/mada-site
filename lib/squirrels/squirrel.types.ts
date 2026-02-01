export type SquirrelRegion =
  | "north-america"
  | "europe"
  | "asia"
  | "africa"
  | "south-america"
  | "oceania";

export type SquirrelCategory =
  | "tree-squirrel"
  | "ground-squirrel"
  | "flying-squirrel"
  | "chipmunk"
  | "marmot";

export type ConservationStatus =
  | "least-concern"
  | "near-threatened"
  | "vulnerable"
  | "endangered"
  | "critically-endangered";

export type SquirrelDiet =
  | "nuts"
  | "seeds"
  | "fungi"
  | "insects"
  | "bark"
  | "fruits"
  | "eggs";

export type SquirrelHabitat =
  | "deciduous-forest"
  | "coniferous-forest"
  | "urban"
  | "grassland"
  | "alpine"
  | "tropical";

export type SquirrelActivity = "diurnal" | "nocturnal" | "crepuscular";

export type SquirrelCharacteristics = {
  bodyLengthCm: [number, number];
  tailLengthCm: [number, number];
  weightGrams: [number, number];
  lifespan: number;
  diet: SquirrelDiet[];
  habitat: SquirrelHabitat[];
  activity: SquirrelActivity;
  hibernates: boolean;
  canGlide: boolean;
};

export type Squirrel = {
  id: string;
  commonName: string;
  scientificName: string;
  category: SquirrelCategory;
  regions: SquirrelRegion[];
  status: ConservationStatus;
  characteristics: SquirrelCharacteristics;
  description: string;
  funFact: string;
  color: string;
};
