import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreateBootcampDto, Bootcamp } from '../types/bootcamp';
import { useSelections } from '../hooks/useSelections';
import RichTextEditor from '../../../../shared/components/RichTextEditor';
import MediaUpload from '../../../../shared/components/MediaUpload';

interface BootcampFormProps {
  theme: 'light' | 'dark';
  editingBootcamp: Bootcamp | null;
  loading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  formData: CreateBootcampDto;
  setFormData: (data: CreateBootcampDto) => void;
  imageFiles: File[];
  setImageFiles: (files: File[]) => void;
}

const BootcampForm: React.FC<BootcampFormProps> = ({
  theme,
  editingBootcamp,
  loading,
  onSubmit,
  onCancel,
  formData,
  setFormData,
  imageFiles,
  setImageFiles
}) => {
  const { getCategoriesForForms, getProductsForForms } = useSelections();

  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProducts = Array.from(e.target.selectedOptions, option => option.value);
    setFormData({ ...formData, products: selectedProducts });
  };

  const handleRemoveExistingImage = (index: number) => {
    // Pour l'instant, on ne gère pas la suppression des images existantes côté frontend
    // Cela devrait être géré côté backend lors de la mise à jour
    console.log('Suppression image existante:', index);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {editingBootcamp ? 'Modifier le Bootcamp' : 'Nouveau Bootcamp'}
          </h1>
        </div>
        <button
          type="button"
          onClick={onCancel}
          className={`p-2 rounded-lg transition-colors ${
            theme === 'dark'
              ? 'text-gray-400 hover:text-white hover:bg-gray-700'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
          }`}
        >
          ✕
        </button>
      </div>

      <form onSubmit={onSubmit} className={`p-8 rounded-2xl ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
      } shadow-lg space-y-6`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={`block text-sm font-medium mb-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Nom du bootcamp *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                theme === 'dark'
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Catégorie *
            </label>
            <select
              required
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                theme === 'dark'
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
            >
              <option value="">Sélectionner une catégorie</option>
              {getCategoriesForForms().map(cat => (
                <option key={cat.id} value={cat.id}>{cat.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Prix (DT) *
            </label>
            <input
              type="text"
              required
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                theme === 'dark'
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Animateur *
            </label>
            <input
              type="text"
              required
              value={formData.animator}
              onChange={(e) => setFormData({ ...formData, animator: e.target.value })}
              className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                theme === 'dark'
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Date de début *
            </label>
            <input
              type="date"
              required
              value={formData.dateDebut}
              onChange={(e) => setFormData({ ...formData, dateDebut: e.target.value })}
              className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                theme === 'dark'
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Date de fin *
            </label>
            <input
              type="date"
              required
              value={formData.dateFin}
              onChange={(e) => setFormData({ ...formData, dateFin: e.target.value })}
              className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                theme === 'dark'
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Localisation *
            </label>
            <input
              type="text"
              required
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                theme === 'dark'
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Période
            </label>
            <input
              type="text"
              value={formData.periode}
              onChange={(e) => setFormData({ ...formData, periode: e.target.value })}
              className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                theme === 'dark'
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
            />
          </div>
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Types *
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {['Intensif', 'Part-time', 'En ligne', 'Hybride', 'Certification', 'Diplôme', 'kids'].map((type) => (
              <label key={type} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.types.includes(type)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData({ ...formData, types: [...formData.types, type] });
                    } else {
                      setFormData({ ...formData, types: formData.types.filter(t => t !== type) });
                    }
                  }}
                  className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500"
                />
                <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {type}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Produits associés
          </label>
          <select
            multiple
            value={formData.products}
            onChange={handleProductChange}
            className={`w-full px-4 py-3 rounded-lg border transition-colors ${
              theme === 'dark'
                ? 'bg-gray-700 border-gray-600 text-white'
                : 'bg-white border-gray-300 text-gray-900'
            } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
          >
            {getProductsForForms().map(product => (
              <option key={product.id} value={product.id}>
                {product.label}
              </option>
            ))}
          </select>
          <p className={`text-xs mt-1 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Maintenez Ctrl (ou Cmd sur Mac) pour sélectionner plusieurs produits
          </p>
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Description
          </label>
          <RichTextEditor
            value={formData.description || ''}
            onChange={(value) => setFormData({ ...formData, description: value })}
            placeholder="Décrivez votre bootcamp..."
                      className="w-full"
          />
        </div>

        {/* Media Upload Component */}
        <MediaUpload
          images={imageFiles}
          setImages={setImageFiles}
          existingImages={editingBootcamp?.images || []}
          onRemoveExistingImage={handleRemoveExistingImage}
          label="Images du bootcamp"
        />

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onCancel}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              theme === 'dark'
                ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
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
            {loading ? 'Enregistrement...' : (editingBootcamp ? 'Modifier' : 'Créer')}
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default BootcampForm; 