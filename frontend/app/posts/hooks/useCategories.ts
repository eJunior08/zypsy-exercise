import { useState, useEffect, useCallback } from "react";
import type { Category } from "@/app/posts/types/category";
import { fetchCategories, toggleCategoryFavorite } from "@/shared/api/services/categoryService";

type UseCategoriesReturn = {
  categories: Category[];
  loading: boolean;
  error: string | null;
  toggleFavorite: (categoryId: string) => Promise<void>;
  refetch: () => Promise<void>;
};

export function useCategories(): UseCategoriesReturn {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadCategories = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchCategories();
      setCategories(data);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to fetch categories";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  const toggleFavorite = useCallback(
    async (categoryId: string) => {
      const category = categories.find((c) => c.id === categoryId);
      if (!category) return;

      const newFavorite = !category.favorite;

      // Optimistic update
      setCategories((prev) =>
        prev.map((c) =>
          c.id === categoryId ? { ...c, favorite: newFavorite } : c
        )
      );

      try {
        await toggleCategoryFavorite(category, newFavorite);
      } catch (err) {
        // Revert on error
        setCategories((prev) =>
          prev.map((c) =>
            c.id === categoryId ? { ...c, favorite: !newFavorite } : c
          )
        );

        const message =
          err instanceof Error ? err.message : "Failed to update favorite";
        setError(message);
      }
    },
    [categories]
  );

  return {
    categories,
    loading,
    error,
    toggleFavorite,
    refetch: loadCategories,
  };
}
