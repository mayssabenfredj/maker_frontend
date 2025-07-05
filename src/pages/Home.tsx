import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Bot,
  Zap,
  Shield,
  Sparkles,
  Users,
  Award,
  Globe,
  ChevronDown,
  Play,
  Star,
  CheckCircle2,
  Quote,
  TrendingUp,
  Code,
  Cpu,
  Lightbulb,
} from "lucide-react";
import { useStore } from "../stores/useStore";
import { translations } from "../data/translations";
import AnimatedSection from "../components/UI/AnimatedSection";

const Home: React.FC = () => {
  const { theme, language } = useStore();
  const t = translations[language];
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Hero content
  const heroContent = {
    title: "Experience the Future of Technology",
    subtitle:
      "We are dedicated to pioneering the art of learning with cutting-edge AI and IoT technologies",
    description:
      "Transform your skills with our innovative AI-powered learning platform and become a leader in tomorrow's digital world.",
  };

  // Services data
  const services = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description:
        "Leverage advanced artificial intelligence to analyze and optimize your learning journey with personalized insights.",
      gradient: "from-neon-blue to-primary-500",
    },
    {
      icon: Bot,
      title: "Innovative Solutions",
      description:
        "Our cutting-edge robotics and IoT solutions provide hands-on experience with the technologies shaping our future.",
      gradient: "from-neon-purple to-accent-500",
    },
    {
      icon: Shield,
      title: "Customized Approach",
      description:
        "Tailored learning paths designed specifically for your goals, ensuring maximum efficiency and engagement.",
      gradient: "from-neon-green to-primary-600",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Sarah Williams",
      role: "Data Scientist",
      company: "TechCorp",
      avatar:
        "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=100",
      content:
        "The AI bootcamp completely transformed my career. The hands-on approach and cutting-edge curriculum gave me the skills I needed to land my dream job.",
      rating: 5,
    },
    {
      name: "Marcus Chen",
      role: "Robotics Engineer",
      company: "FutureTech",
      avatar:
        "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=100",
      content:
        "Incredible learning experience! The IoT workshops provided real-world skills that I use daily in my engineering role.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Product Manager",
      company: "InnovateLab",
      avatar:
        "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100",
      content:
        "The comprehensive curriculum and expert instructors made complex AI concepts accessible and practical.",
      rating: 5,
    },
  ];

  // Stats
  const stats = [
    { icon: Users, value: "500+", label: "Students Trained" },
    { icon: Award, value: "50+", label: "Projects Completed" },
    { icon: Globe, value: "10+", label: "Partner Companies" },
    { icon: TrendingUp, value: "95%", label: "Success Rate" },
  ];

  // FAQ
  const faqs = [
    {
      question: "What is Artificial Intelligence and Technology?",
      answer:
        "AI and technology encompass machine learning, robotics, IoT, and data science - the core technologies driving digital transformation across all industries.",
    },
    {
      question: "How long are the typical AI training programs?",
      answer:
        "Our programs range from 4-week workshops to 16-week comprehensive bootcamps, designed to fit different learning goals and schedules.",
    },
    {
      question: "What career opportunities are available?",
      answer:
        "Graduates work in roles like AI Engineer, Data Scientist, Robotics Developer, IoT Specialist, and Product Manager at leading tech companies.",
    },
    {
      question: "Do you provide hands-on practical experience?",
      answer:
        "Yes! All our programs include extensive hands-on projects, real-world case studies, and access to state-of-the-art laboratories and equipment.",
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-dark-950 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800" />
          <div
            className={
              'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2300d4ff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] opacity-20'
            }
          />

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-neon-blue rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <div className="px-4 py-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full border border-neon-blue/30 backdrop-blur-sm">
                  <span className="text-neon-blue text-sm font-medium">
                    Artificial Intelligence Technology
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-white via-neon-blue to-neon-purple bg-clip-text text-transparent">
                  {heroContent.title}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-gray-300 leading-relaxed"
              >
                {heroContent.subtitle}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-gray-400 leading-relaxed"
              >
                {heroContent.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/formations"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl text-white font-semibold hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button className="group inline-flex items-center px-8 py-4 border border-neon-blue/30 rounded-xl text-neon-blue font-semibold hover:bg-neon-blue/10 transition-all duration-300">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </button>
              </motion.div>

              {/* Customer Avatars */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="flex items-center space-x-4"
              >
                <div className="flex -space-x-2">
                  {testimonials.slice(0, 3).map((testimonial, index) => (
                    <img
                      key={index}
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full border-2 border-dark-800"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-400">200+ Happy Students</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              <div className="relative">
                {/* Main Image */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="relative z-10"
                >
                  <div className="w-96 h-96 mx-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-3xl backdrop-blur-sm border border-neon-blue/30" />
                    <img
                      src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="AI Technology"
                      className="w-full h-full object-cover rounded-3xl opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/50 to-transparent rounded-3xl" />
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ x: [0, 30, 0], rotate: [0, 360, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-2xl flex items-center justify-center shadow-glow"
                >
                  <Brain className="h-8 w-8 text-white" />
                </motion.div>

                <motion.div
                  animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-neon-purple to-neon-pink rounded-2xl flex items-center justify-center shadow-glow-purple"
                >
                  <Bot className="h-10 w-10 text-white" />
                </motion.div>

                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                  className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-r from-neon-green to-neon-cyan rounded-xl flex items-center justify-center shadow-glow"
                >
                  <Zap className="h-6 w-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-2 text-neon-blue">
            <span className="text-sm">Scroll Down</span>
            <ChevronDown className="h-5 w-5" />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 to-dark-900" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full border border-neon-blue/30 backdrop-blur-sm mb-6"
              >
                <span className="text-neon-blue text-sm font-medium">
                  Our Services
                </span>
              </motion.div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Artificial Intelligence And Technology
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We are dedicated to the future of AI and implementing smart
                solutions that transform industries and empower innovation.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative p-8 rounded-2xl bg-gradient-to-br from-dark-900/50 to-dark-800/50 border border-neon-blue/20 backdrop-blur-sm hover:border-neon-blue/40 transition-all duration-300 group"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-neon-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 to-dark-800" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-dark-900/50 to-dark-800/50 border border-neon-blue/20 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full border border-neon-blue/30 backdrop-blur-sm mb-6"
              >
                <span className="text-neon-blue text-sm font-medium">
                  Testimonials
                </span>
              </motion.div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  See What Customers Say
                </span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-dark-900/50 to-dark-800/50 border border-neon-blue/20 backdrop-blur-sm rounded-2xl p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full border-2 border-neon-blue/30"
                />
                <div>
                  <h4 className="text-white font-semibold">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-400">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-neon-blue text-sm">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
                <div className="ml-auto">
                  <Quote className="h-8 w-8 text-neon-blue/30" />
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                "{testimonials[currentTestimonial].content}"
              </p>
              <div className="flex space-x-1">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ),
                )}
              </div>
            </motion.div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-neon-blue w-8"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 to-dark-900" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full border border-neon-blue/30 backdrop-blur-sm mb-6"
              >
                <span className="text-neon-blue text-sm font-medium">FAQ</span>
              </motion.div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Frequently Asked Questions
                </span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div className="bg-gradient-to-br from-dark-900/50 to-dark-800/50 border border-neon-blue/20 backdrop-blur-sm rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-neon-blue/5 transition-colors"
                  >
                    <span className="text-white font-semibold">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-5 w-5 text-neon-blue" />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? "auto" : 0,
                      opacity: openFaq === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-800 to-dark-900" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full border border-neon-blue/30 backdrop-blur-sm mb-6"
              >
                <span className="text-neon-blue text-sm font-medium">
                  Get Started Today
                </span>
              </motion.div>

              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-neon-blue to-neon-purple bg-clip-text text-transparent">
                  Empowering Your Business with AI and Tech
                </span>
              </h2>

              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Join thousands of students who have transformed their careers
                with our cutting-edge AI and technology programs. Start your
                journey into the future today.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl text-white font-semibold hover:shadow-glow transition-all duration-300"
                  >
                    Start Learning Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/formations"
                    className="inline-flex items-center px-8 py-4 border border-neon-blue/30 rounded-xl text-neon-blue font-semibold hover:bg-neon-blue/10 transition-all duration-300"
                  >
                    Explore Programs
                  </Link>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
