export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      jumeaux: {
        Row: {
          id: string
          user_id: string
          style_vector: Json
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          style_vector: Json
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          style_vector?: Json
          created_at?: string
        }
      }
      posts: {
        Row: {
          id: string
          jumeau_id: string
          content_raw: string
          content_refined: string
          fidelity_ratio: number
          created_at: string
        }
        Insert: {
          id?: string
          jumeau_id: string
          content_raw: string
          content_refined: string
          fidelity_ratio: number
          created_at?: string
        }
        Update: {
          id?: string
          jumeau_id?: string
          content_raw?: string
          content_refined?: string
          fidelity_ratio?: number
          created_at?: string
        }
      }
    }
  }
}
