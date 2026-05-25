import seedData from "./mines-seed.json";

export interface Mine {
  id: string;
  name: string;
  lat: number;
  lng: number;
  town: string;
  commodity_primary: string;
  commodities_secondary: string[];
  operational_period: string;
  production_volume: string;
  close_reason: string;
  claim_status: string;
  for_sale: boolean;
  listing_price: string | null;
  owner_type: string;
  mercury_risk: string;
  recovery_method_used: string;
  modern_recovery_method: string;
  satellite_signature: string;
  geological_formation: string;
  estimated_remaining_grade_low: string;
  estimated_remaining_grade_high: string;
  tailings_volume_estimate: string;
  redig_potential_score: number;
  critical_minerals_bycatch?: string[];
}

const minesArray = seedData as Mine[];
export const MINES: Mine[] = minesArray;
export const MINES_BY_ID: Record<string, Mine> = Object.fromEntries(
  minesArray.map((m) => [m.id, m])
);

export function getMine(id: string): Mine | null {
  return MINES_BY_ID[id] || null;
}
