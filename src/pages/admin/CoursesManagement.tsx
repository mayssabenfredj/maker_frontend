import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Edit,
  Trash2,
  Search,
  Filter,
  Eye,
  Star,
  Users,
  Clock,
  Award,
  TrendingUp,
} from "lucide-react";
import { useStore } from "../../stores/useStore";
import AnimatedSection from "../../components/UI/AnimatedSection";
import CourseForm from "../../components/admin/CourseForm";
import Pagination from "../../components/admin/Pagination";

const CoursesManagement: React.FC = () => {
  const { theme, courses, deleteCourse } = useStore();
  const [showForm, setShowForm] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const categories = [
    { id: "all", label: "Toutes" },
    { id: "iot", label: "IoT" },
    { id: "robotics", label: "Robotique" },
    { id: "ai", label: "IA" },
    { id: "programming", label: "Programmation" },
  ];

  // Mock courses data for demonstration
  const mockCourses = [
    {
      id: "1",
      title: { fr: "Formation IA Avancée", en: "Advanced AI Training" },
      description: {
        fr: "Maîtrisez l'intelligence artificielle avec nos experts",
        en: "Master artificial intelligence with our experts",
      },
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500",
      category: "ai",
      type: "bootcamp",
      duration: "16 semaines",
      price: 1299,
      level: "advanced",
      featured: true,
      rating: 4.9,
      students: 2847,
      revenue: 3698253,
      growth: 24,
    },
    {
      id: "2",
      title: { fr: "Robotique Industrielle", en: "Industrial Robotics" },
      description: {
        fr: "Conception et programmation de robots industriels",
        en: "Design and programming of industrial robots",
      },
      image:
        "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=500",
      category: "robotics",
      type: "adults",
      duration: "12 semaines",
      price: 899,
      level: "intermediate",
      featured: true,
      rating: 4.8,
      students: 1542,
      revenue: 1386258,
      growth: 18,
    },
    {
      id: "3",
      title: { fr: "IoT pour Débutants", en: "IoT for Beginners" },
      description: {
        fr: "Introduction complète à l'Internet des Objets",
        en: "Complete introduction to Internet of Things",
      },
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=500",
      category: "iot",
      type: "adults",
      duration: "8 semaines",
      price: 499,
      level: "beginner",
      featured: false,
      rating: 4.6,
      students: 3421,
      revenue: 1707079,
      growth: 32,
    },
    // Add more mock courses for pagination demonstration
    ...Array.from({ length: 15 }, (_, i) => ({
      id: `${i + 4}`,
      title: { fr: `Formation ${i + 4}`, en: `Training ${i + 4}` },
      description: {
        fr: `Description de la formation ${i + 4}`,
        en: `Description of training ${i + 4}`,
      },
      image: `https://images.pexels.com/photos/${3861969 + i}/pexels-photo-${3861969 + i}.jpeg?auto=compress&cs=tinysrgb&w=500`,
      category: ["ai", "robotics", "iot", "programming"][i % 4],
      type: ["adults", "kids", "bootcamp"][i % 3],
      duration: `${8 + (i % 12)} semaines`,
      price: 300 + i * 50,
      level: ["beginner", "intermediate", "advanced"][i % 3],
      featured: i % 3 === 0,
      rating: 4.2 + (i % 8) * 0.1,
      students: 150 + i * 200,
      revenue: (150 + i * 200) * (300 + i * 50),
      growth: 5 + (i % 30),
    })),
  ];

  const allCourses = mockCourses.length > 0 ? mockCourses : courses;

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch =
      course.title.fr.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.title.en.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "all" || course.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCourses = filteredCourses.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handleEdit = (course: any) => {
    setEditingCourse(course);
    setShowForm(true);
  };

  const handleDelete = (courseId: string) => {
    if (
      window.confirm("Êtes-vous sûr de vouloir supprimer cette formation ?")
    ) {
      deleteCourse(courseId);
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingCourse(null);
  };

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

  const getTypeColor = (type: string) => {
    switch (type) {
      case "kids":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400";
      case "adults":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      case "bootcamp":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  if (showForm) {
    return <CourseForm course={editingCourse} onClose={handleCloseForm} />;
  }

  return (
    <div className="min-h-screen pt-16 bg-dark-950 text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <AnimatedSection>
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-neon-purple/5 rounded-2xl" />
            <div className="relative p-8 bg-gradient-to-br from-dark-900/50 to-dark-800/50 border border-neon-blue/20 backdrop-blur-sm rounded-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full border border-neon-blue/30 backdrop-blur-sm mb-4">
                    <span className="text-neon-blue text-sm font-medium">
                      Admin Dashboard
                    </span>
                  </div>
                  <h1 className="text-3xl lg:text-4xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-white via-neon-blue to-neon-purple bg-clip-text text-transparent">
                      Gestion des Formations
                    </span>
                  </h1>
                  <p className="text-gray-400">
                    Gérez vos formations et programmes éducatifs avec des outils
                    avancés
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowForm(true)}
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl text-white font-medium hover:shadow-glow transition-all duration-300"
                >
                  <Plus className="h-5 w-5" />
                  <span>Nouvelle Formation</span>
                </motion.button>
              </div>

              {/* Stats Overview */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {filteredCourses.length}
                  </div>
                  <div className="text-sm text-gray-400">Total Formations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-blue">
                    {mockCourses
                      .reduce((acc, course) => acc + course.students, 0)
                      .toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-400">Étudiants Totaux</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-purple">
                    €
                    {(
                      mockCourses.reduce(
                        (acc, course) => acc + course.revenue,
                        0,
                      ) / 1000000
                    ).toFixed(1)}
                    M
                  </div>
                  <div className="text-sm text-gray-400">Revenus Totaux</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1">
                    <TrendingUp className="h-5 w-5 text-green-400" />
                    <span className="text-2xl font-bold text-green-400">
                      +23%
                    </span>
                  </div>
                  <div className="text-sm text-gray-400">Croissance</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection>
          <div className="p-6 rounded-2xl mb-8 bg-gradient-to-br from-dark-900/50 to-dark-800/50 border border-neon-blue/20 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher une formation..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-neon-blue/20 bg-dark-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue/50 transition-colors"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-neon-blue/20 bg-dark-800/50 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50 focus:border-neon-blue/50 transition-colors"
                >
                  {categories.map((category) => (
                    <option
                      key={category.id}
                      value={category.id}
                      className="bg-dark-800"
                    >
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <AnimatedSection key={course.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className={`rounded-xl shadow-lg overflow-hidden ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title.fr}
                    className="w-full h-48 object-cover"
                  />
                  {course.featured && (
                    <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Populaire
                    </div>
                  )}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button
                      onClick={() => handleEdit(course)}
                      className="p-2 bg-white rounded-full text-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}
                    >
                      {course.level === "beginner"
                        ? "Débutant"
                        : course.level === "intermediate"
                          ? "Intermédiaire"
                          : "Avancé"}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(course.type)}`}
                    >
                      {course.type === "kids"
                        ? "Enfants"
                        : course.type === "adults"
                          ? "Adultes"
                          : "Bootcamp"}
                    </span>
                  </div>

                  <h3
                    className={`text-lg font-bold mb-2 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {course.title.fr}
                  </h3>

                  <p
                    className={`text-sm mb-4 line-clamp-2 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {course.description.fr}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-sm ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {course.duration}
                    </span>
                    <span
                      className={`text-lg font-bold ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {course.price}€
                    </span>
                  </div>

                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleEdit(course)}
                      className="flex-1 flex items-center justify-center space-x-2 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      <Edit className="h-4 w-4" />
                      <span>Modifier</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleDelete(course.id)}
                      className="flex items-center justify-center p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <AnimatedSection>
            <div className="text-center py-12">
              <div
                className={`text-6xl mb-4 ${
                  theme === "dark" ? "text-gray-600" : "text-gray-400"
                }`}
              >
                📚
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Aucune formation trouvée
              </h3>
              <p
                className={`${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Essayez de modifier vos critères de recherche ou créez une
                nouvelle formation.
              </p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
};

export default CoursesManagement;
