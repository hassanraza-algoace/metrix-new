interface ButtonProps {
  content: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  // 👆 optional, "button" | "submit" | "reset"
}

const Button: React.FC<ButtonProps> = ({ content, type = "button"}) => {
  return (
    <button
      className="bg-[#5570F1] text-[20px] font-[Inter] font-normal px-4 py-[17px] rounded-xl text-white w-[180px]"
      onClick={(e) => {
        e.preventDefault() 
      }}
      type={type}
      // 👈 proper type
    >
      {content}
    </button>
  );
};

export default Button;