import * as React from "react";

const CircularProgress = React.forwardRef(
  ({ className, value, color = "currentColor", ...props }, ref) => {
    // Formatting the value to ensure it has at most 2 digits and up to 2 decimal places
    const formattedValue = parseFloat(value).toFixed(2);

    const strokeWidth = 8;
    const center = 50;
    const radius = center - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (formattedValue / 100) * circumference;

    return (
      <div className="relative flex items-center justify-center w-32 h-32">
        <svg
          className="absolute w-full h-full transform -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            className="text-gray-200"
            strokeWidth={strokeWidth}
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={center}
            cy={center}
          />
          <circle
            className="transition-all"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            stroke={color}
            fill="transparent"
            r={radius}
            cx={center}
            cy={center}
            style={{ transition: "stroke-dashoffset 0.35s" }}
          />
        </svg>
        <div className="absolute flex items-center justify-center w-24 h-24 bg-white rounded-full z-10">
          <div className="text-center">
            <span className="block text-gray-400 text-xs font-semibold tracking-wide">
              Progress
            </span>
            <span className="block text-2xl font-bold">{formattedValue}%</span>
          </div>
        </div>
      </div>
    );
  }
);

CircularProgress.displayName = "CircularProgress";

export { CircularProgress };
