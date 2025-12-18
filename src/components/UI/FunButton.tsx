import { ReactNode } from "react";

interface ButtonProps {
  content: ReactNode;
  disabled: any;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  // 👆 onClick prop add kiya
}

const FunButton: React.FC<ButtonProps> = ({ 
  content, 
  disabled, 
  type = "button",
  onClick 
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Agar type "submit" nahi hai, tabhi preventDefault karo
    if (type !== "submit") {
      e.preventDefault();
    }
    
    // Agar onClick prop pass kiya gaya hai, to use call karo
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      className="bg-[#5570F1] text-[18px] font-[Inter] font-normal px-14 py-1.5 rounded-xl text-white"
      onClick={handleClick}
      type={type}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default FunButton;