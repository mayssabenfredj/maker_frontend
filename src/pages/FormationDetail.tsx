import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Users,
  Star,
  Award,
  CheckCircle,
  Play,
  Calendar,
  MapPin,
  User,
} from "lucide-react";
import { useStore } from "../stores/useStore";
import AnimatedSection from "../components/UI/AnimatedSection";

const FormationDetail: React.FC = () => {
  const { id } = useParams();
  const { theme } = useStore();

  // Mock data - in real app, fetch based on id
  const formation = {
    id: "1",
    title: "IoT pour Débutants",
    description:
      "Apprenez les bases de l'Internet des Objets avec des projets pratiques et concrets",
    longDescription:
      "Cette formation complète vous permettra de maîtriser les fondamentaux de l'Internet des Objets. Vous apprendrez à concevoir, développer et déployer des solutions IoT en utilisant les dernières technologies et plateformes du marché.",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "IoT",
    duration: "8 semaines",
    students: 156,
    rating: 4.8,
    reviews: 89,
    price: 299,
    originalPrice: 399,
    level: "Débutant",
    instructor: {
      name: "Dr. Ahmed Ben Ali",
      title: "Expert IoT & Systèmes Embarqués",
      image: "/src/assets/b84ab9b1f6117b4c6347d56f2b969381.jpg",
      experience: "15 ans d'expérience",
      students: "500+ étudiants formés",
    },
    schedule: {
      startDate: "15 Avril 2024",
      endDate: "10 Juin 2024",
      schedule: "Mardi et Jeudi 18h-21h",
      location: "Campus Maker Skills + En ligne",
    },
    curriculum: [
      {
        week: 1,
        title: "Introduction à l'IoT",
        topics: [
          "Concepts fondamentaux",
          "Architecture IoT",
          "Protocoles de communication",
        ],
      },
      {
        week: 2,
        title: "Capteurs et Actionneurs",
        topics: ["Types de capteurs", "Interfaçage", "Traitement des données"],
      },
      {
        week: 3,
        title: "Microcontrôleurs",
        topics: ["Arduino", "ESP32", "Programmation embarquée"],
      },
      {
        week: 4,
        title: "Connectivité",
        topics: ["WiFi", "Bluetooth", "LoRaWAN", "Cellular"],
      },
      {
        week: 5,
        title: "Plateformes Cloud",
        topics: ["AWS IoT", "Azure IoT", "Google Cloud IoT"],
      },
      {
        week: 6,
        title: "Sécurité IoT",
        topics: ["Chiffrement", "Authentification", "Bonnes pratiques"],
      },
      {
        week: 7,
        title: "Projet Pratique",
        topics: ["Conception", "Développement", "Tests"],
      },
      {
        week: 8,
        title: "Déploiement et Présentation",
        topics: ["Mise en production", "Monitoring", "Présentation finale"],
      },
    ],
    prerequisites: [
      "Connaissances de base en programmation",
      "Notions d'électronique (optionnel)",
      "Motivation pour apprendre",
    ],
    outcomes: [
      "Concevoir des solutions IoT complètes",
      "Programmer des microcontrôleurs",
      "Intégrer des capteurs et actionneurs",
      "Déployer sur des plateformes cloud",
      "Sécuriser vos dispositifs IoT",
      "Réaliser un projet IoT de A à Z",
    ],
    included: [
      "Kit Arduino complet",
      "Accès aux laboratoires",
      "Support de cours",
      "Certificat de réussite",
      "Suivi post-formation",
      "Accès communauté alumni",
    ],
  };

  return (
    <div
      className={`min-h-screen pt-16 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      } transition-colors duration-300`}
    >
      {/* Header */}
      <section
        className={`py-8 ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="container mx-auto px-4">
          <Link
            to="/formations"
            className={`inline-flex items-center text-orange-500 hover:text-orange-600 mb-4`}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux formations
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section
        className={`py-12 ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection direction="left">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {formation.category}
                  </span>
                  <span className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {formation.level}
                  </span>
                </div>

                <h1
                  className={`text-3xl md:text-4xl font-bold mb-4 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {formation.title}
                </h1>

                <p
                  className={`text-xl mb-6 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {formation.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-orange-500" />
                    <span
                      className={`text-sm ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {formation.duration}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-blue-500" />
                    <span
                      className={`text-sm ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {formation.students} étudiants
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                    <span
                      className={`text-sm ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {formation.rating}/5 ({formation.reviews})
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-purple-500" />
                    <span
                      className={`text-sm ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Certificat
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div>
                    <span
                      className={`text-3xl font-bold ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {formation.price}DT
                    </span>
                    {formation.originalPrice && (
                      <span
                        className={`text-lg line-through ml-2 ${
                          theme === "dark" ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        {formation.originalPrice}DT
                      </span>
                    )}
                  </div>
                  {formation.originalPrice && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                      -
                      {Math.round(
                        (1 - formation.price / formation.originalPrice) * 100
                      )}
                      %
                    </span>
                  )}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src={formation.image}
                  alt={formation.title}
                  className="w-full h-64 md:h-80 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Play className="h-6 w-6 text-orange-500 ml-1" />
                  </motion.button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Enrollment Card */}
      <section
        className={`py-8 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div
              className={`max-w-4xl mx-auto p-8 rounded-2xl shadow-lg ${
                theme === "dark" ? "bg-gray-800" : "bg-orange-50"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div>
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Prochaine session
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-orange-500" />
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {formation.schedule.startDate}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-blue-500" />
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {formation.schedule.schedule}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-green-500" />
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {formation.schedule.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div
                    className={`text-2xl font-bold mb-1 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {formation.price}DT
                  </div>
                  <div
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Financement possible
                  </div>
                </div>

                <div className="flex flex-col space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    S'inscrire maintenant
                  </motion.button>
                  <button
                    className={`w-full py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors`}
                  >
                    Demander des infos
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content Sections */}
      <section
        className={`py-20 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <AnimatedSection>
                <div>
                  <h2
                    className={`text-2xl font-bold mb-6 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Description de la formation
                  </h2>
                  <p
                    className={`text-lg leading-relaxed ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {formation.longDescription}
                  </p>
                </div>
              </AnimatedSection>

              {/* Curriculum */}
              <AnimatedSection>
                <div>
                  <h2
                    className={`text-2xl font-bold mb-6 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Programme détaillé
                  </h2>
                  <div className="space-y-4">
                    {formation.curriculum.map((week, index) => (
                      <motion.div
                        key={week.week}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`p-6 rounded-xl ${
                          theme === "dark" ? "bg-gray-800" : "bg-gray-50"
                        }`}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                            {week.week}
                          </div>
                          <div className="flex-1">
                            <h3
                              className={`text-lg font-semibold mb-2 ${
                                theme === "dark"
                                  ? "text-white"
                                  : "text-gray-900"
                              }`}
                            >
                              {week.title}
                            </h3>
                            <ul className="space-y-1">
                              {week.topics.map((topic, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-center space-x-2"
                                >
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                  <span
                                    className={`text-sm ${
                                      theme === "dark"
                                        ? "text-gray-400"
                                        : "text-gray-600"
                                    }`}
                                  >
                                    {topic}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Learning Outcomes */}
              <AnimatedSection>
                <div>
                  <h2
                    className={`text-2xl font-bold mb-6 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Ce que vous allez apprendre
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {formation.outcomes.map((outcome, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span
                          className={`${
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {outcome}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Instructor */}
              <AnimatedSection>
                <div
                  className={`p-6 rounded-xl ${
                    theme === "dark" ? "bg-gray-800" : "bg-gray-50"
                  }`}
                >
                  <h3
                    className={`text-lg font-bold mb-4 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Votre formateur
                  </h3>
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={formation.instructor.image}
                      alt={formation.instructor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4
                        className={`font-semibold ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {formation.instructor.name}
                      </h4>
                      <p
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {formation.instructor.title}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-orange-500" />
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {formation.instructor.experience}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-blue-500" />
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {formation.instructor.students}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Prerequisites */}
              <AnimatedSection>
                <div
                  className={`p-6 rounded-xl ${
                    theme === "dark" ? "bg-gray-800" : "bg-gray-50"
                  }`}
                >
                  <h3
                    className={`text-lg font-bold mb-4 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Prérequis
                  </h3>
                  <ul className="space-y-2">
                    {formation.prerequisites.map((prereq, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span
                          className={`text-sm ${
                            theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {prereq}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              {/* What's Included */}
              <AnimatedSection>
                <div
                  className={`p-6 rounded-xl ${
                    theme === "dark" ? "bg-gray-800" : "bg-gray-50"
                  }`}
                >
                  <h3
                    className={`text-lg font-bold mb-4 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Inclus dans la formation
                  </h3>
                  <ul className="space-y-2">
                    {formation.included.map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span
                          className={`text-sm ${
                            theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormationDetail;
