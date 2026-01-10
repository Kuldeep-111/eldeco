"use client";

import React from "react";

type CustomButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        text-[18px]
        font-light
        tracking-[2px]
        uppercase
        text-black
        transition-all
        duration-300
        ease-out
        border-b
        hover:text-[var(--foreground)]
        hover:px-[20px]
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default CustomButton;
