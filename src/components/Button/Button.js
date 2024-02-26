import { cn } from "@/lib/util";
import { cva } from "cva";

const buttonVariants = cva(
  "rounded-[5px] border-2 border-transparent transition-colors duration-100 ease-in-out",
  {
    variants: {
      variant: {
        primary:
          "text-white bg-color-primary hover:bg-white hover:text-color-primary hover:border-color-primary",
        secondary:
          "bg-[#F7F7F7] hover:bg-white hover:text-color-secondary hover:border-color-secondary hover:opacity-75 hover:border-opacity-75",
        accent:
          "text-white bg-color-accent hover:bg-white hover:text-color-accent hover:border-color-accent",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export default function Button({
  asLink,
  variant,
  className,
  children,
  ...props
}) {
  const Component = asLink ? "a" : "button";
  return (
    <Component
      className={cn(
        buttonVariants({ variant }),
        { "cursor-pointer": asLink },
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
