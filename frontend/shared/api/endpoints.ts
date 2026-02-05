export const ENDPOINTS = {
  CATEGORIES: "/categories",
  CATEGORY_BY_ID: (id: string) => `/categories/${id}`,
  CATEGORY_POSTS: (id: string) => `/categories/${id}/posts`,
} as const;
