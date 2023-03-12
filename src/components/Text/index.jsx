import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-[38px] md:text-[44px] text-[48px]",
  h2: "font-bold sm:text-[32px] md:text-[34px] text-[36px]",
  h3: "font-bold sm:text-[20px] md:text-[22px] text-[24px]",
  h4: "font-bold text-[20px]",
  h5: "font-bold text-[18px]",
  h6: "text-[16px]",
  body1: "text-[14px]",
  body2: "text-[12px]",
  body3: "font-semibold text-[10.38px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
