// components/BackgroundWrapper.tsx
import React from "react";

const BackgroundWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Blurred Background Color */}
      <div className="absolute inset-0 z-0 backdrop-blur-md transition-all duration-500 bg-green-100/60 dark:bg-violet-900/60" />
      
      {/* Main Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundWrapper;
