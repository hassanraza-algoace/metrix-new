interface ButtonProps {
  content: string;
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
      className="bg-[#5570F1] text-[20px] font-[Inter] font-normal px-4 py-[17px] rounded-xl text-white w-[180px]"
      onClick={handleClick}
      type={type}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default FunButton;