import React, { useEffect } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { useStore } from "../../../../stores/useStore";
import { CreateProjectDto, Project } from "../types/project";
import MediaUpload from "../../../../shared/components/MediaUpload";
import RichTextEditor from "../../../../shared/components/RichTextEditor";
import { categoryService } from "../../categories";
import Select from "react-select";

interface ProjectFormProps {
  editingProject: Project | null;
  formData: CreateProjectDto;
  setFormData: (data: CreateProjectDto) => void;
  imageFile: File | null;
  setImageFile: (file: File | null) => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  onCancel: () => void;
  loading: boolean;
}

const ProjectForm: React.FC<ProjectFormProps> = ({
  editingProject,
  formData,
  setFormData,
  imageFile,
  setImageFile,
  onSubmit,
  onCancel,
  loading,
}) => {
  const { theme } = useStore();
  const [categories,setCategories] = React.useState<any[]>([]);
  const statuses = [
    { value: "Planning", label: "Planification" },
    { value: "Planned", label: "Planifié" },
    { value: "In Development", label: "En développement" },
    { value: "Prototyping", label: "Prototypage" },
    { value: "Testing", label: "Test" },
    { value: "Completed", label: "Terminé" },
    { value: "Deployed", label: "Déployé" },
  ];
  const priorities = [
    { value: "Low", label: "Faible" },
    { value: "Medium", label: "Moyenne" },
    { value: "High", label: "Haute" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(e);
  };
useEffect(() => {
  categoryService.getCategories().then((categories) => {
  let transformedCategories = categories.map((category) => ({
    value: category._id,
    label: category.name,
  })
  );
  setCategories(transformedCategories);
}).catch((error) => {
  console.error("Error fetching categories:", error);
  setCategories([]);
})
},[loading])
  return (
    <div className="space-y-8">
      {/* Header */}

      <form
        onSubmit={handleSubmit}
        className={`p-8 rounded-2xl shadow-lg space-y-6 ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Nom du projet *
            </label>
            <input
              required
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={`w-full px-4 py-3 rounded-lg border ${
                theme === "dark"
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-white border-gray-300 text-gray-900"
              } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
            />
          </div>

          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Date de début
            </label>
            <input
              type="date"
              value={formData.startDate || ""}
              onChange={(e) =>
                setFormData({ ...formData, startDate: e.target.value })
              }
              className={`w-full px-4 py-3 rounded-lg border ${
                theme === "dark"
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-white border-gray-300 text-gray-900"
              } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
            />
          </div>

          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Date cible
            </label>
            <input
              type="date"
              value={formData.targetDate || ""}
              onChange={(e) =>
                setFormData({ ...formData, targetDate: e.target.value })
              }
              className={`w-full px-4 py-3 rounded-lg border ${
                theme === "dark"
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-white border-gray-300 text-gray-900"
              } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
            />
          </div>
        </div>

        <div>
          <label
            className={`block text-sm font-medium mb-2 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Description
          </label>
          <RichTextEditor
            value={formData.description || ""}
            onChange={(value) =>
              setFormData({ ...formData, description: value })
            }
            placeholder="Décrivez votre projet..."
          />
        </div>

        {/* Additional fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tagline */}
          <div>
            <label className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Slogan</label>
            <input
              type="text"
              value={formData.tagline || ""}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              className={`w-full px-4 py-3 rounded-lg border ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"} focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
            />
          </div>
          {/* Status */}
          <div>
            <label className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Statut</label>
            <select
              value={formData.status || ""}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className={`w-full px-4 py-3 rounded-lg border ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"} focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
            >
              <option value="">-- Choisir --</option>
              {statuses.map((s,_) => (
                <option key={_} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>
          {/* Priority */}
          <div>
            <label className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Priorité</label>
            <select
              value={formData.priority || ""}
              onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
              className={`w-full px-4 py-3 rounded-lg border ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"} focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
            >
              <option value="">-- Choisir --</option>
              {priorities.map((p,_) => (
                <option key={_} value={p.value}>{p.label}</option>
              ))}
            </select>
          </div>
          {/* Completion */}
          <div>
            <label className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Achèvement (%)</label>
            <input
              type="number"
              min={0}
              max={100}
              value={formData.completion ?? 0}
              onChange={(e) => setFormData({ ...formData, completion: Number(e.target.value) })}
              className={`w-full px-4 py-3 rounded-lg border ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"} focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
            />
          </div>
          {/* Technologies */}
          <div className="md:col-span-2">
            <label className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Technologies (séparées par des virgules)</label>
            <input
              type="text"
              value={formData.technologies.join(", ")}
              onChange={(e) => setFormData({ ...formData, technologies: e.target.value.split(',').map(t => t.trim()).filter(Boolean) })}
              className={`w-full px-4 py-3 rounded-lg border ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"} focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
            />
          </div> 
          {/* Categories */}
<Select
  isMulti
  name="categories"
  options={categories}
  value={categories.filter(option => (formData.categories || []).includes(option.value))}
  onChange={(selected) => {
    setFormData({
      ...formData,
      categories: selected.map(option => option.value),
    });
  }}
  className="basic-multi-select"
  classNamePrefix="select"
  placeholder="Sélectionner des catégories..."
/>
          {/* Team */}
          <div className="md:col-span-2">
            <label className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Équipe (emails, séparées par des virgules)</label>
            <input
              type="text"
              value={formData.team?.join(", ") || ""}
              onChange={(e) => setFormData({ ...formData, team: e.target.value.split(',').map(m => m.trim()).filter(Boolean) })}
              className={`w-full px-4 py-3 rounded-lg border ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"} focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
            />
          </div>
          {/* Repository */}
          <div>
            <label className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Repository</label>
            <input
              type="url"
              value={formData.repository || ""}
              onChange={(e) => setFormData({ ...formData, repository: e.target.value })}
              className={`w-full px-4 py-3 rounded-lg border ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"} focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
            />
          </div>
          {/* Video URL */}
          <div>
            <label className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Vidéo de démonstration</label>
            <input
              type="url"
              value={formData.videoUrl || ""}
              onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
              className={`w-full px-4 py-3 rounded-lg border ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"} focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
            />
          </div>
          {/* Featured */}
          <div className="flex items-center space-x-3 md:col-span-2">
            <input
              type="checkbox"
              checked={formData.isFeatured ?? false}
              onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
            />
            <span className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>Mettre en avant</span>
          </div>
        </div>

        {/* Cover image - Single image upload */}
        <div>
          <label
            className={`block text-sm font-medium mb-2 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Image de couverture
          </label>
          <MediaUpload
            images={imageFile ? [imageFile] : []}
            setImages={(files) => setImageFile(files[0] || null)}
            showVideo={false}
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onCancel}
            className={`px-6 py-3 rounded-lg font-medium ${
              theme === "dark"
                ? "text-gray-300 hover:text-white hover:bg-gray-700"
                : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            Annuler
          </button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 disabled:opacity-50"
          >
            {loading
              ? "Enregistrement..."
              : editingProject
              ? "Modifier"
              : "Créer"}
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
