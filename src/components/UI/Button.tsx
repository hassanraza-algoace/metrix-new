interface ButtonProps {
  content: string;
}

const Button: React.FC<ButtonProps> = ({ content }) => {
  return (
    <button
      className="bg-[#5570F1] text-[20px] font-[Inter] font-normal px-4 py-[17px] rounded-xl text-white w-[180px]"
      onClick={(e) => e.preventDefault()}
    >
      {content}
    </button>
  );
};
export default Button;
