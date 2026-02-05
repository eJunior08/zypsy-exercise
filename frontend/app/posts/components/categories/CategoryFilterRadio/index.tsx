import type { CategoryFilterMode } from "@/app/posts/types/category";
import { RadioButton } from "@/shared/components/RadioButton";

type CategoryFilterRadioProps = {
  filterMode: CategoryFilterMode;
  onFilterModeChange: (mode: CategoryFilterMode) => void;
};

export function CategoryFilterRadio({
  filterMode,
  onFilterModeChange,
}: CategoryFilterRadioProps) {
  return (
    <div className="flex flex-row gap-[16px]">
      <RadioButton
        label="All categories"
        name="category-filter"
        value="all"
        checked={filterMode === "all"}
        onChange={() => onFilterModeChange("all")}
      />
      <RadioButton
        label="Favorite categories"
        name="category-filter"
        value="favorites"
        checked={filterMode === "favorites"}
        onChange={() => onFilterModeChange("favorites")}
      />
    </div>
  );
}
