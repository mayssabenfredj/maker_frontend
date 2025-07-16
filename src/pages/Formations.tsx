import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, Clock, Award, Star, Filter, Search } from "lucide-react";
import { useStore } from "../stores/useStore";
import { translations } from "../data/translations";
import AnimatedSection from "../components/UI/AnimatedSection";
import GradientBackground from "../components/UI/GradientBackground";

const Formations: React.FC = () => {
  const { theme, language, courses } = useStore();
  const t = translations[language];
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const categories = [
    { id: "all", label: "Toutes" },
    { id: "iot", label: "IoT" },
    { id: "robotics", label: "Robotique" },
    { id: "ai", label: "Intelligence Artificielle" },
    { id: "programming", label: "Programmation" },
  ];

  const types = [
    { id: "all", label: "Tous" },
    { id: "kids", label: "Enfants" },
    { id: "adults", label: "Adultes" },
    { id: "bootcamp", label: "Bootcamp" },
  ];

  const mockCourses = [
    {
      id: "1",
      title: { fr: "IoT pour Débutants", en: "IoT for Beginners" },
      description: {
        fr: "Apprenez les bases de l'Internet des Objets",
        en: "Learn the basics of Internet of Things",
      },
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=500",
      category: "iot",
      type: "adults",
      duration: "8 semaines",
      price: 299,
      level: "beginner",
      featured: true,
      rating: 4.8,
      students: 156,
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
      category: "robotics",
      type: "bootcamp",
      duration: "12 semaines",
      price: 599,
      level: "advanced",
      featured: true,
      rating: 4.9,
      students: 89,
    },
    {
      id: "3",
      title: { fr: "IA pour Enfants", en: "AI for Kids" },
      description: {
        fr: "Introduction ludique à l'intelligence artificielle",
        en: "Fun introduction to artificial intelligence",
      },
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500",
      category: "ai",
      type: "kids",
      duration: "6 semaines",
      price: 199,
      level: "beginner",
      featured: false,
      rating: 4.7,
      students: 234,
    },
    {
      id: "4",
      title: { fr: "Programmation Python", en: "Python Programming" },
      description: {
        fr: "Maîtrisez Python pour l'IA et l'IoT",
        en: "Master Python for AI and IoT",
      },
      image:
        "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=500",
      category: "programming",
      type: "adults",
      duration: "10 semaines",
      price: 399,
      level: "intermediate",
      featured: false,
      rating: 4.6,
      students: 178,
    },
    {
      id: "5",
      title: { fr: "Robotique pour Enfants", en: "Robotics for Kids" },
      description: {
        fr: "Construis ton premier robot",
        en: "Build your first robot",
      },
      image:
        "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=500",
      category: "robotics",
      type: "kids",
      duration: "4 semaines",
      price: 149,
      level: "beginner",
      featured: false,
      rating: 4.9,
      students: 312,
    },
    {
      id: "6",
      title: { fr: "Bootcamp IA Intensive", en: "Intensive AI Bootcamp" },
      description: {
        fr: "Formation intensive en intelligence artificielle",
        en: "Intensive artificial intelligence training",
      },
      image:
        "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=500",
      category: "ai",
      type: "bootcamp",
      duration: "16 semaines",
      price: 899,
      level: "advanced",
      featured: true,
      rating: 4.8,
      students: 67,
    },
  ];

  const filteredCourses = mockCourses.filter((course) => {
    const categoryMatch =
      selectedCategory === "all" || course.category === selectedCategory;
    const typeMatch = selectedType === "all" || course.type === selectedType;
    return categoryMatch && typeMatch;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case "beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "advanced":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  return (
    <div
      className={`min-h-screen pt-16 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      } transition-colors duration-300`}
    >
      {/* Hero Section */}
      <GradientBackground className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1
                className={`text-4xl md:text-5xl font-bold mb-6 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Nos Formations
              </h1>
              <p
                className={`text-xl max-w-3xl mx-auto ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Développez vos compétences avec nos formations en technologies
                innovantes
              </p>
            </div>
          </AnimatedSection>
        </div>
      </GradientBackground>

      {/* Filters */}
      <section
        className={`py-8 ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Filter
                  className={`h-5 w-5 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                />
                <span
                  className={`font-medium ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Filtres:
                </span>
              </div>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  theme === "dark"
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  theme === "dark"
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              >
                {types.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative">
              <Search
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              />
              <input
                type="text"
                placeholder="Rechercher une formation..."
                className={`pl-10 pr-4 py-2 rounded-lg border transition-colors ${
                  theme === "dark"
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                }`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Formations Grid */}
      <section
        className={`py-20 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <AnimatedSection key={course.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className={`rounded-2xl shadow-lg overflow-hidden ${
                    theme === "dark" ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title[language] || course.title.fr}
                      className="w-full h-48 object-cover"
                    />
                    {course.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Populaire
                      </div>
                    )}
                    <div
                      className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(
                        course.level
                      )}`}
                    >
                      {course.level === "beginner"
                        ? "Débutant"
                        : course.level === "intermediate"
                        ? "Intermédiaire"
                        : "Avancé"}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3
                      className={`text-xl font-bold mb-2 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {course.title[language] || course.title.fr}
                    </h3>

                    <p
                      className={`mb-4 ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {course.description[language] || course.description.fr}
                    </p>

                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4 text-orange-500" />
                        <span
                          className={`text-sm ${
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {course.duration}
                        </span>
                      </div>

                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4 text-blue-500" />
                        <span
                          className={`text-sm ${
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {course.students} étudiants
                        </span>
                      </div>

                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span
                          className={`text-sm ${
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {course.rating}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span
                        className={`text-2xl font-bold ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {course.price}DT
                      </span>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 bg-gradient-to-r from-orange-500 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                      >
                        S'inscrire
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Formations;
