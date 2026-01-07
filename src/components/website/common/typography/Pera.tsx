import React from "react";

type PeragraphProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
};

const Pera: React.FC<PeragraphProps> = ({ children, className = "" }) => (
  <p className={`pera ${className}`}>{children}</p>
);
export default Pera;
