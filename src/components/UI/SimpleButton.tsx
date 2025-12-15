import React from "react";

interface ButtonProps {
  content: string;
  icon?: React.ReactNode; 
  className?: string | undefined; 
  numbers?: number | null;
  onClick?: () => void;
  // Production practice: disabled prop add kar raha hoon
  disabled?: boolean; 
}

const SimpleButton: React.FC<ButtonProps> = ({
  content,
  icon,
  className = undefined,
  numbers,
  onClick,
  disabled = false, // Default to not disabled
}) => {
  
  const defaultClasses = "flex items-center justify-center gap-2 bg-[#5570F1] text-[20px] font-[Inter] font-normal px-4 py-[17px] rounded-xl text-white min-w-[180px]";
  
  // Agar className pass hai toh woh use hoga, warna default styling.
  const buttonClasses = className !== undefined ? className : defaultClasses;

  return (
    // 1. **FIXED**: 'relative' class add kiya gaya hai
    <button 
      onClick={onClick} 
      className={`relative ${buttonClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
    >
      {icon && <span>{icon}</span>}
      {content}
      
      {/* 2. FIXED: z-10 lagaya gaya hai for safety (optional) */}
      {numbers && numbers > 0 && (
        <span 
          className="bg-[#FFCC91] absolute top-0 right-0 lg:relative w-[15px] h-[15px] lg:w-5 lg:h-5 flex justify-center items-center rounded-full text-[#1C1D22] text-[8px] lg:text-[10px] z-1" 
          style={{lineHeight: "1em"}}
        >
          {numbers}
        </span>
      )}
    </button>
  );
};

export default SimpleButton;