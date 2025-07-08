import { useState, useEffect } from "react";
import { categoryService } from "../services/category.service";
import { Category } from "../types/category";

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadCategories = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await categoryService.getCategories();
      setCategories(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Erreur lors du chargement des catégories"
      );
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  // Transformer les catégories pour les composants
  const getCategoriesForComponents = () => {
    return [
      { id: "all", label: "Tous" },
      ...categories.map((cat) => ({
        id: cat._id,
        label: cat.name,
      })),
    ];
  };

  // Transformer les catégories pour les formulaires (sans "Tous")
  const getCategoriesForForms = () => {
    return categories.map((cat) => ({
      id: cat._id,
      label: cat.name,
    }));
  };

  return {
    categories,
    loading,
    error,
    loadCategories,
    getCategoriesForComponents,
    getCategoriesForForms,
  };
};
