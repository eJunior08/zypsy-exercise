import { Hamburger } from "@/shared/icons";
import { Sidebar } from "@/app/posts/components/layout/Sidebar";
import type { Category, CategoryFilterMode } from "@/app/posts/types/category";

type MobileMenuProps = {
  isOpen: boolean;
  onToggle: () => void;
  categories: Category[];
  selectedCategoryId: string | null;
  filterMode: CategoryFilterMode;
  onSelectCategory: (categoryId: string) => void;
  onFilterModeChange: (mode: CategoryFilterMode) => void;
  onToggleFavorite: (categoryId: string) => void;
};

export function MobileMenu({
  isOpen,
  onToggle,
  categories,
  selectedCategoryId,
  filterMode,
  onSelectCategory,
  onFilterModeChange,
  onToggleFavorite,
}: MobileMenuProps) {
  const handleSelectCategory = (categoryId: string) => {
    onSelectCategory(categoryId);
    onToggle(); // Close menu after selection
  };

  return (
    <>
      <button
        onClick={onToggle}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-primary rounded"
        aria-label="Toggle menu"
      >
        <Hamburger color="#E3E3E3" />
      </button>

      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onToggle}
        />
      )}

      <div
        className={`md:hidden fixed left-0 top-0 h-full w-[280px] bg-surface transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar
          categories={categories}
          selectedCategoryId={selectedCategoryId}
          filterMode={filterMode}
          onSelectCategory={handleSelectCategory}
          onFilterModeChange={onFilterModeChange}
          onToggleFavorite={onToggleFavorite}
        />
      </div>
    </>
  );
}
