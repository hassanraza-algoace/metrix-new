import { PiEnvelopeSimpleLight, PiLockLight } from "react-icons/pi";
import Button from "../components/UI/Button";
import { NavLink } from "react-router-dom";
import SimpleInput from "../components/UI/SimpleInput";
import PasswordInput from "../components/UI/PasswordInput";
import { IoIosEyeOff } from "react-icons/io";
// import { useEffect } from "react";

const Login = () => {
  // useEffect(() => {
  //   document.title = "Login | Metrix";
  // }, []);
  return (
    <section className="bg-[#F4F5FA] flex justify-center items-center min-h-screen py-6">
      <div className="sm:max-w-[443px] w-full bg-white flex flex-col items-center justify-center px-[34px] py-11 rounded-xl">
        <div>
          <img src="images/Graph.svg" alt="Graph-image" />
        </div>
        <div className="flex flex-col items-center mt-5 gap-1">
          <h1 className="text-[20px] text-black font-[Poppins] font-medium">
            Welcome back!
          </h1>
          <p className="font-[Inter] font-normal text-[#8B8D97] ">
            Login to your account
          </p>
        </div>
        <div className="w-full mt-6">
          <form
            className="w-full flex flex-col gap-5"
          >
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
              placeholder={"Password"}
              Hide={IoIosEyeOff}
            />
            <div className="flex justify-end">
              <NavLink
                to="#"
                className="text-center font-[Inter] text-[14px] text-[#5570F1] font-normal"
              >
                Recover Password
              </NavLink>
            </div>
            <div className="flex justify-center">
              <p>
                Don’t have an account?
                <span className="text-[#5570F1] font-[Inter] text-[14px] font-normal pl-1.5">
                  <NavLink to="/signup">Sign Up</NavLink>
                </span>
              </p>
            </div>
            <div className="flex justify-center mt-5">
              <Button
                content={"Login"}
                type={"submit"}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Login;
