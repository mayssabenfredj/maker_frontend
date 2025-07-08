import {
  HeroSection,
  CreateHeroSectionDto,
  UpdateHeroSectionDto,
} from "./hero-section";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3020";

export class HeroSectionService {
  static async getAll(): Promise<HeroSection[]> {
    const res = await fetch(`${API_BASE_URL}/hero-section`);
    const data = await res.json();
    return data.data;
  }

  static async getById(id: string): Promise<HeroSection> {
    const res = await fetch(`${API_BASE_URL}/hero-section/${id}`);
    const data = await res.json();
    return data.data;
  }

  static async create(
    hero: CreateHeroSectionDto,
    imageFiles?: File[]
  ): Promise<HeroSection> {
    const formData = new FormData();
    formData.append("title", hero.title);
    formData.append("description", hero.description);
    if (imageFiles && imageFiles.length > 0) {
      imageFiles.forEach((file) => formData.append("images", file));
    }
    if (hero.buttons) {
      formData.append("buttons", JSON.stringify(hero.buttons));
    }
    const res = await fetch(`${API_BASE_URL}/hero-section`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    return data.data;
  }

  static async update(
    id: string,
    hero: UpdateHeroSectionDto,
    imageFiles?: File[]
  ): Promise<HeroSection> {
    const formData = new FormData();
    if (hero.title) formData.append("title", hero.title);
    if (hero.description) formData.append("description", hero.description);
    if (imageFiles && imageFiles.length > 0) {
      imageFiles.forEach((file) => formData.append("images", file));
    }
    if (hero.buttons) {
      formData.append("buttons", JSON.stringify(hero.buttons));
    }
    const res = await fetch(`${API_BASE_URL}/hero-section/${id}`, {
      method: "PATCH",
      body: formData,
    });
    const data = await res.json();
    return data.data;
  }

  static async delete(id: string): Promise<void> {
    await fetch(`${API_BASE_URL}/hero-section/${id}`, { method: "DELETE" });
  }
}

export default HeroSectionService;
