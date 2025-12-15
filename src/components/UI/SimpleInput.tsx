import type { IconType } from "react-icons";

interface InputProps {
  type: string;
  name: string;
  value: string;
  id: string;
  onChange: any;
  required: any;
  placeholder: string;
  Icon?: IconType;
}
const SimpleInput: React.FC<InputProps> = ({
  type,
  name,
  id,
  value,
  onChange,
  placeholder,
  required,
  Icon,
}) => {
  return (
    <div className="flex items-center gap-2.5 bg-[#EFF1F999] p-3.5 w-full rounded-lg">
      {Icon && <Icon className="text-[#6E7079] text-[20px]" />}

      <input
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        required={required}
        placeholder={placeholder}
        className="text-[16px] border-0 outline-0 font-[Inter] w-full"
      />
    </div>
  );
};

export default SimpleInput;
