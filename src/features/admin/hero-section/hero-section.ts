export interface HeroButton {
  name: string;
  action: string;
}

export interface HeroSection {
  _id: string;
  title: string;
  description: string;
  images?: string[];
  buttons?: HeroButton[];
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateHeroSectionDto {
  title: string;
  description: string;
  images?: string[];
  buttons?: HeroButton[];
}

export interface UpdateHeroSectionDto {
  title?: string;
  description?: string;
  images?: string[];
  buttons?: HeroButton[];
}
