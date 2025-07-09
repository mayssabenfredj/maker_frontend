import { Project, CreateProjectDto, UpdateProjectDto } from "../types/project";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3020";

class ProjectService {
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const token = localStorage.getItem("token");
    const headers: HeadersInit = {
      Accept: "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    };

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers,
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return response.json();
  }

  async getProjects(): Promise<Project[]> {
    const res = await this.request<{ message: string; data: Project[] }>("/projects");
    return res.data;
  }

  async getProject(id: string): Promise<Project> {
    const res = await this.request<{ message: string; data: Project }>(`/projects/${id}`);
    return res.data;
  }

  async createProject(data: CreateProjectDto): Promise<Project> {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description || "");
    if (data.startDate) formData.append("startDate", data.startDate);
    if (data.endDate) formData.append("endDate", data.endDate);
    if (data.coverImage instanceof File) {
      formData.append("coverImage", data.coverImage);
    }

    const res = await this.request<{ message: string; data: Project }>("/projects", {
      method: "POST",
      body: formData,
    });
    return res.data;
  }

  async updateProject(id: string, data: UpdateProjectDto): Promise<Project> {
    const formData = new FormData();
    if (data.name) formData.append("name", data.name);
    if (data.description !== undefined) formData.append("description", data.description);
    if (data.startDate) formData.append("startDate", data.startDate);
    if (data.endDate) formData.append("endDate", data.endDate);
    if (data.coverImage instanceof File) {
      formData.append("coverImage", data.coverImage);
    }

    const res = await this.request<{ message: string; data: Project }>(`/projects/${id}`, {
      method: "PATCH",
      body: formData,
    });
    return res.data;
  }

  async deleteProject(id: string): Promise<void> {
    await this.request(`/projects/${id}`, { method: "DELETE" });
  }
}

export const projectService = new ProjectService();
