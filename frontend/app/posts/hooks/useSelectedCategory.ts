import { useState, useCallback } from "react";
import {
  getSelectedCategory,
  setSelectedCategory as saveSelectedCategory,
} from "@/shared/storage/localStorage";

type UseSelectedCategoryReturn = {
  selectedCategoryId: string | null;
  selectCategory: (categoryId: string) => void;
};

export function useSelectedCategory(): UseSelectedCategoryReturn {
  // Use lazy initialization to read from localStorage on mount
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    () => getSelectedCategory()
  );

  const selectCategory = useCallback((categoryId: string) => {
    setSelectedCategoryId(categoryId);
    saveSelectedCategory(categoryId);
  }, []);

  return {
    selectedCategoryId,
    selectCategory,
  };
}
