import { useState, useMemo } from "react";
import type { Category, CategoryFilterMode } from "@/app/posts/types/category";

type UseCategoryFilterReturn = {
  filterMode: CategoryFilterMode;
  setFilterMode: (mode: CategoryFilterMode) => void;
  filteredCategories: Category[];
};

export function useCategoryFilter(
  categories: Category[]
): UseCategoryFilterReturn {
  const [filterMode, setFilterMode] = useState<CategoryFilterMode>("all");

  const filteredCategories = useMemo(() => {
    if (filterMode === "favorites") {
      return categories.filter((category) => category.favorite);
    }
    return categories;
  }, [categories, filterMode]);

  return {
    filterMode,
    setFilterMode,
    filteredCategories,
  };
}
