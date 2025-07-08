import React, { useState } from 'react';
import { CreateHeroSectionDto, HeroButton } from './hero-section';
import MediaUpload from '../../../shared/components/MediaUpload';

interface HeroSectionFormProps {
  initialValues?: Partial<CreateHeroSectionDto>;
  onSubmit: (values: CreateHeroSectionDto, imageFiles?: File[]) => void;
  onCancel: () => void;
  loading?: boolean;
  theme: 'light' | 'dark';
}

const HeroSectionForm: React.FC<HeroSectionFormProps> = ({ initialValues = {}, onSubmit, onCancel, loading, theme }) => {
  const [form, setForm] = useState<CreateHeroSectionDto>({
    title: initialValues.title || '',
    description: initialValues.description || '',
    images: initialValues.images || [],
    buttons: initialValues.buttons || [],
  });
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [formError, setFormError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleButtonChange = (index: number, field: keyof HeroButton, value: string) => {
    const newButtons = [...(form.buttons || [])];
    newButtons[index] = { ...newButtons[index], [field]: value };
    setForm({ ...form, buttons: newButtons });
  };

  const handleAddButton = () => {
    if ((form.buttons?.length || 0) < 2) {
      setForm({ ...form, buttons: [...(form.buttons || []), { name: '', action: '' }] });
    }
  };

  const handleRemoveButton = (index: number) => {
    const newButtons = [...(form.buttons || [])];
    newButtons.splice(index, 1);
    setForm({ ...form, buttons: newButtons });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    if (!form.title || !form.description) {
      setFormError('Titre et description obligatoires');
      return;
    }
    onSubmit(form, imageFiles);
  };

  return (
    <form onSubmit={handleSubmit} className={`p-8 rounded-2xl w-full max-w-4xl mx-auto ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg space-y-6`}>
      <h1 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{initialValues.title ? 'Modifier la Hero Section' : 'Nouvelle Hero Section'}</h1>
      {formError && <div className="p-4 bg-red-100 text-red-700 rounded-lg">{formError}</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Titre *</label>
          <input
            type="text"
            name="title"
            required
            value={form.title}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border transition-colors ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
          />
        </div>
        <div>
          <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Description *</label>
          <textarea
            name="description"
            required
            value={form.description}
            onChange={handleChange}
            rows={3}
            className={`w-full px-4 py-3 rounded-lg border transition-colors ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
          />
        </div>
      </div>
      <div>
        <MediaUpload
          images={imageFiles}
          setImages={setImageFiles}
          existingImages={form.images}
          label="Images (max 5)"
        />
      </div>
      <div>
        <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Boutons (max 2)</label>
        <div className="space-y-4">
          {(form.buttons || []).map((btn, idx) => (
            <div key={idx} className="flex gap-2 items-center">
              <input
                type="text"
                placeholder="Nom du bouton"
                value={btn.name}
                onChange={e => handleButtonChange(idx, 'name', e.target.value)}
                className={`px-4 py-2 rounded-lg border transition-colors ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none`}
              />
              <input
                type="text"
                placeholder="Action (lien ou id)"
                value={btn.action}
                onChange={e => handleButtonChange(idx, 'action', e.target.value)}
                className={`px-4 py-2 rounded-lg border transition-colors ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none`}
              />
              <button type="button" onClick={() => handleRemoveButton(idx)} className="text-red-500 hover:text-red-700">Supprimer</button>
            </div>
          ))}
          {(form.buttons?.length || 0) < 2 && (
            <button type="button" onClick={handleAddButton} className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">Ajouter un bouton</button>
          )}
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className={`px-6 py-3 rounded-lg font-medium transition-colors ${theme === 'dark' ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`}
        >
          Annuler
        </button>
        <button
          type="submit"
          disabled={loading}
          className={`px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {loading ? 'Enregistrement...' : (initialValues.title ? 'Modifier' : 'Créer')}
        </button>
      </div>
    </form>
  );
};

export default HeroSectionForm; 