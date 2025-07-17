import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
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
  Package,
  Target,
  BookOpen,
} from "lucide-react";
import { useStore } from "../stores/useStore";
import AnimatedSection from "../components/UI/AnimatedSection";
import axios from "axios";

const FormationDetail: React.FC = () => {
  const { id } = useParams();
  const { theme } = useStore();
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getEventDetails = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          import.meta.env.VITE_API_URL + "/events/" + id
        );
        const { data: response } = res;
        setEvent(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("error fetching the event details", error);
        setError("Erreur lors du chargement des détails de l'événement");
      } finally {
        setLoading(false);
      }
    };
    getEventDetails();
  }, [id]);

  if (loading) {
    return (
      <div
        className={`min-h-screen pt-16 ${
          theme === "dark" ? "bg-gray-900" : "bg-white"
        } flex items-center justify-center`}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p
            className={`mt-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Chargement...
          </p>
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div
        className={`min-h-screen pt-16 ${
          theme === "dark" ? "bg-gray-900" : "bg-white"
        } flex items-center justify-center`}
      >
        <div className="text-center">
          <p
            className={`text-xl ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {error || "Événement non trouvé"}
          </p>
          <Link
            to="/academy"
            className="mt-4 inline-flex items-center text-orange-500 hover:text-orange-600"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux formations
          </Link>
        </div>
      </div>
    );
  }

  // Calculate original price if reduction exists
  const originalPrice = event.reduction
    ? Math.round(event.price / (1 - event.reduction / 100))
    : null;

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
            to="/academy"
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
                  {event.category && (
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.category.name}
                    </span>
                  )}
                  <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                    {event.type}
                  </span>
                </div>

                <h1
                  className={`text-3xl md:text-4xl font-bold mb-4 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {event.name}
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {event.duration && (
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-orange-500" />
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {event.duration} jours
                      </span>
                    </div>
                  )}

                  {event.participants && (
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-blue-500" />
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {event.participants.length} participants
                      </span>
                    </div>
                  )}

                  {event.location && (
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-green-500" />
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {event.location === "online"
                          ? "En ligne"
                          : event.location === "in_person"
                          ? "En personne"
                          : "Hybride"}
                      </span>
                    </div>
                  )}

                  {event.certification && (
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
                  )}
                </div>

                <div className="flex items-center space-x-4">
                  <div>
                    <span
                      className={`text-3xl font-bold ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {event.price}DT
                    </span>
                    {originalPrice && (
                      <span
                        className={`text-lg line-through ml-2 ${
                          theme === "dark" ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        {originalPrice}DT
                      </span>
                    )}
                  </div>
                  {event.reduction && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                      -{event.reduction}%
                    </span>
                  )}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src={
                    event.coverImage
                      ? `${import.meta.env.VITE_API_URL}/${event.coverImage}`
                      : "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                  }
                  alt={event.name}
                  className="w-full h-64 md:h-80 object-cover rounded-2xl"
                />
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
                    Informations
                  </h3>
                  <div className="space-y-2">
                    {event.startDate && (
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-orange-500" />
                        <span
                          className={`text-sm ${
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {new Date(event.startDate).toLocaleDateString(
                            "fr-FR"
                          )}
                        </span>
                      </div>
                    )}
                    {event.duration && (
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-blue-500" />
                        <span
                          className={`text-sm ${
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {event.duration} jours
                        </span>
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-green-500" />
                        <span
                          className={`text-sm ${
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {event.location === "online"
                            ? "En ligne"
                            : event.location == "in_person"
                            ? "En personne"
                            : "Hybride"}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-center">
                  <div
                    className={`text-2xl font-bold mb-1 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {event.price}DT
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
                    onClick={() => {
                      navigate(`/partcipate/${event._id}`);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    S'inscrire maintenant
                  </motion.button>
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
              {/* Modules/Curriculum */}
              {event.modules && event.modules.length > 0 && (
                <AnimatedSection>
                  <div>
                    <h2
                      className={`text-2xl font-bold mb-6 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      <BookOpen className="h-6 w-6 inline mr-2" />
                      Programme détaillé
                    </h2>
                    <div className="space-y-4">
                      {event.modules.map((module, index) => (
                        <motion.div
                          key={module._id}
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
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <h3
                                className={`text-lg font-semibold mb-2 ${
                                  theme === "dark"
                                    ? "text-white"
                                    : "text-gray-900"
                                }`}
                              >
                                {module.title}
                              </h3>
                              {module.items && module.items.length > 0 && (
                                <ul className="space-y-1">
                                  {module.items.map((item, idx) => (
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
                                        {item}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              )}

              {/* Learning Objectives */}
              {event.objectives && event.objectives.length > 0 && (
                <AnimatedSection>
                  <div>
                    <h2
                      className={`text-2xl font-bold mb-6 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      <Target className="h-6 w-6 inline mr-2" />
                      Objectifs d'apprentissage
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {event.objectives.map((objective, index) => (
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
                              theme === "dark"
                                ? "text-gray-300"
                                : "text-gray-700"
                            }`}
                          >
                            {objective}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              )}

              {/* Products */}
              {event.products && event.products.length > 0 && (
                <AnimatedSection>
                  <div>
                    <h2
                      className={`text-2xl font-bold mb-6 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      <Package className="h-6 w-6 inline mr-2" />
                      Produits inclus
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {event.products.map((product, index) => (
                        <motion.div
                          key={product._id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className={`p-4 rounded-xl border ${
                            theme === "dark"
                              ? "bg-gray-800 border-gray-700"
                              : "bg-white border-gray-200"
                          }`}
                        >
                          <div className="flex items-center space-x-4">
                            {product.images && product.images.length > 0 && (
                              <img
                                src={`${import.meta.env.VITE_API_URL}${
                                  product.images[0]
                                }`}
                                alt={product.name}
                                className="w-16 h-16 object-cover rounded-lg"
                              />
                            )}
                            <div>
                              <h3
                                className={`font-semibold ${
                                  theme === "dark"
                                    ? "text-white"
                                    : "text-gray-900"
                                }`}
                              >
                                {product.name}
                              </h3>
                              <p
                                className={`text-sm ${
                                  theme === "dark"
                                    ? "text-gray-400"
                                    : "text-gray-600"
                                }`}
                              >
                                {product.description}
                              </p>
                              <span
                                className={`text-sm font-medium ${
                                  theme === "dark"
                                    ? "text-orange-400"
                                    : "text-orange-600"
                                }`}
                              >
                                {product.price}DT
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Instructor */}
              {event.instructor && (
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
                      <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                        {event.instructor.photoUrl ? (
                          <img
                            src={event.instructor.photoUrl}
                            alt={event.instructor.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                        ) : (
                          <User className="h-8 w-8 text-gray-500" />
                        )}
                      </div>
                      <div>
                        <h4
                          className={`font-semibold ${
                            theme === "dark" ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {event.instructor.name}
                        </h4>
                        {event.instructor.title && (
                          <p
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            {event.instructor.title}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      {event.instructor.experienceYears && (
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-orange-500" />
                          <span
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            {event.instructor.experienceYears} ans d'expérience
                          </span>
                        </div>
                      )}
                      {event.instructor.studentsCount && (
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-blue-500" />
                          <span
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            {event.instructor.studentsCount} étudiants formés
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              )}

              {/* Prerequisites */}
              {event.required && event.required.length > 0 && (
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
                      {event.required.map((prereq, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            {prereq}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              )}

              {/* What's Included */}
              {event.includedInEvent && event.includedInEvent.length > 0 && (
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
                      {event.includedInEvent.map((item, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormationDetail;
