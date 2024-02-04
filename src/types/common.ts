export interface Pal {
  name: string;
  rarity: string;
  level: string;
  palImage: string;
  elements: {
    name: string;
    image: string;
  }[];
  works: {
    image: string;
    name: string;
    level: string;
  }[];
}

export type RarityEnum = "all" | "common" | "rare" | "epic" | "legendary";
export type ElementEnum =
  | "ice"
  | "dark"
  | "dragon"
  | "earth"
  | "leaf"
  | "electricity"
  | "water"
  | "fire"
  | "normal";
export type WorkEnum =
  | "Gathering"
  | "Cooling"
  | "Deforesting"
  | "Kindling"
  | "Generating Electricity"
  | "Handiwork"
  | "Mining"
  | "Farming"
  | "Oil Extracting"
  | "Medicine Production"
  | "Planting"
  | "Transporting"
  | "Watering";

export interface PalDetail {
  name: string;
  title: string;
  image: string;
  rarity: Rarity;
  elements: Element[];
  description: string;
  drops: Drop[];
  stats: Stat[];
  uniqueCombinations: UniqueCombination[];
  workSuitability: WorkSuitability[];
  partnerSkill: PartnerSkill;
  activeSkills: ActiveSkill[];
}

export interface Rarity {
  name: string;
  level: string;
  class: string;
}

export interface Element {
  name: string;
  image: string;
  className: string;
}

export interface Drop {
  image: string;
  name: string;
  amount: string;
  rate: string;
}

export interface Stat {
  name: string;
  value: string;
}

export interface UniqueCombination {
  male: Male;
  female: Female;
  result: Result;
}

export interface Male {
  name: string;
  image: string;
}

export interface Female {
  name: string;
  image: string;
}

export interface Result {
  name: string;
  image: string;
}

export interface WorkSuitability {
  name: string;
  isActive: boolean;
  level?: string;
  image: string;
}

export interface PartnerSkill {
  name: string;
  description: string;
}

export interface ActiveSkill {
  name: string;
  level: string;
  image: string;
  power: string;
  coolDown: string;
  range: string;
  description: string;
}

export interface Item {
  name: string;
  type: string;
  image: string;
  description: string;
  keys: Key[];
  recipe: Recipe[];
}

export interface Key {
  name: string;
  value: string;
}

export interface Recipe {
  name: string;
  image: string;
}
