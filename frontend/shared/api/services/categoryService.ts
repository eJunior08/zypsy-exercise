import { apiClient } from "@/shared/api/client";
import { ENDPOINTS } from "@/shared/api/endpoints";
import type { Category } from "@/app/posts/types/category";

export async function fetchCategories(): Promise<Category[]> {
  return apiClient<Category[]>(ENDPOINTS.CATEGORIES);
}

export async function toggleCategoryFavorite(
  category: Category,
  favorite: boolean
): Promise<Category> {
  return apiClient<Category>(ENDPOINTS.CATEGORY_BY_ID(category.id), {
    method: "PUT",
    body: JSON.stringify({
      id: category.id,
      name: category.name,
      favorite,
    }),
  });
}
