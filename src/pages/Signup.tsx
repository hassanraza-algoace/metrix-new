import { CiUser } from "react-icons/ci";
import { IoIosEyeOff } from "react-icons/io";
import { PiEnvelopeSimpleLight, PiLockLight } from "react-icons/pi";
import Button from "../components/UI/Button";
import { NavLink } from "react-router-dom";
import SimpleInput from "../components/UI/SimpleInput";
import PasswordInput from "../components/UI/PasswordInput";
// import { useEffect } from "react";

const Signup = () => {
  // useEffect(() => {
  //     document.title = "Signup | Metrix";
  //   }, []);
  return (
    <section className="bg-[#F4F5FA] flex justify-center items-center min-h-screen py-6">
      <div className="sm:max-w-[443px] w-full bg-white flex flex-col items-center justify-center px-[34px] py-11 rounded-xl">
        <div>
          <img src="images/Graph.svg" alt="Graph-image" />
        </div>
        <div className="flex flex-col items-center mt-5 gap-1">
          <h1 className="text-[20px] text-black font-[Poppins] font-medium">
            Get Started with <span className="text-[#5570F1]">Metrix</span>
          </h1>
          <p className="font-[Inter] font-normal text-[#8B8D97] ">
            Create your free account
          </p>
        </div>
        <div className="w-full mt-6">
          <form
            className="w-full flex flex-col gap-5"
          >
            <SimpleInput
              type={"name"}
              name={"username"}
              id={"username"}
              placeholder={"Your Full Name"}
              Icon={CiUser}
            />
            <SimpleInput
              type={"email"}
              name={"email"}
              id={"email"}
              placeholder={"Email Address"}
              Icon={PiEnvelopeSimpleLight}
            />
            <PasswordInput
              Icon={PiLockLight}
              type={"password"}
              name={"password"}
              id={"password"}
              placeholder={"Create a Strong Password"}
              Hide={IoIosEyeOff}
            />
            <div className="flex justify-center">
              <p>
                Already have an account?
                <span className="text-[#5570F1] font-[Inter] text-[14px] font-normal pl-1">
                  <NavLink to="/">Login</NavLink>
                </span>
              </p>
            </div>
            <div className="flex justify-center mt-5">
              <Button
                content={"Signup"}
                type={"submit"}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Signup;
