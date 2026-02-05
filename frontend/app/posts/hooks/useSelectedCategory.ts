import { useState, useEffect, useCallback } from "react";
import {
  getSelectedCategory,
  setSelectedCategory as saveSelectedCategory,
} from "@/shared/storage/localStorage";

type UseSelectedCategoryReturn = {
  selectedCategoryId: string | null;
  selectCategory: (categoryId: string) => void;
};

export function useSelectedCategory(): UseSelectedCategoryReturn {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );

  useEffect(() => {
    const savedId = getSelectedCategory();
    if (savedId) {
      setSelectedCategoryId(savedId);
    }
  }, []);

  const selectCategory = useCallback((categoryId: string) => {
    setSelectedCategoryId(categoryId);
    saveSelectedCategory(categoryId);
  }, []);

  return {
    selectedCategoryId,
    selectCategory,
  };
}
