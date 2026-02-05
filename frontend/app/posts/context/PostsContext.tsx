"use client";

import { createContext, useContext, ReactNode } from "react";
import type { Category } from "@/app/posts/types/category";

type PostsContextType = {
  categories: Category[];
  selectedCategoryId: string | null;
  toggleFavorite: (categoryId: string) => Promise<void>;
  selectCategory: (categoryId: string) => void;
};

const PostsContext = createContext<PostsContextType | undefined>(undefined);

export function usePostsContext() {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error("usePostsContext must be used within PostsProvider");
  }
  return context;
}

type PostsProviderProps = {
  children: ReactNode;
  value: PostsContextType;
};

export function PostsProvider({ children, value }: PostsProviderProps) {
  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
}
