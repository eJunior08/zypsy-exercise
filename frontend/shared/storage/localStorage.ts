const SELECTED_CATEGORY_KEY = "selectedCategoryId";

export const localStorageKeys = {
  SELECTED_CATEGORY: SELECTED_CATEGORY_KEY,
} as const;

export function getSelectedCategory(): string | null {
  if (typeof window === "undefined") return null;

  try {
    return localStorage.getItem(SELECTED_CATEGORY_KEY);
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return null;
  }
}

export function setSelectedCategory(categoryId: string): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(SELECTED_CATEGORY_KEY, categoryId);
  } catch (error) {
    console.error("Error writing to localStorage:", error);
  }
}

export function clearSelectedCategory(): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.removeItem(SELECTED_CATEGORY_KEY);
  } catch (error) {
    console.error("Error clearing localStorage:", error);
  }
}
