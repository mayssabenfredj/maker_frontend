import React from "react";
import { Pencil, Trash } from "lucide-react";
import { motion } from "framer-motion";
import { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: (project: Project) => void;
  theme: "light" | "dark";
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onEdit, onDelete, theme }) => {
  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-lg flex flex-col h-full transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      }`}
    >
      {project.coverImage && (
        <img src={project.coverImage} alt={project.name} className="w-full h-40 object-cover" />
      )}
      <div className="flex-1 p-6 space-y-4">
        <h3
          className={`text-xl font-semibold truncate ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          {project.name}
        </h3>
        {project.description && (
          <p
            className={`text-sm line-clamp-3 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {project.description}
          </p>
        )}
      </div>
      <div className="flex justify-end space-x-2 p-4 border-t border-gray-100 dark:border-gray-700">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onEdit(project)}
          className="p-2 rounded-md text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700"
        >
          <Pencil className="h-4 w-4" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onDelete(project)}
          className="p-2 rounded-md text-red-500 hover:bg-red-50 dark:hover:bg-gray-700"
        >
          <Trash className="h-4 w-4" />
        </motion.button>
      </div>
    </div>
  );
};

export default ProjectCard;
