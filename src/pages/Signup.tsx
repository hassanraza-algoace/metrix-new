import { CiUser } from "react-icons/ci";
import { GrHide } from "react-icons/gr";
import { PiEnvelopeSimpleLight, PiLockLight } from "react-icons/pi";
import Button from "../components/UI/Button";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <section className="bg-[#F4F5FA] flex justify-center items-center h-screen">
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
          <form className="w-full flex flex-col gap-5">
            <div className="flex items-center gap-2.5 bg-[#EFF1F999] p-3.5 w-full rounded-lg">
              <CiUser className="text-[#6E7079] text-[20px]" />
              <input
                type="name"
                name="username"
                id="username"
                placeholder="Your Full Name"
                className="text-[16px] border-0 outline-0 font-[Inter]"
              />
            </div>
            <div className="flex items-center gap-2.5 bg-[#EFF1F999] p-3.5 w-full rounded-lg">
              <PiEnvelopeSimpleLight className="text-[#6E7079] text-[20px]" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email Address"
                className="text-[16px] border-0 outline-0 font-[Inter]"
              />
            </div>
            <div className="flex items-center justify-between gap-2.5 bg-[#EFF1F999] p-3.5 w-full rounded-lg">
              <div className="flex items-center gap-2.5">
                <PiLockLight className="text-[#6E7079] text-[20px]" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Create a Strong Password"
                  className="text-[16px] border-0 outline-0 font-[Inter]"
                />
              </div>
              <GrHide className="text-[#6E7079] text-[20px] " />
            </div>
            <div className="flex justify-center">
              <p>
                Already have an account?
                <span className="text-[#5570F1] font-[Inter] text-[14px] font-normal pl-1">
                  <NavLink to="/login">Login</NavLink>
                </span>
              </p>
            </div>
            <div className="flex justify-center mt-5">
              <Button content={"Signup"} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Signup;
