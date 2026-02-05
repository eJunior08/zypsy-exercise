import { Button } from "@/shared/components/Button";
import { Star } from "@/shared/icons/star";
import { StarFilled } from "@/shared/icons/star-filled";
import type { Category } from "@/app/posts/types/category";

type CategoryButtonProps = {
  category: Category;
  isSelected: boolean;
  onSelect: (categoryId: string) => void;
  onToggleFavorite: (categoryId: string) => void;
};

export function CategoryButton({
  category,
  isSelected,
  onSelect,
  onToggleFavorite,
}: CategoryButtonProps) {
  const variant = isSelected ? "secondary" : "primary";
  const iconColor = isSelected ? "#1A2E05" : "#E3E3E3";

  const IconComponent = category.favorite ? StarFilled : Star;

  const handleStarClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleFavorite(category.id);
  };

  return (
    <Button
      variant={variant}
      onClick={() => onSelect(category.id)}
      className="justify-between"
      icon={
        <span
          onClick={handleStarClick}
          className="flex items-center cursor-pointer"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleStarClick(e as unknown as React.MouseEvent);
            }
          }}
          aria-label={
            category.favorite ? "Remove from favorites" : "Add to favorites"
          }
        >
          <IconComponent color={iconColor} />
        </span>
      }
    >
      {category.name}
    </Button>
  );
}
