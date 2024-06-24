import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

const Progress = React.forwardRef(
  (
    {
      className,
      value,
      orientation = "horizontal",
      fillColor = "bg-primary",
      ...props
    },
    ref
  ) => {
    const isVertical = orientation === "vertical";
    const progressValue = value || 0;

    return (
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative",
          isVertical ? "h-full w-4" : "h-2 w-full",
          "overflow-hidden rounded-full bg-gray-400",
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={cn(
            "h-full absolute",
            fillColor,
            isVertical ? "" : "transition-all"
          )}
          style={
            isVertical
              ? {
                  height: `${progressValue}%`,
                  width: "100%",
                  bottom: 0,
                  top: "auto",
                }
              : {
                  width: `${progressValue}%`,
                  transform: `translateX(-${100 - progressValue}%)`,
                }
          }
        />
      </ProgressPrimitive.Root>
    );
  }
);

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
