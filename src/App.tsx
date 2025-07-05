import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useStore } from './stores/useStore';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import AdminLayout from './components/admin/AdminLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Formations from './pages/Formations';
import FormationDetail from './pages/FormationDetail';
import Bootcamp from './pages/Bootcamp';
import Shop from './pages/Shop';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import FormationsManagement from './pages/admin/FormationsManagement';
import WorkshopsManagement from './pages/admin/WorkshopsManagement';
import BootcampsManagement from './pages/admin/BootcampsManagement';
import ServicesManagement from './pages/admin/ServicesManagement';
import PartnersManagement from './pages/admin/PartnersManagement';
import ProductsManagement from './pages/admin/ProductsManagement';
import EventsManagement from './pages/admin/EventsManagement';
import CategoriesManagement from './pages/admin/CategoriesManagement';
import UsersManagement from './pages/admin/UsersManagement';

// Mock data initialization
const initializeMockData = () => {
  return {
    courses: [
      {
        id: '1',
        title: { fr: 'IoT pour Débutants', en: 'IoT for Beginners' },
        description: { fr: 'Apprenez les bases de l\'Internet des Objets', en: 'Learn the basics of Internet of Things' },
        image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'iot' as const,
        type: 'adults' as const,
        duration: '8 semaines',
        price: 299,
        level: 'beginner' as const,
        featured: true
      },
      {
        id: '2',
        title: { fr: 'Robotique Avancée', en: 'Advanced Robotics' },
        description: { fr: 'Construisez des robots intelligents', en: 'Build intelligent robots' },
        image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=500',
        category: 'robotics' as const,
        type: 'bootcamp' as const,
        duration: '12 semaines',
        price: 599,
        level: 'advanced' as const,
        featured: true
      }
    ],
    services: [
      {
        id: '1',
        title: { fr: 'Consultation IoT', en: 'IoT Consulting' },
        description: { fr: 'Services de conseil en IoT', en: 'IoT consulting services' },
        icon: 'Cpu',
        features: { fr: ['Analyse des besoins', 'Architecture système'], en: ['Needs analysis', 'System architecture'] }
      }
    ],
    partners: [
      {
        id: '1',
        name: 'TechCorp',
        logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200',
        website: 'https://techcorp.com',
        description: { fr: 'Leader en technologie', en: 'Technology leader' }
      }
    ]
  };
};

function App() {
  const { theme, setCourses, setServices, setPartners, isAuthenticated } = useStore();

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle('dark', theme === 'dark');
    
    // Initialize mock data
    const mockData = initializeMockData();
    setCourses(mockData.courses);
    setServices(mockData.services);
    setPartners(mockData.partners);
  }, [theme, setCourses, setServices, setPartners]);

  return (
    <Router>
      <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          } />
          <Route path="/about" element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          } />
          <Route path="/services" element={
            <>
              <Header />
              <Services />
              <Footer />
            </>
          } />
          <Route path="/formations" element={
            <>
              <Header />
              <Formations />
              <Footer />
            </>
          } />
          <Route path="/formations/:id" element={
            <>
              <Header />
              <FormationDetail />
              <Footer />
            </>
          } />
          <Route path="/bootcamp" element={
            <>
              <Header />
              <Bootcamp />
              <Footer />
            </>
          } />
          <Route path="/shop" element={
            <>
              <Header />
              <Shop />
              <Footer />
            </>
          } />
          <Route path="/partners" element={
            <>
              <Header />
              <Partners />
              <Footer />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          } />
          
          {/* Admin Login */}
          <Route path="/admin/login" element={<Login />} />
          
          {/* Protected Admin Routes */}
          <Route path="/admin" element={
            isAuthenticated ? <AdminLayout /> : <Navigate to="/admin/login" />
          }>
            <Route index element={<Dashboard />} />
            <Route path="formations" element={<FormationsManagement />} />
            <Route path="workshops" element={<WorkshopsManagement />} />
            <Route path="bootcamps" element={<BootcampsManagement />} />
            <Route path="services" element={<ServicesManagement />} />
            <Route path="partners" element={<PartnersManagement />} />
            <Route path="products" element={<ProductsManagement />} />
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