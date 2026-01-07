import React from "react";

type SubHeadingProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
};

const SubHeading: React.FC<SubHeadingProps> = ({
  as: Tag = "h6",
  children,
  className = "",
}) => {
  return <Tag className={`
        w-fit mx-auto px-[15px]
        text-[18px]
        text-center
        font-light
        tracking-[2px]
        uppercase
        text-[var(--foreground)]
        transition-colors
        duration-300
        ease-out
        border-b ${className}`}>{children}</Tag>;
};

export default SubHeading;
