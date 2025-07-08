import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Tag } from 'lucide-react';
import { useStore } from '../../../../stores/useStore';
import { categoryService, Category, CreateCategoryDto } from '../index';
import { ConfirmDialog } from '../../../../shared';
import CategoryForm from '../components/CategoryForm';
import CategoryCard from '../components/CategoryCard';
import CategoryFilters from '../components/CategoryFilters';
import BulkActions from '../components/BulkActions';
import Pagination from '../../../../components/admin/Pagination';

const CategoriesManagement: React.FC = () => {
  const { theme } = useStore();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [showForm, setShowForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<{ id: string; isBulk: boolean } | null>(null);

  const [formData, setFormData] = useState<CreateCategoryDto>({
    name: '',
    description: ''
  });

  // Charger les catégories
  const loadCategories = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await categoryService.getCategories();
      setCategories(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors du chargement');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  // Filtrer les catégories
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (category.description && category.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Pagination
  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCategories = filteredCategories.slice(startIndex, startIndex + itemsPerPage);

  // Gestion des actions
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editingCategory) {
        await categoryService.updateCategory(editingCategory._id, formData);
      } else {
        await categoryService.createCategory(formData);
      }
      setShowForm(false);
      setEditingCategory(null);
      setFormData({
        name: '',
        description: ''
      });
      loadCategories();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors de la sauvegarde');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (category: Category) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      description: category.description || ''
    });
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    setDeleteTarget({ id, isBulk: false });
    setShowDeleteConfirm(true);
  };

  const handleBulkDelete = () => {
    setDeleteTarget({ id: '', isBulk: true });
    setShowDeleteConfirm(true);
  };

  const confirmDelete = async () => {
    if (!deleteTarget) return;
    
    try {
      if (deleteTarget.isBulk) {
        await Promise.all(selectedCategories.map(id => categoryService.deleteCategory(id)));
        setSelectedCategories([]);
      } else {
        await categoryService.deleteCategory(deleteTarget.id);
      }
      loadCategories();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors de la suppression');
    } finally {
      setShowDeleteConfirm(false);
      setDeleteTarget(null);
    }
  };

  const handleSelectCategory = (id: string) => {
    setSelectedCategories(prev => {
      const newSelection = prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id];
      return newSelection;
    });
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingCategory(null);
    setFormData({
      name: '',
      description: ''
    });
  };

  // Afficher le formulaire si nécessaire
  if (showForm) {
    return (
      <CategoryForm
        editingCategory={editingCategory}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        onCancel={handleCancelForm}
        loading={loading}
      />
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Gestion des Catégories
          </h1>
          <p className={`mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Gérez les catégories de votre plateforme
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowForm(true)}
          className="flex items-center space-x-2 px-6 py-3 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600 transition-colors shadow-lg"
        >
          <Plus className="h-5 w-5" />
          <span>Nouvelle Catégorie</span>
        </motion.button>
      </div>

      {/* Error Display */}
      {error && (
        <div className={`p-4 rounded-lg ${
          theme === 'dark' ? 'bg-red-900/20 border-red-800' : 'bg-red-50 border-red-200'
        } border`}>
          <p className={`text-sm ${theme === 'dark' ? 'text-red-300' : 'text-red-700'}`}>
            {error}
          </p>
        </div>
      )}

      {/* Bulk Actions */}
      <BulkActions
        selectedCount={selectedCategories.length}
        onDeselectAll={() => setSelectedCategories([])}
        onBulkDelete={handleBulkDelete}
      />

      {/* Filters */}
      <CategoryFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      {/* Categories Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {paginatedCategories.map((category, index) => (
          <CategoryCard
            key={category._id}
            category={category}
            isSelected={selectedCategories.includes(category._id)}
            onSelect={handleSelectCategory}
            onEdit={handleEdit}
            onDelete={handleDelete}
            index={index}
          />
        ))}
      </div>

      {/* Empty State */}
      {!loading && paginatedCategories.length === 0 && (
        <div className={`text-center py-12 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          <Tag className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <h3 className="text-lg font-medium mb-2">Aucune catégorie trouvée</h3>
          <p>Commencez par créer votre première catégorie</p>
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className={`text-center py-12 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          <div className="animate-spin h-8 w-8 mx-auto mb-4 border-2 border-orange-500 border-t-transparent rounded-full" />
          <p>Chargement des catégories...</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className={`rounded-2xl overflow-hidden shadow-lg ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            itemsPerPage={itemsPerPage}
            totalItems={filteredCategories.length}
            showItemsPerPage={true}
            onItemsPerPageChange={setItemsPerPage}
          />
        </div>
      )}

      {/* Confirmation Dialog */}
      <ConfirmDialog
        isOpen={showDeleteConfirm}
        title={deleteTarget?.isBulk ? 'Supprimer les catégories' : 'Supprimer la catégorie'}
        message={
          deleteTarget?.isBulk 
            ? `Êtes-vous sûr de vouloir supprimer ${selectedCategories.length} catégorie(s) ?`
            : 'Êtes-vous sûr de vouloir supprimer cette catégorie ?'
        }
        confirmText="Supprimer"
        cancelText="Annuler"
        type="danger"
        onConfirm={confirmDelete}
        onCancel={() => {
          setShowDeleteConfirm(false);
          setDeleteTarget(null);
        }}
      />
    </div>
  );
};

export default CategoriesManagement;