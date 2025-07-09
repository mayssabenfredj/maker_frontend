export interface Project {
  _id: string;
  name: string;
  tagline?: string;
  description?: string;
  coverImage?: string;
  status?: string;
  technologies: string[];
  categories: string[];
  startDate?: string;
  targetDate?: string;
  team?: string[];
  repository?: string;
  videoUrl?: string;
  isFeatured?: boolean;
  priority?: string;
  completion?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateProjectDto {
  name: string;
  tagline?: string;
  description: string;
  coverImage: File | string;
  status?: string;
  technologies: string[];
  categories: string[];
  startDate?: string;
  targetDate?: string;
  team?: string[];
  repository?: string;
  videoUrl?: string;
  isFeatured?: boolean;
  priority?: string;
  completion?: number;
}

export interface UpdateProjectDto {
  name?: string;
  tagline?: string;
  description?: string;
  coverImage?: File | string;
  status?: string;
  technologies?: string[];
  categories?: string[];
  startDate?: string;
  targetDate?: string;
  team?: string[];
  repository?: string;
  videoUrl?: string;
  isFeatured?: boolean;
  priority?: string;
  completion?: number;
}
