import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Target,
  Zap,
  Trophy,
} from "lucide-react";
import { useStore } from "../stores/useStore";
import { translations } from "../data/translations";
import AnimatedSection from "../components/UI/AnimatedSection";
import GradientBackground from "../components/UI/GradientBackground";

const Bootcamp: React.FC = () => {
  const { theme, language } = useStore();
  const t = translations[language];

  const bootcamps = [
    {
      id: "1",
      title: "Bootcamp IA & Machine Learning",
      description:
        "Formation intensive de 16 semaines pour devenir expert en intelligence artificielle",
      image:
        "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "16 semaines",
      schedule: "Temps plein",
      price: 4999,
      nextStart: "15 Mars 2024",
      spots: 12,
      level: "Intermédiaire à Avancé",
      technologies: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "OpenCV",
      ],
      outcomes: [
        "Développer des modèles de ML complexes",
        "Maîtriser le deep learning",
        "Créer des applications IA",
        "Portfolio de 5 projets",
      ],
      featured: true,
    },
    {
      id: "2",
      title: "Bootcamp IoT & Systèmes Embarqués",
      description:
        "Apprenez à concevoir et développer des solutions IoT complètes",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "12 semaines",
      schedule: "Temps plein",
      price: 3999,
      nextStart: "1 Avril 2024",
      spots: 15,
      level: "Débutant à Intermédiaire",
      technologies: ["Arduino", "Raspberry Pi", "MQTT", "Node.js", "React"],
      outcomes: [
        "Concevoir des capteurs IoT",
        "Développer des dashboards",
        "Maîtriser les protocoles IoT",
        "Projet IoT complet",
      ],
      featured: false,
    },
    {
      id: "3",
      title: "Bootcamp Robotique Avancée",
      description:
        "Formation complète en robotique et automatisation industrielle",
      image:
        "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "14 semaines",
      schedule: "Temps plein",
      price: 4499,
      nextStart: "20 Mai 2024",
      spots: 10,
      level: "Intermédiaire à Avancé",
      technologies: ["ROS", "C++", "Python", "Gazebo", "OpenCV"],
      outcomes: [
        "Programmer des robots autonomes",
        "Maîtriser ROS",
        "Vision par ordinateur",
        "Robot fonctionnel",
      ],
      featured: true,
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: "Formation Intensive",
      description:
        "Apprentissage accéléré avec 40h/semaine de formation pratique",
    },
    {
      icon: Users,
      title: "Mentoring Personnalisé",
      description: "Accompagnement individuel par des experts de l'industrie",
    },
    {
      icon: Zap,
      title: "Projets Réels",
      description: "Travaillez sur des projets concrets avec nos partenaires",
    },
    {
      icon: Trophy,
      title: "Garantie Emploi",
      description: "95% de nos diplômés trouvent un emploi dans les 6 mois",
    },
  ];

  const curriculum = [
    {
      week: "Semaines 1-4",
      title: "Fondamentaux",
      topics: ["Bases théoriques", "Outils de développement", "Premier projet"],
    },
    {
      week: "Semaines 5-8",
      title: "Développement",
      topics: ["Projets avancés", "Méthodologies agiles", "Travail en équipe"],
    },
    {
      week: "Semaines 9-12",
      title: "Spécialisation",
      topics: ["Domaine d'expertise", "Projet personnel", "Optimisation"],
    },
    {
      week: "Semaines 13-16",
      title: "Projet Final",
      topics: ["Projet capstone", "Présentation", "Préparation emploi"],
    },
  ];

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
                Bootcamps Intensifs
              </h1>
              <p
                className={`text-xl max-w-3xl mx-auto ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Transformez votre carrière en quelques mois avec nos formations
                intensives
              </p>
            </div>
          </AnimatedSection>
        </div>
      </GradientBackground>

      {/* Benefits Section */}
      <section
        className={`py-20 ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2
                className={`text-3xl md:text-4xl font-bold mb-4 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Pourquoi Choisir Nos Bootcamps ?
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className={`p-6 rounded-xl text-center ${
                    theme === "dark" ? "bg-gray-900" : "bg-white"
                  } shadow-lg`}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3
                    className={`text-lg font-semibold mb-2 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {benefit.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bootcamps List */}
      <section
        className={`py-20 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2
                className={`text-3xl md:text-4xl font-bold mb-4 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Nos Bootcamps Disponibles
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {bootcamps.map((bootcamp, index) => (
              <AnimatedSection key={bootcamp.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`rounded-2xl shadow-lg overflow-hidden ${
                    theme === "dark" ? "bg-gray-800" : "bg-white"
                  } ${bootcamp.featured ? "ring-2 ring-orange-500" : ""}`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                    <div className="lg:col-span-1">
                      <img
                        src={bootcamp.image}
                        alt={bootcamp.title}
                        className="w-full h-64 object-cover rounded-xl"
                      />
                    </div>

                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3
                            className={`text-2xl font-bold mb-2 ${
                              theme === "dark" ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {bootcamp.title}
                          </h3>
                          {bootcamp.featured && (
                            <span className="inline-block bg-gradient-to-r from-orange-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                              Recommandé
                            </span>
                          )}
                        </div>
                        <div className="text-right">
                          <div
                            className={`text-3xl font-bold ${
                              theme === "dark" ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {bootcamp.price}DT
                          </div>
                          <div
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            Financement disponible
                          </div>
                        </div>
                      </div>

                      <p
                        className={`mb-6 ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {bootcamp.description}
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-5 w-5 text-orange-500" />
                          <div>
                            <div
                              className={`text-sm font-medium ${
                                theme === "dark"
                                  ? "text-white"
                                  : "text-gray-900"
                              }`}
                            >
                              {bootcamp.duration}
                            </div>
                            <div
                              className={`text-xs ${
                                theme === "dark"
                                  ? "text-gray-400"
                                  : "text-gray-600"
                              }`}
                            >
                              {bootcamp.schedule}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Calendar className="h-5 w-5 text-blue-500" />
                          <div>
                            <div
                              className={`text-sm font-medium ${
                                theme === "dark"
                                  ? "text-white"
                                  : "text-gray-900"
                              }`}
                            >
                              {bootcamp.nextStart}
                            </div>
                            <div
                              className={`text-xs ${
                                theme === "dark"
                                  ? "text-gray-400"
                                  : "text-gray-600"
                              }`}
                            >
                              Prochaine session
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Users className="h-5 w-5 text-green-500" />
                          <div>
                            <div
                              className={`text-sm font-medium ${
                                theme === "dark"
                                  ? "text-white"
                                  : "text-gray-900"
                              }`}
                            >
                              {bootcamp.spots} places
                            </div>
                            <div
                              className={`text-xs ${
                                theme === "dark"
                                  ? "text-gray-400"
                                  : "text-gray-600"
                              }`}
                            >
                              Disponibles
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Award className="h-5 w-5 text-purple-500" />
                          <div>
                            <div
                              className={`text-sm font-medium ${
                                theme === "dark"
                                  ? "text-white"
                                  : "text-gray-900"
                              }`}
                            >
                              {bootcamp.level}
                            </div>
                            <div
                              className={`text-xs ${
                                theme === "dark"
                                  ? "text-gray-400"
                                  : "text-gray-600"
                              }`}
                            >
                              Niveau requis
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {bootcamp.technologies
                            .slice(0, 3)
                            .map((tech, idx) => (
                              <span
                                key={idx}
                                className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  theme === "dark"
                                    ? "bg-gray-700 text-gray-300"
                                    : "bg-gray-100 text-gray-700"
                                }`}
                              >
                                {tech}
                              </span>
                            ))}
                          {bootcamp.technologies.length > 3 && (
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                theme === "dark"
                                  ? "bg-gray-700 text-gray-300"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              +{bootcamp.technologies.length - 3}
                            </span>
                          )}
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 bg-gradient-to-r from-orange-500 to-blue-600 text-white rounded-lg font-medium flex items-center space-x-2 hover:shadow-lg transition-all duration-300"
                        >
                          <span>Candidater</span>
                          <ArrowRight className="h-4 w-4" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section
        className={`py-20 ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2
                className={`text-3xl md:text-4xl font-bold mb-4 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Programme Type
              </h2>
              <p
                className={`text-xl max-w-2xl mx-auto ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Structure progressive pour une montée en compétences optimale
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {curriculum.map((phase, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`p-6 rounded-xl ${
                    theme === "dark" ? "bg-gray-900" : "bg-white"
                  } shadow-lg`}
                >
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-blue-600 flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <h3
                      className={`font-bold ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {phase.week}
                    </h3>
                    <h4
                      className={`text-lg font-semibold mb-3 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {phase.title}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {phase.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span
                          className={`text-sm ${
                            theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {topic}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bootcamp;
