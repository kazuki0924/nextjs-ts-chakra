
export interface Book {
  ID: number;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt?: Date;
  title?: string;
  aka?: string;
  author?: string;
  publisher?: string;
  published_at?: string;
  total_pages?: number;
  image_url?: string;
  amazon_product_url?: string;
  emoji?: string;
}
