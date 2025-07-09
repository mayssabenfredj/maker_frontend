import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Bot, Brain, Lightbulb, Users, Award, Globe, Star, Clock, ChevronLeft, ChevronRight, Play, CheckCircle, Quote, Calendar, MapPin, Target, Eye, Heart, Handshake, ExternalLink, Mail, Phone, User, Building, Briefcase, GraduationCap } from 'lucide-react';
import { useStore } from '../../../stores/useStore';
import { translations } from '../../../data/translations';
import AnimatedSection from '../../../components/UI/AnimatedSection';
import TestimonialsSection from './components/TestimonialsSection';
import ReviewService from '../../admin/reviews/review.service';
import { Review } from '../../admin/reviews/review';
import StatsSection from './components/StatsSection';
import { heroSlides } from './data/heroSlides';
import { aboutValues } from './data/aboutValues';
import { team } from './data/team';
import { whyChooseUs } from './data/whyChooseUs';
import { features } from './data/features';
import { contactTypes } from './data/contactTypes';
import { calendarEvents } from './data/calendarEvents';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CalendarSection from './components/CalendarSection';
import NewsSection from './components/NewsSection';
import FeaturesSection from './components/FeaturesSection';
import PartnersSection from './components/PartnersSection';
import PartnerService from '../../admin/partners/partner.service';
import { Partner } from '../../admin/partners/partner';
import ContactSection from './components/ContactSection';
import CtaSection from './components/CtaSection';
import BlogService from '../../admin/blogs/blogs.service';
import { Blog } from '../../admin/blogs/blog';

const Home: React.FC = () => {
  const { theme, language } = useStore();
  const t = translations[language];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'general'
  });
  const [partners, setPartners] = useState<Partner[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  useEffect(() => {
    PartnerService.getAll().then((data) => setPartners(data));
  }, []);

  useEffect(() => {
    ReviewService.getAll().then((data) => setReviews(data));
  }, []);

  useEffect(() => {
    BlogService.getAll().then((data) => setBlogs(data));
  }, []);

  const achievements = [
    {
      icon: Users,
      number: '500+',
      label: 'Étudiants Formés',
      description: 'Apprenants satisfaits'
    },
    {
      icon: Award,
      number: '50+',
      label: 'Projets Réalisés',
      description: 'Innovations concrètes'
    },
    {
      icon: Globe,
      number: '10+',
      label: 'Partenaires',
      description: 'Entreprises partenaires'
    },
    {
      icon: Brain,
      number: '15+',
      label: 'Formations',
      description: 'Programmes disponibles'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'formation': return 'bg-blue-900';
      case 'bootcamp': return 'bg-orange-500';
      case 'workshop': return 'bg-blue-600';
      case 'event': return 'bg-green-600';
      default: return 'bg-gray-500';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'formation': return 'Formation';
      case 'bootcamp': return 'Bootcamp';
      case 'workshop': return 'Workshop';
      case 'event': return 'Événement';
      default: return type;
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      type: 'general'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      {/* Hero Section with Carousel */}
     <HeroSection
        slides={heroSlides}
        theme={theme}
        currentSlide={currentSlide}
        onPrev={prevSlide}
        onNext={nextSlide}
        onSelect={(index) => setCurrentSlide(index)}
      />

      {/* About Section - Enriched and Moved After Banner */}
      <AboutSection
        theme={theme}
        aboutValues={aboutValues}
        team={team}
        whyChooseUs={whyChooseUs}
      />

      {/* Features Section */}
      <FeaturesSection theme={theme} features={features} t={t} />

      {/* Calendar Section */}
     <CalendarSection/>

      {/* Partners Section */}
      <PartnersSection
        theme={theme}
        partners={partners.map((p) => ({
          _id: p._id ,
          name: p.name,
          logo: p.logo || '',
          website: p.website || '',
          specialite: p.specialite || 'Partenaire',
          
        }))}
      />

      {/* Stats Section */}
      <StatsSection achievements={achievements} />

      {/* Contact Form Section */}
      <ContactSection theme={theme} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} contactTypes={contactTypes} />

      {/* Testimonials Section */}
      <TestimonialsSection reviews={reviews} />

      {/* News Section */}
      <NewsSection blogs={blogs} />

      {/* CTA Section */}
      <CtaSection theme={theme} />
    </div>
  );
};

export default Home;