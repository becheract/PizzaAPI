import React from "react";

interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
}

export const Button = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
) => {
  let colorClasses = "bg-MainRed hover:bg-SecondRed text-white";

  if (props.secondary) {
    colorClasses = "bg-gray-500 hover:bg-gray-600 text-white";
  } else if (props.primary) {
    colorClasses = colorClasses;
  }

  return (
    <button
      {...props}
      className={`${colorClasses} mt-5 py-4 px-4 rounded text-xs w-36 h-12 md:w-44 ${props.className}`}
    >
      {props.children}

    </button>
  );
};
