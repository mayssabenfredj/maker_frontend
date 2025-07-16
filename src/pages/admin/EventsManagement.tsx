import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Search,
  Calendar,
  Users,
  MapPin,
  Clock,
  Edit,
  Trash2,
  Eye,
} from "lucide-react";
import { useStore } from "../../stores/useStore";
import AnimatedSection from "../../components/UI/AnimatedSection";

const EventsManagement: React.FC = () => {
  const { theme } = useStore();
  const [searchTerm, setSearchTerm] = useState("");

  const events = [
    {
      id: "1",
      title: "Conférence IA & Futur",
      description: "Conférence sur l'avenir de l'intelligence artificielle",
      image:
        "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=300",
      date: "2024-04-15",
      time: "14:00 - 18:00",
      location: "Auditorium Maker Skills",
      maxAttendees: 200,
      registeredAttendees: 156,
      price: 25,
      type: "conference",
      status: "upcoming",
      speaker: "Dr. Ahmed Ben Ali",
    },
    {
      id: "2",
      title: "Hackathon IoT",
      description: "48h pour créer des solutions IoT innovantes",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=300",
      date: "2024-04-20",
      time: "09:00 - 18:00",
      location: "Campus Maker Skills",
      maxAttendees: 50,
      registeredAttendees: 42,
      price: 0,
      type: "hackathon",
      status: "upcoming",
      speaker: "Équipe Maker Skills",
    },
    {
      id: "3",
      title: "Salon de l'Innovation",
      description: "Exposition des projets étudiants",
      image:
        "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=300",
      date: "2024-03-10",
      time: "10:00 - 17:00",
      location: "Hall d'exposition",
      maxAttendees: 300,
      registeredAttendees: 280,
      price: 0,
      type: "exhibition",
      status: "completed",
      speaker: "Étudiants Maker Skills",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      case "ongoing":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "completed":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
      case "cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "conference":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400";
      case "hackathon":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400";
      case "exhibition":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "workshop":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "upcoming":
        return "À venir";
      case "ongoing":
        return "En cours";
      case "completed":
        return "Terminé";
      case "cancelled":
        return "Annulé";
      default:
        return status;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "conference":
        return "Conférence";
      case "hackathon":
        return "Hackathon";
      case "exhibition":
        return "Exposition";
      case "workshop":
        return "Atelier";
      default:
        return type;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1
            className={`text-3xl font-bold ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Gestion des Événements
          </h1>
          <p
            className={`mt-2 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Organisez et gérez vos événements et conférences
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-shadow"
        >
          <Plus className="h-5 w-5" />
          <span>Nouvel Événement</span>
        </motion.button>
      </div>

      {/* Search */}
      <div
        className={`p-6 rounded-2xl ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        } shadow-lg border border-gray-200 dark:border-gray-700`}
      >
        <div className="relative">
          <Search
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          />
          <input
            type="text"
            placeholder="Rechercher un événement..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-colors ${
              theme === "dark"
                ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-500"
                : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-indigo-500"
            } focus:outline-none focus:ring-2 focus:ring-indigo-500/20`}
          />
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <AnimatedSection key={event.id} delay={index * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className={`rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              } group`}
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      event.status
                    )}`}
                  >
                    {getStatusLabel(event.status)}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(
                      event.type
                    )}`}
                  >
                    {getTypeLabel(event.type)}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex space-x-2">
                    <button className="p-2 bg-white rounded-full text-blue-600 hover:bg-blue-50 transition-colors shadow-lg">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-2 bg-white rounded-full text-green-600 hover:bg-green-50 transition-colors shadow-lg">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-2 bg-white rounded-full text-red-600 hover:bg-red-50 transition-colors shadow-lg">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {event.title}
                </h3>

                <p
                  className={`text-sm mb-4 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {event.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-blue-500" />
                    <div>
                      <div
                        className={`text-sm font-medium ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {new Date(event.date).toLocaleDateString("fr-FR")}
                      </div>
                      <div
                        className={`text-xs ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {event.time}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-green-500" />
                    <div>
                      <div
                        className={`text-sm font-medium ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {event.location}
                      </div>
                      <div
                        className={`text-xs ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        Lieu
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-purple-500" />
                    <div>
                      <div
                        className={`text-sm font-medium ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {event.registeredAttendees}/{event.maxAttendees}
                      </div>
                      <div
                        className={`text-xs ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        Participants
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-orange-500" />
                    <div>
                      <div
                        className={`text-sm font-medium ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {event.price === 0 ? "Gratuit" : `${event.price}DT`}
                      </div>
                      <div
                        className={`text-xs ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        Prix
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span
                      className={`${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Inscriptions
                    </span>
                    <span
                      className={`${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {Math.round(
                        (event.registeredAttendees / event.maxAttendees) * 100
                      )}
                      %
                    </span>
                  </div>
                  <div
                    className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2`}
                  >
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${
                          (event.registeredAttendees / event.maxAttendees) * 100
                        }%`,
                      }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <div
                      className={`text-sm ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Animé par {event.speaker}
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
                  >
                    Gérer
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default EventsManagement;
