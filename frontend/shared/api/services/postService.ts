import { apiClient } from "@/shared/api/client";
import { ENDPOINTS } from "@/shared/api/endpoints";
import type { Post } from "@/app/posts/types/post";

export async function fetchPostsByCategory(categoryId: string): Promise<Post[]> {
  return apiClient<Post[]>(ENDPOINTS.CATEGORY_POSTS(categoryId));
}
