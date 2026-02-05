import { SidebarHeader } from "@/app/posts/components/layout/SidebarHeader";
import { CategoryFilterRadio } from "@/app/posts/components/categories/CategoryFilterRadio";
import { CategoryList } from "@/app/posts/components/categories/CategoryList";
import type { Category, CategoryFilterMode } from "@/app/posts/types/category";

type SidebarProps = {
  categories: Category[];
  selectedCategoryId: string | null;
  filterMode: CategoryFilterMode;
  onSelectCategory: (categoryId: string) => void;
  onFilterModeChange: (mode: CategoryFilterMode) => void;
  onToggleFavorite: (categoryId: string) => void;
};

export function Sidebar({
  categories,
  selectedCategoryId,
  filterMode,
  onSelectCategory,
  onFilterModeChange,
  onToggleFavorite,
}: SidebarProps) {
  return (
    <div className="flex flex-col h-full w-full bg-surface">
      <SidebarHeader />
      <div className="flex-1 overflow-y-auto py-[24px] px-[16px] flex flex-col gap-[48px]">
        <CategoryFilterRadio
          filterMode={filterMode}
          onFilterModeChange={onFilterModeChange}
        />
        <CategoryList
          categories={categories}
          selectedCategoryId={selectedCategoryId}
          onSelectCategory={onSelectCategory}
          onToggleFavorite={onToggleFavorite}
        />
      </div>
    </div>
  );
}
