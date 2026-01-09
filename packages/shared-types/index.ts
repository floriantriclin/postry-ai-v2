export interface Jumeau {
  id: string;
  user_id: string;
  style_vector: IdentityVector;
  created_at: string;
}

export interface Post {
  id: string;
  jumeau_id: string;
  content_raw: string;
  content_refined: string;
  fidelity_ratio: number;
  created_at: string;
}

export interface IdentityVector {
  roughness: number; // 0-1
  authority: number; // 0-1
  humility: number;  // 0-1
  technicality: number; // 0-1
}
