import type { Category } from "@/app/posts/types/category";
import { CategoryButton } from "@/app/posts/components/categories/CategoryButton";

type CategoryListProps = {
  categories: Category[];
  selectedCategoryId: string | null;
  onSelectCategory: (categoryId: string) => void;
  onToggleFavorite: (categoryId: string) => void;
};

export function CategoryList({
  categories,
  selectedCategoryId,
  onSelectCategory,
  onToggleFavorite,
}: CategoryListProps) {
  return (
    <div className="flex flex-col gap-[12px] items-start">
      {categories.map((category) => (
        <CategoryButton
          key={category.id}
          category={category}
          isSelected={selectedCategoryId === category.id}
          onSelect={onSelectCategory}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
