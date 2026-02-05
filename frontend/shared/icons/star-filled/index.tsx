import type { IconComponent } from "@/shared/icons/types/icon";

export const StarFilled: IconComponent = ({
  color = "#E3E3E3",
  width = 20,
  height = 20,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2.41333L12.4458 7.4075L17.9167 8.21333L13.9583 12.0983L14.8925 17.5867L10 14.9942L5.1075 17.5867L6.04167 12.0983L2.08333 8.21333L7.55333 7.4075L10 2.41333Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
