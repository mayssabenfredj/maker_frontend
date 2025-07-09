import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useStore } from "./stores/useStore";
import PublicLayout from "./components/Layout/PublicLayout";
import AdminLayout from "./components/Layout/AdminLayout";
import Home from "./features/public/home/Home";
import About from "./pages/About";
import Formations from "./pages/Formations";
import FormationDetail from "./pages/FormationDetail";
import Bootcamp from "./pages/Bootcamp";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import FormationsManagement from "./pages/admin/FormationsManagement";
import WorkshopsManagement from "./pages/admin/WorkshopsManagement";
import ProductsManagement from "./features/admin/products/pages/ProductsManagement";
import EventsManagement from "./pages/admin/EventsManagement";
import UsersManagement from "./pages/admin/UsersManagement";
import CategoriesManagement from "./features/admin/categories/pages/CategoriesManagement";
import { ProductDetail } from "./features/admin/products";
import {
  BootcampDetail,
  BootcampsManagement,
} from "./features/admin/bootcamps";
import ServicesManagement from "./features/admin/services/pages/ServicesManagement";
import Academy from "./pages/academy";
import ServiceDetail from "./features/admin/services/pages/ServiceDetail";
import PartnersManagement from "./features/admin/partners/PartnersManagement";
import ReviewsManagement from "./features/admin/reviews/ReviewsManagement";
import BlogsManagement from "./features/admin/blogs/BlogsManagement";
import BlogDetail from "./features/admin/blogs/BlogDetail";
import HeroSectionManagement from "./features/admin/hero-section/HeroSectionManagement";
import Services from "./features/public/services/Services";
import Shop from "./features/public/shop/Shop";
import ProjectsManagement from "./features/admin/projects/ProjectsPage";

// Mock data initialization
const initializeMockData = () => {
  return {
    courses: [
      {
        id: "1",
        title: { fr: "IoT pour Débutants", en: "IoT for Beginners" },
        description: {
          fr: "Apprenez les bases de l'Internet des Objets",
          en: "Learn the basics of Internet of Things",
        },
        image:
          "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=500",
        category: "iot" as const,
        type: "adults" as const,
        duration: "8 semaines",
        price: 299,
        level: "beginner" as const,
        featured: true,
      },
      {
        id: "2",
        title: { fr: "Robotique Avancée", en: "Advanced Robotics" },
        description: {
          fr: "Construisez des robots intelligents",
          en: "Build intelligent robots",
        },
        image:
          "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=500",
        category: "robotics" as const,
        type: "bootcamp" as const,
        duration: "12 semaines",
        price: 599,
        level: "advanced" as const,
        featured: true,
      },
    ],
    services: [
      {
        id: "1",
        title: { fr: "Consultation IoT", en: "IoT Consulting" },
        description: {
          fr: "Services de conseil en IoT",
          en: "IoT consulting services",
        },
        icon: "Cpu",
        features: {
          fr: ["Analyse des besoins", "Architecture système"],
          en: ["Needs analysis", "System architecture"],
        },
      },
    ],
    partners: [
      {
        id: "1",
        name: "TechCorp",
        logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200",
        website: "https://techcorp.com",
        description: { fr: "Leader en technologie", en: "Technology leader" },
      },
    ],
  };
};

function App() {
  const { theme, setCourses, setServices, setPartners, isAuthenticated } =
    useStore();

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle("dark", theme === "dark");

    // Initialize mock data
    const mockData = initializeMockData();
    setCourses(mockData.courses);
    setServices(mockData.services);
    setPartners(mockData.partners);
  }, [theme, setCourses, setServices, setPartners]);

  return (
    <Router>
      <div className={`min-h-screen ${theme === "dark" ? "dark" : ""}`}>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <PublicLayout>
                <Home />
              </PublicLayout>
            }
          />
          <Route
            path="/about"
            element={
              <PublicLayout>
                <About />
              </PublicLayout>
            }
          />
          <Route
            path="/services"
            element={
              <PublicLayout>
                <Services />
              </PublicLayout>
            }
          />
          <Route
            path="/formations"
            element={
              <PublicLayout>
                <Formations />
              </PublicLayout>
            }
          />
          <Route
            path="/academy"
            element={
              <PublicLayout>
                <Academy />
              </PublicLayout>
            }
          />

          <Route
            path="/formations/:id"
            element={
              <PublicLayout>
                <FormationDetail />
              </PublicLayout>
            }
          />
          <Route
            path="/bootcamp"
            element={
              <PublicLayout>
                <Bootcamp />
              </PublicLayout>
            }
          />
          <Route
            path="/shop"
            element={
              <PublicLayout>
                <Shop />
              </PublicLayout>
            }
          />
          <Route
            path="/partners"
            element={
              <PublicLayout>
                <Partners />
              </PublicLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <PublicLayout>
                <Contact />
              </PublicLayout>
            }
          />

          {/* Admin Login */}
          <Route path="/admin/login" element={<Login />} />

          {/* Protected Admin Routes */}
          <Route
            path="/admin"
            element={
              isAuthenticated ? <AdminLayout /> : <Navigate to="/admin/login" />
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="formations" element={<FormationsManagement />} />
            <Route path="workshops" element={<WorkshopsManagement />} />
            <Route path="bootcamps" element={<BootcampsManagement />} />
            <Route path="bootcamps/:id" element={<BootcampDetail />} />
            <Route path="services" element={<ServicesManagement />} />
            <Route path="services/:id" element={<ServiceDetail />} />
            <Route path="blogs/:id" element={<BlogDetail />} />
            <Route path="blogs" element={<BlogsManagement />} />

            <Route path="hero" element={<HeroSectionManagement />} />

            <Route path="partners" element={<PartnersManagement />} />
            <Route path="products" element={<ProductsManagement />} />
            <Route path="projects" element={<ProjectsManagement />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="reviews" element={<ReviewsManagement />} />

            <Route path="events" element={<EventsManagement />} />
            <Route path="categories" element={<CategoriesManagement />} />
            <Route path="users" element={<UsersManagement />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
