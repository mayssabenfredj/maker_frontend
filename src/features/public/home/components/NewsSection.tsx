import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "../../../../components/UI/AnimatedSection";
import { useStore } from "../../../../stores/useStore";
import { Blog } from "../../../admin/blogs/blog";
import { getImageUrl } from "../../../../shared/utils/imageUtils";

interface NewsSectionProps {
  blogs: Blog[];
}

const NewsSection: React.FC<NewsSectionProps> = ({ blogs }) => {
  const { theme } = useStore();

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Partenariat":
        return "bg-blue-500";
      case "Formation":
        return "bg-orange-500";
      case "Actualité":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
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
              Actualités
            </h2>
            <p
              className={`text-xl max-w-2xl mx-auto ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Restez informé de nos dernières nouvelles et événements
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <AnimatedSection key={blog._id} delay={index * 0.1}>
              <motion.article
                whileHover={{ y: -10 }}
                className={`rounded-2xl shadow-lg overflow-hidden ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                } group`}
              >
                <div className="relative">
                  <img
                    src={getImageUrl(blog.cover)}
                    alt={blog.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getCategoryColor(
                        "Actualité"
                      )}`}
                    >
                      Actualité
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className={`text-xl font-bold mb-3 line-clamp-2 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {blog.title}
                  </h3>
                  <p
                    className={`text-sm mb-4 line-clamp-3 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {blog.description?.slice(0, 120) || ""}
                  </p>
                  <div className="flex items-center justify-between text-sm mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-orange-500" />
                      <span
                        className={`$${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {blog.createdAt
                          ? new Date(blog.createdAt).toLocaleDateString("fr-FR")
                          : ""}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-blue-500" />
                      <span
                        className={`$${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        Maker Skills
                      </span>
                    </div>
                  </div>
                  <Link
                    to={`/news/${blog._id}`}
                    className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors"
                  >
                    Lire la suite
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="text-center mt-12">
            <Link
              to="/news"
              className="inline-flex items-center px-8 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              Voir toutes les actualités
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default NewsSection;
