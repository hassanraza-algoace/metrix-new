import React from "react";

interface ButtonProps {
  content: string;
  icon?: React.ReactNode; // optional icon
  className?: string | undefined; // optional custom styling
  numbers?: number | null;
  onClick?: () => void;
}

const SimpleButton: React.FC<ButtonProps> = ({
  content,
  icon,
  className =undefined,
  numbers,
  onClick,
}) => {
  // Conditional class: agar className pass hai to wahi use, nahi to default styling

// const buttonClasses = `flex items-center justify-center gap-2 bg-[#5570F1] text-[20px] font-[Inter] font-normal px-4 py-[17px] rounded-xl text-white lg:min-w-[180px] ${className ?? ""}`;


  const buttonClasses = className !== undefined
    ? className
    : "flex items-center justify-center gap-2 bg-[#5570F1] text-[20px] font-[Inter] font-normal px-4 py-[17px] rounded-xl text-white min-w-[180px]";
  return (
    <button onClick={onClick} className={`${buttonClasses}`}>
      {icon && <span>{icon}</span>} {/* Only render icon if exists */}
      {content}
      {numbers && numbers > 0 && (
        <span className="bg-[#FFCC91] absolute top-0 right-0 lg:relative w-[15px] h-[15px] lg:w-5 lg:h-5 flex justify-center items-center rounded-full text-[#1C1D22] text-[8px] lg:text-[10px]" style={{lineHeight: "1em"}}>
          {numbers}
        </span>
      )}
    </button>
  );
};

export default SimpleButton;
