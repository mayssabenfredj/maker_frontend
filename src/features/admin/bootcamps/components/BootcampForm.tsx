import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RichTextEditor from "../../../../shared/components/RichTextEditor";
import MediaUpload from "../../../../shared/components/MediaUpload";

import BootcampFields from "./BootcampFields";

import { productService } from "../../products";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { uploadFile } from "../../../../shared/uploadService";
type EventType = "workshop" | "bootcamp" | "event" | "course";

interface BaseFormProps {
  theme: "light" | "dark";
  loading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  imageFiles: File[];
  setImageFiles: (files: File[]) => void;
  editingEvent?: any;
}

const EventForm: React.FC<BaseFormProps> = ({
  theme,
  loading,
  onSubmit,
  onCancel,
  imageFiles,
  setImageFiles,
  editingEvent,
}) => {
  const [eventType, setEventType] = useState<EventType>(
    editingEvent?.type || "bootcamp"
  );
  const [products, setProducts] = useState<any[]>([]);
  const [formData, setFormData] = useState<Partial<any>>({
    ...editingEvent,
    modules: [{ title: "", items: [] }],
    instructor: {
      photoUrl:
        "https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg",
      name: "",
      title: "",
      experienceYears: 0,
      studentsCount: 0,
    },
    type: editingEvent?.type || "bootcamp",
  });

  const handleTypeChange = (type: EventType) => {
    setEventType(type);
    setFormData({ ...formData, type });
  };

  const handleCommonFieldChange = (field: keyof any, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const fetchProducts = async () => {
    try {
      let response = await productService.getProducts();
      setProducts(response);
    } catch (error) {
      console.log("error fetching products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const navigate = useNavigate();
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Final formData:", formData);

    let responseImage = await uploadFile(
      import.meta.env.VITE_API_URL + "/upload",
      imageFiles[0],
      "file",
      { path: "events" }
    );
    formData.coverImage = responseImage.data.path;

    let response = await axios.post(
      import.meta.env.VITE_API_URL + "/events",
      formData
    );
    if (response?.status == 201) {
      onCancel();
    }
    onSubmit(e); // optional if you still want to notify parent
  };

  return (
    <div className="space-y-8">
      {/* ... (même en-tête que précédemment) ... */}
      <form onSubmit={handleFormSubmit}>
        <div
          className={`p-8 rounded-2xl ${
            theme === "dark" ? "bg-gray-800" : "bg-white"
          } shadow-lg space-y-6`}
        >
          {/* Sélection du type d'événement */}
          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Type d'événement *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {(["bootcamp", "workshop", "event", "course"] as EventType[]).map(
                (type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handleTypeChange(type)}
                    className={`px-4 py-3 rounded-lg border transition-colors ${
                      eventType === type
                        ? "bg-orange-500 text-white border-orange-500"
                        : theme === "dark"
                        ? "bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
                        : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {type === "bootcamp" && "Bootcamp"}
                    {type === "workshop" && "Atelier"}
                    {type === "event" && "Événement"}
                    {type === "course" && "Cours"}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Champs spécifiques au type */}
          <BootcampFields
            products={products}
            formData={formData}
            setFormData={setFormData}
            theme={theme}
          />

          {/* Description (commune) */}
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
                handleCommonFieldChange("description", value)
              }
              placeholder="Décrivez votre événement..."
              className="w-full"
            />
          </div>

          {/* Media Upload */}
          <MediaUpload
            images={imageFiles}
            setImages={setImageFiles}
            existingImages={editingEvent?.galleryImages || []}
            onRemoveExistingImage={(index) => {
              const newImages = [...(formData.galleryImages || [])];
              newImages.splice(index, 1);
              handleCommonFieldChange("galleryImages", newImages);
            }}
            label="Images de l'événement"
          />

          {/* Boutons de soumission */}
          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={onCancel}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                theme === "dark"
                  ? "text-gray-300 hover:text-white hover:bg-gray-700"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              Annuler
            </button>
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {loading
                ? "Enregistrement..."
                : editingEvent
                ? "Modifier"
                : "Créer"}
            </motion.button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
