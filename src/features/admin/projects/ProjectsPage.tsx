import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useStore } from "../../../stores/useStore";
import AnimatedSection from "../../../components/UI/AnimatedSection";
import ConfirmDialog from "../../../shared/components/ConfirmDialog";

import { projectService } from "./services/project.service";
import { Project, CreateProjectDto } from "./types/project";
import ProjectCard from "./components/ProjectCard";
import ProjectForm from "./components/ProjectForm";

const ProjectsManagement: React.FC = () => {
  const { theme } = useStore();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<Project | null>(null);
  const [formLoading, setFormLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [formData, setFormData] = useState<CreateProjectDto>({
    name: "",
    tagline: "",
    description: "",
    coverImage: "",
    status: "",
    technologies: [],
    categories: [],
    startDate: "",
    targetDate: "",
    team: [],
    repository: "",
    videoUrl: "",
    isFeatured: false,
    priority: "",
    completion: 0,
  });

  // Load projects
  const fetchProjects = async () => {
    setLoading(true);
    try {
      const data = await projectService.getProjects();
      setProjects(Array.isArray(data) ? data : []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // CRUD handlers
  const handleAdd = () => {
    setEditingProject(null);
    setFormData({
      name: "",
      tagline: "",
      description: "",
      coverImage: "",
      status: "",
      technologies: [],
      categories: [],
      startDate: "",
      targetDate: "",
      team: [],
      repository: "",
      videoUrl: "",
      isFeatured: false,
      priority: "",
      completion: 0,
    });
    setImageFile(null);
    setShowForm(true);
  };

  const handleEdit = (p: Project) => {
    setEditingProject(p);
    setFormData({
      name: p.name,
      tagline: p.tagline || "",
      description: p.description || "",
      coverImage: p.coverImage || "",
      status: p.status || "",
      technologies: p.technologies || [],
      categories: p.categories || [],
      startDate: p.startDate || "",
      targetDate: p.targetDate || "",
      team: p.team || [],
      repository: p.repository || "",
      videoUrl: p.videoUrl || "",
      isFeatured: p.isFeatured || false,
      priority: p.priority || "",
      completion: p.completion || 0,
    });
    setImageFile(null);
    setShowForm(true);
  };

  const handleDelete = (p: Project) => {
    setProjectToDelete(p);
    setConfirmOpen(true);
  };

  const confirmDelete = async () => {
    if (!projectToDelete) return;
    setFormLoading(true);
    try {
      await projectService.deleteProject(projectToDelete._id);
      setProjects(projects.filter((pr) => pr._id !== projectToDelete._id));
    } finally {
      setFormLoading(false);
      setConfirmOpen(false);
      setProjectToDelete(null);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      if (editingProject) {
        const updated = await projectService.updateProject(editingProject._id, {
          ...formData,
          coverImage: imageFile || formData.coverImage,
        });
        setProjects(
          projects.map((pr) => (pr._id === updated._id ? updated : pr))
        );
      } else {
        const created = await projectService.createProject({
          ...formData,
          coverImage: imageFile || formData.coverImage,
        });
        setProjects([created, ...projects]);
      }
      setShowForm(false);
    } finally {
      setFormLoading(false);
    }
  };

  // Filter projects
  const filteredProjects = projects.filter(
    (pr) =>
      pr.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (pr.description || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={`min-h-screen ${
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
                Gestion des Projets
              </h1>
              <p
                className={`${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Créez et gérez vos projets
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAdd}
              className="flex items-center space-x-2 px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              <Plus className="h-5 w-5" />
              <span>Nouveau Projet</span>
            </motion.button>
          </div>
        </AnimatedSection>

        {/* Search */}
        <AnimatedSection>
          <div
            className={`p-6 rounded-xl mb-8 ${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            } shadow-lg`}
          >
            <input
              type="text"
              placeholder="Rechercher un projet..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-4 pr-4 py-3 rounded-lg border transition-colors ${
                theme === "dark"
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
              } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
            />
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        {loading ? (
          <div className="text-center py-12 text-lg text-gray-500">
            Chargement...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <AnimatedSection key={project._id}>
                <ProjectCard
                  project={project}
                  onEdit={handleEdit}
                  onDelete={() => handleDelete(project)}
                  theme={theme}
                />
              </AnimatedSection>
            ))}
          </div>
        )}

        {!loading && filteredProjects.length === 0 && (
          <AnimatedSection>
            <div className="text-center py-12">
              <div
                className={`text-6xl mb-4 ${
                  theme === "dark" ? "text-gray-600" : "text-gray-400"
                }`}
              >
                📁
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Aucun projet trouvé
              </h3>
              <p
                className={`${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Essayez de modifier votre recherche ou ajoutez un nouveau
                projet.
              </p>
            </div>
          </AnimatedSection>
        )}

        {/* Form Dialog */}
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowForm(false)}
            />

            {/* Modal container - now larger with max-w-5xl and full height */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] z-10 flex flex-col"
            >
              {/* Scrollable content area */}
              <div className="overflow-y-auto rounded-xl shadow-xl">
                <ProjectForm
                  editingProject={editingProject}
                  formData={formData}
                  setFormData={setFormData}
                  imageFile={imageFile}
                  setImageFile={setImageFile}
                  onSubmit={handleFormSubmit}
                  onCancel={() => {
                    setShowForm(false);
                    setEditingProject(null);
                  }}
                  loading={formLoading}
                />
              </div>
            </motion.div>
          </div>
        )}

        {/* Confirm Dialog */}
        <ConfirmDialog
          isOpen={confirmOpen}
          title="Supprimer le projet ?"
          message="Cette action est irréversible. Voulez-vous vraiment supprimer ce projet ?"
          confirmText="Supprimer"
          cancelText="Annuler"
          type="danger"
          onConfirm={confirmDelete}
          onCancel={() => setConfirmOpen(false)}
        />
      </div>
    </div>
  );
};

export default ProjectsManagement;
