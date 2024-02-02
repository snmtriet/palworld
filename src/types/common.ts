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
