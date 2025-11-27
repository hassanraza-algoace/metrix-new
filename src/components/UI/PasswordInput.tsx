import { useState } from "react";
import type { IconType } from "react-icons";
import { IoIosEye } from "react-icons/io";

interface PasswordInputProps {
  type: string;
  name: string;
  id: string;
  placeholder: string;
  Icon?: IconType;
  Hide?: IconType;
}
const PasswordInput: React.FC<PasswordInputProps> = ({
  type,
  name,
  id,
  placeholder,
  Icon,
  Hide,
}) => {

    const [show , setShow] = useState(false)
  return (
    <div className="flex items-center justify-between gap-2.5 bg-[#EFF1F999] p-3.5 w-full rounded-lg">
      <div className="flex items-center gap-2.5">
        {Icon && <Icon className="text-[#6E7079] text-[20px]" />}
        <input
          type={show ? "text" : type}
          name={name}
          id={id}
          placeholder={placeholder}
          className="text-[16px] border-0 outline-0 font-[Inter]"
        />
      </div>
      <div onClick={() => setShow(!show)} className="cursor-pointer">
        {show ? (
          <IoIosEye className="text-[#6E7079] text-[22px]" />
        ) : (
          Hide && <Hide className="text-[#6E7079] text-[20px]" />
        )}
      </div>
    </div>
  );
};
export default PasswordInput;
