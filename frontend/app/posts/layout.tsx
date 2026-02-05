"use client";

import { useState, useEffect, ReactNode } from "react";
import { Sidebar } from "@/app/posts/components/layout/Sidebar";
import { MobileMenu } from "@/app/posts/components/layout/MobileMenu";
import { useCategories } from "@/app/posts/hooks/useCategories";
import { useCategoryFilter } from "@/app/posts/hooks/useCategoryFilter";
import { useSelectedCategory } from "@/app/posts/hooks/useSelectedCategory";
import { PostsProvider } from "@/app/posts/context/PostsContext";

type PostsLayoutProps = {
  children: ReactNode;
};

export default function PostsLayout({ children }: PostsLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { categories, loading: categoriesLoading, toggleFavorite } = useCategories();
  const { filterMode, setFilterMode, filteredCategories } = useCategoryFilter(categories);
  const { selectedCategoryId, selectCategory } = useSelectedCategory();

  // Auto-select first category if none selected
  useEffect(() => {
    if (!selectedCategoryId && filteredCategories.length > 0) {
      selectCategory(filteredCategories[0].id);
    }
  }, [selectedCategoryId, filteredCategories, selectCategory]);

  if (categoriesLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-foreground">Loading categories...</div>
      </div>
    );
  }

  return (
    <PostsProvider
      value={{
        categories,
        selectedCategoryId,
        toggleFavorite,
        selectCategory,
      }}
    >
      <div className="flex h-screen overflow-hidden">
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          categories={filteredCategories}
          selectedCategoryId={selectedCategoryId}
          filterMode={filterMode}
          onSelectCategory={selectCategory}
          onFilterModeChange={setFilterMode}
          onToggleFavorite={toggleFavorite}
        />

        <aside className="hidden md:flex md:flex-col md:w-[320px] md:border-r md:border-accent">
          <Sidebar
            categories={filteredCategories}
            selectedCategoryId={selectedCategoryId}
            filterMode={filterMode}
            onSelectCategory={selectCategory}
            onFilterModeChange={setFilterMode}
            onToggleFavorite={toggleFavorite}
          />
        </aside>

        <main className="flex-1 overflow-y-auto">
          <div className="py-[32px] px-[16px] md:py-[64px] md:px-[24px]">
            {children}
          </div>
        </main>
      </div>
    </PostsProvider>
  );
}
