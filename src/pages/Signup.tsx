import { CiUser } from "react-icons/ci";
import { IoIosEyeOff } from "react-icons/io";
import { PiEnvelopeSimpleLight, PiLockLight } from "react-icons/pi";
import FunButton from "../components/UI/FunButton";
import { NavLink, useNavigate } from "react-router-dom";
import SimpleInput from "../components/UI/SimpleInput";
import PasswordInput from "../components/UI/PasswordInput";
import { useState, FormEvent } from "react";
import { signup } from "../../services/authService";
import { RouteDashboard } from "./Routes";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await signup(email, password, username);

    if (result.success) {
      navigate(RouteDashboard);
    } else {
      setError(result.message);
    }

    setLoading(false);
  };

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
          <p className="font-[Inter] font-normal text-[#8B8D97]">
            Create your free account
          </p>
        </div>
        <div className="w-full mt-6">
          <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}
            <SimpleInput
              type={"text"}
              name={"username"}
              id={"username"}
              placeholder={"Your Full Name"}
              Icon={CiUser}
              value={username}
              onChange={(e: any) => setUsername(e.target.value)}
              required
            />
            <SimpleInput
              type={"email"}
              name={"email"}
              id={"email"}
              placeholder={"Email Address"}
              Icon={PiEnvelopeSimpleLight}
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              required
            />
            <PasswordInput
              Icon={PiLockLight}
              type={"password"}
              name={"password"}
              id={"password"}
              placeholder={"Create a Strong Password"}
              Hide={IoIosEyeOff}
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              required
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
              <FunButton
                content={loading ? "Creating Account..." : "Signup"}
                type={"submit"}
                disabled={loading}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
