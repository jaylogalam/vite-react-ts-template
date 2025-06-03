import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@utils/tailwindMerge";

type TextProps = React.HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof textVariants>;

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(textVariants({ variant, className }))}
      {...props}
    />
  )
);
Text.displayName = "Text";

export default Text;

const textVariants = cva("font-sans", {
  variants: {
    variant: {
      title: "text-3xl font-bold",
      subtitle: "text-xl text-gray-700",
      body: "text-base text-gray-900",
      caption: "text-sm text-gray-500",
      highlight: "text-base text-red-500 font-semibold",
    },
  },
});
