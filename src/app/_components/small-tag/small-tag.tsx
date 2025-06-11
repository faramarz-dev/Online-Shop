import React from "react";
import { SmallTagProps } from "./small-tag.types";

const SmallTag: React.FC<SmallTagProps> = ({ tag_type, children }) => {
  const tagClasses: Record<string, string> = {
    success: "bg-green-700",
    danger: "bg-red-600",
    warning: "bg-yellow-500",
    custome: "bg-purple-600",
  };

  const defaultText: Record<string, string> = {
    success: "New",
    danger: "Hot",
    warning: "",
  };

  return (
    <span
      className={`label w-fit rounded-2xl px-3 py-1 text-sm text-white absolute ${
        tagClasses[tag_type] || "bg-gray-500"
      }`}
    >
      {children || defaultText[tag_type]}
    </span>
  );
};

export default SmallTag;
