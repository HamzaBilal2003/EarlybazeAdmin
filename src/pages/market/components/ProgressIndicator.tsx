import React from "react";

interface ProgressIndicatorProps {
  progress: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ progress }) => {
  const getColor = () => {
    if (progress >= 65) return "text-green-400";
    if (progress >= 35) return "text-yellow-400";
    return "text-red-500";
  };

  return (
    <div className="relative flex items-center justify-center w-12 h-12">
      <svg className="absolute w-full h-full" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="16" fill="none" stroke="gray" strokeWidth="3" />
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray={`${progress}, 100`}
          className={getColor()}
        />
      </svg>
      <span className="absolute text-sm font-bold">{progress}%</span>
    </div>
  );
};

export default ProgressIndicator;