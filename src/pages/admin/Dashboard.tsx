import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  BookOpen,
  Award,
  TrendingUp,
  Calendar,
  MessageSquare,
  ShoppingBag,
  Zap,
  ArrowUpRight,
  DollarSign,
  Target,
  Activity,
  Clock,
} from "lucide-react";
import { useStore } from "../../stores/useStore";
import AnimatedSection from "../../components/UI/AnimatedSection";

const Dashboard: React.FC = () => {
  const { theme } = useStore();

  const stats = [
    {
      title: "Revenus Totaux",
      value: "DT45,678",
      change: "+23%",
      changeType: "positive",
      icon: DollarSign,
      color: "bg-orange-500",
    },
    {
      title: "Étudiants Actifs",
      value: "1,234",
      change: "+12%",
      changeType: "positive",
      icon: Users,
      color: "bg-blue-600",
    },
    {
      title: "Formations",
      value: "24",
      change: "+5%",
      changeType: "positive",
      icon: BookOpen,
      color: "bg-orange-600",
    },
    {
      title: "Taux de Réussite",
      value: "94%",
      change: "+2%",
      changeType: "positive",
      icon: Target,
      color: "bg-blue-500",
    },
  ];

  const quickActions = [
    {
      title: "Nouvelle Formation",
      description: "Créer une nouvelle formation",
      icon: BookOpen,
      color: "bg-blue-600",
      href: "/admin/formations/new",
    },
    {
      title: "Nouveau Bootcamp",
      description: "Planifier un bootcamp",
      icon: Zap,
      color: "bg-orange-500",
      href: "/admin/bootcamps/new",
    },
    {
      title: "Ajouter Produit",
      description: "Ajouter un nouveau produit",
      icon: ShoppingBag,
      color: "bg-blue-500",
      href: "/admin/products/new",
    },
    {
      title: "Nouvel Événement",
      description: "Créer un événement",
      icon: Calendar,
      color: "bg-orange-600",
      href: "/admin/events/new",
    },
  ];

  const recentActivities = [
    {
      type: "formation",
      title: "Nouvelle inscription",
      description: 'Ahmed Ben Ali s\'est inscrit à "IoT pour Débutants"',
      time: "2 min",
      avatar:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50",
    },
    {
      type: "order",
      title: "Nouvelle commande",
      description: "Commande #1234 - Kit Arduino Starter",
      time: "15 min",
      avatar: null,
    },
    {
      type: "bootcamp",
      title: "Bootcamp terminé",
      description: "Bootcamp IA - 15 étudiants certifiés",
      time: "1h",
      avatar: null,
    },
    {
      type: "partner",
      title: "Nouveau partenaire",
      description: "TechCorp a rejoint le réseau",
      time: "2h",
      avatar: null,
    },
  ];

  const upcomingEvents = [
    {
      title: "Début Bootcamp IA",
      date: "15 Mars",
      time: "09:00",
      type: "bootcamp",
      participants: 20,
    },
    {
      title: "Workshop Robotique",
      date: "18 Mars",
      time: "14:00",
      type: "workshop",
      participants: 15,
    },
    {
      title: "Réunion Partenaires",
      date: "20 Mars",
      time: "10:00",
      type: "meeting",
      participants: 8,
    },
    {
      title: "Formation IoT",
      date: "22 Mars",
      time: "09:00",
      type: "formation",
      participants: 25,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1
          className={`text-3xl font-bold ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Tableau de Bord
        </h1>
        <p
          className={`mt-2 ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Vue d'ensemble de votre plateforme éducative
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <AnimatedSection key={index} delay={index * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className={`relative overflow-hidden rounded-2xl p-6 ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              } shadow-lg border border-gray-200 dark:border-gray-700`}
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
                    className={`text-2xl font-bold mt-1 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {stat.value}
                  </p>
                </div>
                <div
                  className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}
                >
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <ArrowUpRight
                  className={`h-4 w-4 ${
                    stat.changeType === "positive"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                />
                <span
                  className={`text-sm font-medium ml-1 ${
                    stat.changeType === "positive"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {stat.change}
                </span>
                <span
                  className={`text-sm ml-2 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  vs mois dernier
                </span>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2
          className={`text-xl font-semibold mb-6 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Actions Rapides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-6 rounded-xl ${action.color} text-white cursor-pointer shadow-lg hover:shadow-xl transition-shadow`}
              >
                <action.icon className="h-8 w-8 mb-3" />
                <h3 className="font-semibold mb-1">{action.title}</h3>
                <p className="text-sm opacity-90">{action.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activities */}
        <div
          className={`rounded-2xl p-6 ${
            theme === "dark" ? "bg-gray-800" : "bg-white"
          } shadow-lg border border-gray-200 dark:border-gray-700`}
        >
          <div className="flex items-center justify-between mb-6">
            <h2
              className={`text-xl font-semibold ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Activités Récentes
            </h2>
            <Activity
              className={`h-5 w-5 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            />
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                {activity.avatar ? (
                  <img
                    src={activity.avatar}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div
                    className={`w-10 h-10 rounded-full ${
                      index % 2 === 0 ? "bg-orange-500" : "bg-blue-600"
                    } flex items-center justify-center`}
                  >
                    <span className="text-white text-sm font-medium">
                      {activity.type.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-sm font-medium ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {activity.title}
                  </p>
                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {activity.description}
                  </p>
                </div>
                <span
                  className={`text-xs ${
                    theme === "dark" ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  {activity.time}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div
          className={`rounded-2xl p-6 ${
            theme === "dark" ? "bg-gray-800" : "bg-white"
          } shadow-lg border border-gray-200 dark:border-gray-700`}
        >
          <div className="flex items-center justify-between mb-6">
            <h2
              className={`text-xl font-semibold ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Événements à Venir
            </h2>
            <Calendar
              className={`h-5 w-5 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            />
          </div>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 rounded-xl ${
                  theme === "dark" ? "bg-gray-700" : "bg-gray-50"
                } hover:bg-opacity-80 transition-colors cursor-pointer`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3
                    className={`font-medium ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {event.title}
                  </h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      event.type === "bootcamp"
                        ? "bg-orange-500 text-white"
                        : event.type === "workshop"
                        ? "bg-blue-600 text-white"
                        : event.type === "meeting"
                        ? "bg-orange-600 text-white"
                        : "bg-blue-500 text-white"
                    }`}
                  >
                    {event.type}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4 text-orange-500" />
                      <span
                        className={`${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {event.date}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span
                        className={`${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {event.time}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4 text-green-500" />
                    <span
                      className={`${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {event.participants}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
