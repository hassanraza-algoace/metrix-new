import React from "react";

interface ButtonProps {
  content: string;
  icon?: React.ReactNode;    // optional icon
  className?: string; // optional custom styling
  numbers?: number; 
}

const SimpleButton: React.FC<ButtonProps> = ({ content, icon, className, numbers }) => {
  // Conditional class: agar className pass hai to wahi use, nahi to default styling
  const buttonClasses = className
    ? className
    : "flex items-center justify-center gap-2 bg-[#5570F1] text-[20px] font-[Inter] font-normal px-4 py-[17px] rounded-xl text-white min-w-[180px]";

  return (
    <button className={buttonClasses}>
      {icon && <span>{icon}</span>} {/* Only render icon if exists */}
      {content}
      {numbers && <span className="bg-[#FFCC91] px-3.5 py-2 rounded-full text-[#1C1D22] text-[12px]">{numbers}</span>}
    </button>
  );
};

export default SimpleButton;
