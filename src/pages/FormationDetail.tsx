import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Users,
  Star,
  Calendar,
  MapPin,
  Play,
  Download,
  CheckCircle2,
  Award,
  Globe,
  Book,
  Target,
  Lightbulb,
  Code,
  Brain,
} from "lucide-react";
import { useStore } from "../stores/useStore";
import AnimatedSection from "../components/UI/AnimatedSection";

const FormationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { theme } = useStore();
  const [activeTab, setActiveTab] = useState("overview");

  // Mock formation data
  const formation = {
    id: "1",
    title: "Advanced AI & Machine Learning Bootcamp",
    subtitle: "Master artificial intelligence and become an AI expert",
    description:
      "Comprehensive 16-week program covering machine learning, deep learning, natural language processing, and computer vision. Build real-world AI applications and work on cutting-edge projects.",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
    video:
      "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4",
    instructor: {
      name: "Dr. Sarah Chen",
      avatar:
        "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200",
      title: "AI Research Scientist",
      company: "Google AI",
      experience: "10+ years",
      rating: 4.9,
      students: 5000,
    },
    details: {
      duration: "16 weeks",
      level: "Advanced",
      language: "English/French",
      location: "Online + Lab Sessions",
      price: 1299,
      originalPrice: 1899,
      students: 2847,
      rating: 4.8,
      reviews: 892,
      category: "AI & Machine Learning",
      startDate: "2024-03-15",
      endDate: "2024-07-15",
    },
    curriculum: [
      {
        week: "1-2",
        title: "Foundations of AI",
        topics: [
          "Introduction to AI",
          "Python for AI",
          "Mathematics for ML",
          "Data Preprocessing",
        ],
        duration: "20 hours",
      },
      {
        week: "3-5",
        title: "Machine Learning Fundamentals",
        topics: [
          "Supervised Learning",
          "Unsupervised Learning",
          "Model Evaluation",
          "Feature Engineering",
        ],
        duration: "30 hours",
      },
      {
        week: "6-8",
        title: "Deep Learning",
        topics: ["Neural Networks", "CNNs", "RNNs", "Transfer Learning"],
        duration: "35 hours",
      },
      {
        week: "9-11",
        title: "Specialized AI",
        topics: ["NLP", "Computer Vision", "Reinforcement Learning", "GANs"],
        duration: "40 hours",
      },
      {
        week: "12-14",
        title: "Real-world Projects",
        topics: [
          "Industry Case Studies",
          "Project Development",
          "Model Deployment",
          "MLOps",
        ],
        duration: "45 hours",
      },
      {
        week: "15-16",
        title: "Capstone Project",
        topics: [
          "Final Project",
          "Presentation",
          "Portfolio Development",
          "Career Guidance",
        ],
        duration: "25 hours",
      },
    ],
    skills: [
      "Machine Learning Algorithms",
      "Deep Learning Frameworks",
      "Natural Language Processing",
      "Computer Vision",
      "Data Analysis & Visualization",
      "Python Programming",
      "TensorFlow & PyTorch",
      "Model Deployment",
      "MLOps & Production",
      "AI Ethics & Bias",
    ],
    requirements: [
      "Basic programming knowledge (Python preferred)",
      "High school mathematics",
      "Passion for AI and technology",
      "Computer with internet connection",
      "Dedication to complete the program",
    ],
    features: [
      "Live coding sessions",
      "Real-world projects",
      "Industry mentorship",
      "Career placement support",
      "Certificate of completion",
      "Lifetime access to materials",
      "24/7 community support",
      "Weekly assessments",
    ],
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: Book },
    { id: "curriculum", label: "Curriculum", icon: Target },
    { id: "instructor", label: "Instructor", icon: Users },
    { id: "reviews", label: "Reviews", icon: Star },
  ];

  return (
    <div className="min-h-screen bg-dark-950 text-white pt-16">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link
              to="/formations"
              className="inline-flex items-center text-neon-blue hover:text-neon-cyan transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Formations
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full border border-neon-blue/30 backdrop-blur-sm">
                  <span className="text-neon-blue text-sm font-medium">
                    {formation.details.category}
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-neon-blue to-neon-purple bg-clip-text text-transparent">
                    {formation.title}
                  </span>
                </h1>

                <p className="text-xl text-gray-300">{formation.subtitle}</p>

                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-neon-blue" />
                    <span>{formation.details.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-neon-blue" />
                    <span>{formation.details.students} students</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>
                      {formation.details.rating} ({formation.details.reviews}{" "}
                      reviews)
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-neon-blue" />
                    <span>{formation.details.language}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-3xl font-bold text-white">
                    €{formation.details.price}
                  </div>
                  <div className="text-lg text-gray-400 line-through">
                    €{formation.details.originalPrice}
                  </div>
                  <div className="px-3 py-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-sm font-medium">
                    Save €
                    {formation.details.originalPrice - formation.details.price}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl text-white font-semibold hover:shadow-glow transition-all duration-300"
                  >
                    Enroll Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border border-neon-blue/30 rounded-xl text-neon-blue font-semibold hover:bg-neon-blue/10 transition-all duration-300"
                  >
                    Download Syllabus
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={formation.image}
                  alt={formation.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent" />

                {/* Play Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                </motion.button>

                {/* Course Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Award className="h-5 w-5 text-neon-blue" />
                        <span className="text-sm font-medium">
                          Certificate Included
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-300">
                          Starts{" "}
                          {new Date(
                            formation.details.startDate,
                          ).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-16 z-40 bg-dark-900/80 backdrop-blur-md border-b border-neon-blue/20">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-neon-blue text-neon-blue"
                    : "border-transparent text-gray-400 hover:text-white"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {activeTab === "overview" && (
            <div className="space-y-12">
              {/* Description */}
              <AnimatedSection>
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    About This Formation
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {formation.description}
                  </p>
                </div>
              </AnimatedSection>

              {/* Skills You'll Learn */}
              <AnimatedSection>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Skills You'll Learn
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {formation.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-4 bg-gradient-to-br from-dark-900/50 to-dark-800/50 border border-neon-blue/20 rounded-xl"
                    >
                      <CheckCircle2 className="h-5 w-5 text-neon-blue flex-shrink-0" />
                      <span className="text-gray-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Requirements */}
              <AnimatedSection>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Requirements
                </h3>
                <div className="bg-gradient-to-br from-dark-900/50 to-dark-800/50 border border-neon-blue/20 rounded-2xl p-8">
                  <ul className="space-y-4">
                    {formation.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Lightbulb className="h-5 w-5 text-neon-blue mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              {/* Features */}
              <AnimatedSection>
                <h3 className="text-2xl font-bold text-white mb-6">
                  What's Included
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {formation.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-4 bg-gradient-to-br from-dark-900/50 to-dark-800/50 border border-neon-blue/20 rounded-xl hover:border-neon-blue/40 transition-colors"
                    >
                      <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          )}

          {activeTab === "curriculum" && (
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-white mb-8">
                Course Curriculum
              </h2>
              <div className="space-y-6">
                {formation.curriculum.map((module, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-dark-900/50 to-dark-800/50 border border-neon-blue/20 rounded-2xl p-8 hover:border-neon-blue/40 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl flex items-center justify-center text-white font-bold">
                          {module.week}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {module.title}
                          </h3>
                          <p className="text-neon-blue text-sm">
                            {module.duration}
                          </p>
                        </div>
                      </div>
                      <Code className="h-6 w-6 text-neon-blue" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {module.topics.map((topic, topicIndex) => (
                        <div
                          key={topicIndex}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-neon-blue rounded-full" />
                          <span className="text-gray-300">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          )}

          {activeTab === "instructor" && (
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-white mb-8">
                Your Instructor
              </h2>
              <div className="bg-gradient-to-br from-dark-900/50 to-dark-800/50 border border-neon-blue/20 rounded-2xl p-8">
                <div className="flex items-start space-x-6">
                  <img
                    src={formation.instructor.avatar}
                    alt={formation.instructor.name}
                    className="w-24 h-24 rounded-full border-2 border-neon-blue/30"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {formation.instructor.name}
                    </h3>
                    <p className="text-neon-blue mb-2">
                      {formation.instructor.title}
                    </p>
                    <p className="text-gray-400 mb-4">
                      {formation.instructor.company}
                    </p>

                    <div className="flex items-center space-x-6 mb-6">
                      <div className="flex items-center space-x-2">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="text-white">
                          {formation.instructor.rating}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-5 w-5 text-neon-blue" />
                        <span className="text-white">
                          {formation.instructor.students.toLocaleString()}{" "}
                          students
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award className="h-5 w-5 text-neon-blue" />
                        <span className="text-white">
                          {formation.instructor.experience} experience
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      Dr. Sarah Chen is a leading AI researcher with over 10
                      years of experience in machine learning and deep learning.
                      She has published over 50 research papers and holds
                      multiple patents in AI technologies. She's passionate
                      about making AI education accessible and practical for
                      everyone.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}

          {activeTab === "reviews" && (
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-white mb-8">
                Student Reviews
              </h2>
              <div className="space-y-6">
                {/* Review placeholder */}
                <div className="text-center py-12">
                  <Star className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400">
                    Reviews will be displayed here
                  </p>
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Fixed Enrollment Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-dark-900/95 backdrop-blur-md border-t border-neon-blue/20 p-4 z-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-white">
                €{formation.details.price}
              </div>
              <div className="text-sm text-gray-400">One-time payment</div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl text-white font-semibold hover:shadow-glow transition-all duration-300"
            >
              Enroll Now
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationDetail;
