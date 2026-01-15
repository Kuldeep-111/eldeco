import React from "react";

type ExternalLinkgraphProps = {
  as?: React.ElementType;
  href: string;
  children: React.ReactNode;
  className?: string;
};

const ExternalLink: React.FC<ExternalLinkgraphProps> = ({href, children, className = "" }) => (
  <a href={href} target="_blank" rel="noopener noreferrer"  className={`external-link  transition-transform transition-all duration-300 ease-out ${className}`}>{children}</a>
);
export default ExternalLink;
