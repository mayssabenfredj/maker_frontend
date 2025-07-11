import { create } from "zustand";
import { User, Course, Service, Partner, PageContent } from "../types";

interface AppState {
  // Theme and Language
  theme: "light" | "dark";
  language: "fr" | "en";

  // Authentication
  user: User | null;
  isAuthenticated: boolean;

  // Data
  courses: Course[];
  services: Service[];
  partners: Partner[];
  pageContent: PageContent[];

  // Actions
  setTheme: (theme: "light" | "dark") => void;
  setLanguage: (language: "fr" | "en") => void;
  login: (user: User) => void;
  logout: () => void;
  setCourses: (courses: Course[]) => void;
  setServices: (services: Service[]) => void;
  setPartners: (partners: Partner[]) => void;
  setPageContent: (content: PageContent[]) => void;
  addCourse: (course: Course) => void;
  updateCourse: (id: string, course: Partial<Course>) => void;
  deleteCourse: (id: string) => void;
  addService: (service: Service) => void;
  updateService: (id: string, service: Partial<Service>) => void;
  deleteService: (id: string) => void;
  addPartner: (partner: Partner) => void;
  updatePartner: (id: string, partner: Partial<Partner>) => void;
  deletePartner: (id: string) => void;
  setIsAuth: (isAuthenticated: boolean) => void;
}

export const useStore = create<AppState>((set, get) => ({
  // Initial state
  theme: "light",
  language: "fr",
  user: null,
  isAuthenticated: false,
  courses: [],
  services: [],
  partners: [],
  pageContent: [],

  // Actions
  setTheme: (theme) => set({ theme }),
  setLanguage: (language) => set({ language }),
  setIsAuth: (isAuthenticated: boolean) => set({ isAuthenticated }),
  login: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),

  setCourses: (courses) => set({ courses }),
  setServices: (services) => set({ services }),
  setPartners: (partners) => set({ partners }),
  setPageContent: (pageContent) => set({ pageContent }),

  addCourse: (course) =>
    set((state) => ({ courses: [...state.courses, course] })),
  updateCourse: (id, updatedCourse) =>
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === id ? { ...course, ...updatedCourse } : course
      ),
    })),
  deleteCourse: (id) =>
    set((state) => ({
      courses: state.courses.filter((course) => course.id !== id),
    })),

  addService: (service) =>
    set((state) => ({ services: [...state.services, service] })),
  updateService: (id, updatedService) =>
    set((state) => ({
      services: state.services.map((service) =>
        service.id === id ? { ...service, ...updatedService } : service
      ),
    })),
  deleteService: (id) =>
    set((state) => ({
      services: state.services.filter((service) => service.id !== id),
    })),

  addPartner: (partner) =>
    set((state) => ({ partners: [...state.partners, partner] })),
  updatePartner: (id, updatedPartner) =>
    set((state) => ({
      partners: state.partners.map((partner) =>
        partner.id === id ? { ...partner, ...updatedPartner } : partner
      ),
    })),
  deletePartner: (id) =>
    set((state) => ({
      partners: state.partners.filter((partner) => partner.id !== id),
    })),
}));
