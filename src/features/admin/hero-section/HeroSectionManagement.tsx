import React, { useEffect, useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { useStore } from '../../../stores/useStore';
import HeroSectionService from './hero-section.service';
import { HeroSection, CreateHeroSectionDto } from './hero-section';
import HeroSectionForm from './HeroSectionForm';
import ConfirmDialog from '../../../shared/components/ConfirmDialog';
import { getImageUrl } from '../../../shared/utils/imageUtils';

const HeroSectionManagement: React.FC = () => {
  const { theme } = useStore();
  const [sections, setSections] = useState<HeroSection[]>([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingSection, setEditingSection] = useState<HeroSection | null>(null);
  const [formLoading, setFormLoading] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [sectionToDelete, setSectionToDelete] = useState<HeroSection | null>(null);

  const fetchSections = async () => {
    setLoading(true);
    try {
      const data = await HeroSectionService.getAll();
      setSections(Array.isArray(data) ? data : []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSections();
  }, []);

  const handleAdd = () => {
    setEditingSection(null);
    setShowForm(true);
  };

  const handleEdit = (section: HeroSection) => {
    setEditingSection(section);
    setShowForm(true);
  };

  const handleDelete = (section: HeroSection) => {
    setSectionToDelete(section);
    setConfirmOpen(true);
  };

  const confirmDelete = async () => {
    if (!sectionToDelete) return;
    setLoading(true);
    try {
      await HeroSectionService.delete(sectionToDelete._id);
      setSections(sections.filter(s => s._id !== sectionToDelete._id));
    } finally {
      setLoading(false);
      setConfirmOpen(false);
      setSectionToDelete(null);
    }
  };

  const handleFormSubmit = async (values: CreateHeroSectionDto, imageFiles?: File[]) => {
    setFormLoading(true);
    try {
      if (editingSection) {
        const updated = await HeroSectionService.update(editingSection._id, values, imageFiles);
        setSections(sections.map(s => (s._id === updated._id ? updated : s)));
      } else {
        const created = await HeroSectionService.create(values, imageFiles);
        setSections([created, ...sections]);
      }
      setShowForm(false);
      setEditingSection(null);
    } finally {
      setFormLoading(false);
    }
  };

  if (showForm) {
    return (
      <HeroSectionForm
        initialValues={editingSection ? {
          title: editingSection.title,
          description: editingSection.description,
          images: editingSection.images,
          buttons: editingSection.buttons,
        } : undefined}
        onSubmit={handleFormSubmit}
        onCancel={() => setShowForm(false)}
        loading={formLoading}
        theme={theme}
      />
    );
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Gestion Hero Section</h1>
          <button
            onClick={handleAdd}
            className="flex items-center space-x-2 px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
          >
            <Plus className="h-5 w-5" />
            <span>Nouvelle Hero Section</span>
          </button>
        </div>
        {loading ? (
          <div className="text-center py-12 text-lg text-gray-500">Chargement...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map(section => (
              <div key={section._id} className={`p-6 rounded-2xl shadow-lg flex flex-col ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="flex gap-4 mb-4 overflow-x-auto">
                  {section.images && section.images.map((img, i) => (
                    <img key={i} src={getImageUrl(img)} alt="" className="h-24 w-auto object-contain rounded-xl shadow" />
                  ))}
                </div>
                <h2 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{section.title}</h2>
                <div className={`mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{section.description}</div>
                {section.buttons && section.buttons.length > 0 && (
                  <div className="flex gap-2 mb-2">
                    {section.buttons.map((btn, idx) => (
                      <span key={idx} className="px-3 py-1 rounded bg-orange-100 text-orange-700 text-xs font-medium">{btn.name} → {btn.action}</span>
                    ))}
                  </div>
                )}
                <div className="flex gap-2 mt-auto">
                  <button
                    onClick={() => handleEdit(section)}
                    className={`p-2 rounded-lg transition-colors ${theme === 'dark' ? 'text-gray-400 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
                  >
                    <Edit className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(section)}
                    className={`p-2 rounded-lg transition-colors ${theme === 'dark' ? 'text-gray-400 hover:text-red-400 hover:bg-gray-700' : 'text-gray-600 hover:text-red-600 hover:bg-gray-100'}`}
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <ConfirmDialog
          isOpen={confirmOpen}
          title="Supprimer la Hero Section ?"
          message="Cette action est irréversible. Voulez-vous vraiment supprimer cette section ?"
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

export default HeroSectionManagement; 