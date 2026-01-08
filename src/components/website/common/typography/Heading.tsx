import React from "react";

type HeadingProps<T extends React.ElementType = "h2"> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<T>;

const Heading = <T extends React.ElementType = "h2">({
  as,
  children,
  className = "",
  ...rest
}: HeadingProps<T>) => {
  const Tag = as || "h2";

  return (
    <Tag
      {...rest} // 🔥 THIS is the key
      className={`font-cormorant text-center text-[28px] md:text-[32px] leading-[38px] md:leading-[50px] font-light tracking-[1px] capitalize text-black ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Heading;
