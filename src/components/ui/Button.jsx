import React from "react";

const Button = ({ variant, children = "Press me", ...rest }) => {
  // variants: solid, outline, ghost
  let className;
  if (variant === "solid") {
    className = "bg-gray-900 text-white py-2 px-4 rounded-md";
  } else if (variant === "outline") {
    className =
      "bg-white border border-#E2E8F0  text-gray-900 py-2 px-4 box-border rounded-md";
  } else if (variant === "ghost") {
    className = "bg-white text-gray-900 py-2 px-4 rounded-md";
  } else if (variant === "long") {
    className =
      "bg-blue-600 text-center text-white w-[95%] p-2 rounded-md mx-auto";
  } else {
    className = "bg-gray-900 text-white py-2 px-4";
  }
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
