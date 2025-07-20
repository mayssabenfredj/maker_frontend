import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {

  Search,
  Mail,
  MapPin,
  Calendar,
  X,
  BookOpen,
  Users,
  
} from "lucide-react";
import { useStore } from "../../stores/useStore";
import AnimatedSection from "../../components/UI/AnimatedSection";

const UsersManagement: React.FC = () => {
  const { theme } = useStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDetails, setSelectedDetails] = useState(null);

  // Fetch events and participants from backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          import.meta.env.VITE_API_URL + "/participants"
        );
        const result = await response.json();
        if (response.ok) {
          setEvents(result.data || []);
        } else {
          throw new Error(result.message || "Failed to fetch events");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  // Filter events based on search term
  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.participants.some(
        (participant) =>
          `${participant.firstName} ${participant.lastName}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          participant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (participant.organizationName &&
            participant.organizationName
              .toLowerCase()
              .includes(searchTerm.toLowerCase()))
      );
    return matchesSearch;
  });

  // Helper to format dates
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Handle row click to show details
  const handleRowClick = (event, participant) => {
    setSelectedDetails({ event, participant });
  };

  // Close modal
  const closeModal = () => {
    setSelectedDetails(null);
  };

  return (
    <div
      className={`min-h-screen pt-16 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <AnimatedSection>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1
                className={`text-3xl font-bold mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Gestion des Événements
              </h1>
              <p
                className={`${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Gérez les événements et leurs participants
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            {
              title: "Total Événements",
              value: events.length,
              color: "bg-blue-500",
            },
            {
              title: "Participants",
              value: events.reduce(
                (sum, event) => sum + event.participants.length,
                0
              ),
              color: "bg-green-500",
            },
            {
              title: "Evenements",
              value: events.filter((e) => e.event.type === "event").length,
              color: "bg-purple-500",
            },
            {
              title: "Formations",
              value: events.filter(
                (e) =>
                  e.event.type === "course" ||
                  e.event.type === "workshop" ||
                  e.event.type == "bootcamp"
              ).length,
              color: "bg-purple-500",
            },
          ].map((stat, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className={`p-6 rounded-xl shadow-lg ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className={`text-sm font-medium ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {stat.title}
                    </p>
                    <p
                      className={`text-2xl font-bold ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {stat.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Filters */}
        <AnimatedSection>
          <div
            className={`p-6 rounded-xl mb-8 ${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            } shadow-lg`}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                />
                <input
                  type="text"
                  placeholder="Rechercher un événement ou participant..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors ${
                    theme === "dark"
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
                  } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Events and Participants Table */}
        {loading ? (
          <AnimatedSection>
            <div className="text-center py-12">
              <p
                className={`text-xl ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Chargement...
              </p>
            </div>
          </AnimatedSection>
        ) : error ? (
          <AnimatedSection>
            <div className="text-center py-12">
              <p className={`text-xl text-red-600 dark:text-red-400`}>
                Erreur : {error}
              </p>
            </div>
          </AnimatedSection>
        ) : (
          <AnimatedSection>
            <div
              className={`rounded-xl shadow-lg overflow-hidden ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead
                    className={`${
                      theme === "dark" ? "bg-gray-700" : "bg-gray-50"
                    }`}
                  >
                    <tr>
                      <th
                        className={`px-6 py-4 text-left text-sm font-medium ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Événement
                      </th>
                      <th
                        className={`px-6 py-4 text-left text-sm font-medium ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Participant
                      </th>
                      <th
                        className={`px-6 py-4 text-left text-sm font-medium ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Contact
                      </th>
                      <th
                        className={`px-6 py-4 text-left text-sm font-medium ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Détails
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {filteredEvents.map((event, index) =>
                      event.participants.map((participant, pIndex) => (
                        <motion.tr
                          key={`${event.eventId}-${participant._id}`}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay:
                              (index * event.participants.length + pIndex) *
                              0.1,
                          }}
                          className={`${
                            theme === "dark"
                              ? "hover:bg-gray-700"
                              : "hover:bg-gray-50"
                          } transition-colors cursor-pointer`}
                          onClick={() => handleRowClick(event, participant)}
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                              <img
                                src={
                                  import.meta.env.VITE_API_URL +
                                    "/" +
                                    event.event.coverImage ||
                                  "https://via.placeholder.com/40"
                                }
                                alt={event.eventName}
                                className="w-10 h-10 rounded-full object-cover"
                              />
                              <div>
                                <div
                                  className={`font-medium ${
                                    theme === "dark"
                                      ? "text-white"
                                      : "text-gray-900"
                                  }`}
                                >
                                  {event.eventName}
                                </div>
                                <div
                                  className={`text-sm ${
                                    theme === "dark"
                                      ? "text-gray-400"
                                      : "text-gray-600"
                                  }`}
                                >
                                  Début: {formatDate(event.event.startDate)}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div
                              className={`font-medium ${
                                theme === "dark"
                                  ? "text-white"
                                  : "text-gray-900"
                              }`}
                            >
                              {participant.firstName} {participant.lastName}
                            </div>
                            <div
                              className={`text-sm ${
                                theme === "dark"
                                  ? "text-gray-400"
                                  : "text-gray-600"
                              }`}
                            >
                              Inscrit le {formatDate(participant.createdAt)}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="space-y-1">
                              <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4 text-gray-400" />
                                <span
                                  className={`text-sm ${
                                    theme === "dark"
                                      ? "text-gray-300"
                                      : "text-gray-700"
                                  }`}
                                >
                                  {participant.email}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="space-y-1">
                              <div
                                className={`text-sm ${
                                  theme === "dark"
                                    ? "text-gray-300"
                                    : "text-gray-700"
                                }`}
                              >
                                Type: {event.event.type}
                              </div>
                              <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4 text-gray-400" />
                                <span
                                  className={`text-sm ${
                                    theme === "dark"
                                      ? "text-gray-300"
                                      : "text-gray-700"
                                  }`}
                                >
                                  {event.event.address}
                                </span>
                              </div>
                            </div>
                          </td>
                        </motion.tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Modal for Detailed Information */}
        {selectedDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className={`relative w-full max-w-4xl p-8 rounded-xl shadow-lg ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              } max-h-[85vh] overflow-y-auto`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="h-6 w-6" />
              </button>
              <h2
                className={`text-2xl font-bold mb-6 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Détails de l'Événement et du Participant
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Event Details */}
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3
                    className={`text-lg font-semibold mb-4 flex items-center ${
                      theme === "dark" ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    <Calendar className="h-5 w-5 mr-2 text-orange-500" />
                    Événement
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="font-medium w-32 text-sm">Nom:</span>
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {selectedDetails.event.eventName}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-medium w-32 text-sm">Type:</span>
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {selectedDetails.event.event.type}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-medium w-32 text-sm">
                        Date de début:
                      </span>
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {formatDate(selectedDetails.event.event.startDate)}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-medium w-32 text-sm">Durée:</span>
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {selectedDetails.event.event.duration}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-medium w-32 text-sm">Prix:</span>
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {selectedDetails.event.event.price} (Réduction:{" "}
                        {selectedDetails.event.event.reduction}%)
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-medium w-32 text-sm">Lieu:</span>
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {selectedDetails.event.event.address} (
                        {selectedDetails.event.event.location})
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-medium w-32 text-sm">
                        Certification:
                      </span>
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {selectedDetails.event.event.certification
                          ? "Oui"
                          : "Non"}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-medium w-32 text-sm">
                        Formateur:
                      </span>
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {selectedDetails.event.event.instructor.name} (
                        {selectedDetails.event.event.instructor.title},{" "}
                        {selectedDetails.event.event.instructor.experienceYears}{" "}
                        ans d'expérience)
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-medium w-32 text-sm">Modules:</span>
                      <ul
                        className={`list-disc pl-5 text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {selectedDetails.event.event.modules.map((module) => (
                          <li key={module._id}>
                            <BookOpen className="h-4 w-4 inline-block mr-2 text-orange-500" />
                            {module.title}: {module.items.join(", ")}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-start">
                      <span className="font-medium w-32 text-sm">
                        Prérequis:
                      </span>
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {selectedDetails.event.event.required.join(", ")}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-medium w-32 text-sm">Inclus:</span>
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {selectedDetails.event.event.includedInEvent.join(", ")}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-medium w-32 text-sm">
                        Objectifs:
                      </span>
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {selectedDetails.event.event.objectives.join(", ")}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-medium w-32 text-sm">Créé le:</span>
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {formatDate(selectedDetails.event.event.createdAt)}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-medium w-32 text-sm">
                        Mis à jour le:
                      </span>
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {formatDate(selectedDetails.event.event.updatedAt)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Participant Details */}
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3
                    className={`text-lg font-semibold mb-4 flex items-center ${
                      theme === "dark" ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    <Users className="h-5 w-5 mr-2 text-orange-500" />
                    Participant
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="font-medium w-32 text-sm">Nom:</span>
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {selectedDetails.participant.firstName}{" "}
                        {selectedDetails.participant.lastName}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-medium w-32 text-sm">Email:</span>
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {selectedDetails.participant.email}
                      </span>
                    </div>
                    {selectedDetails.participant.organizationName && (
                      <div className="flex items-start">
                        <span className="font-medium w-32 text-sm">
                          Organisation:
                        </span>
                        <span
                          className={`text-sm ${
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {selectedDetails.participant.organizationName}
                        </span>
                      </div>
                    )}
                    <div className="flex items-start">
                      <span className="font-medium w-32 text-sm">
                        Inscrit le:
                      </span>
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {formatDate(selectedDetails.participant.createdAt)}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-medium w-32 text-sm">
                        Mis à jour le:
                      </span>
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {formatDate(selectedDetails.participant.updatedAt)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {filteredEvents.length === 0 && !loading && !error && (
          <AnimatedSection>
            <div className="text-center py-12">
              <div
                className={`text-6xl mb-4 ${
                  theme === "dark" ? "text-gray-600" : "text-gray-400"
                }`}
              >
                📅
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Aucun événement ou participant trouvé
              </h3>
              <p
                className={`${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Essayez de modifier vos critères de recherche ou ajoutez un
                nouvel événement.
              </p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
};

export default UsersManagement;
