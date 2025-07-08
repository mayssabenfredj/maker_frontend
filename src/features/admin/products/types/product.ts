export interface Product {
  _id: string;
  name: string;
  description?: string;
  price: number;
  category: string | { _id: string; name: string } | null;
  images?: string[];
  video?: string; // Chemin vers le fichier vidéo
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateProductDto {
  name: string;
  description?: string;
  price: number;
  category: string;
  images?: string[];
  video?: string; // Chemin vers le fichier vidéo
}

export interface UpdateProductDto {
  name?: string;
  description?: string;
  price?: number;
  category?: string;
  images?: string[];
  video?: string; // Chemin vers le fichier vidéo
}
