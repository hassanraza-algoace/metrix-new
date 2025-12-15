import { PiEnvelopeSimpleLight, PiLockLight } from "react-icons/pi";
import Button from "../components/UI/FunButton";
import { NavLink, useNavigate } from "react-router-dom";
import SimpleInput from "../components/UI/SimpleInput";
import PasswordInput from "../components/UI/PasswordInput";
import { IoIosEyeOff } from "react-icons/io";
import { useState, FormEvent } from "react";
import { login } from "../../services/authService";
import { RouteDashboard } from "./Routes";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await login(email, password);

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
            Welcome back!
          </h1>
          <p className="font-[Inter] font-normal text-[#8B8D97]">
            Login to your account
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
              placeholder={"Password"}
              Hide={IoIosEyeOff}
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              required
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
                Don't have an account?
                <span className="text-[#5570F1] font-[Inter] text-[14px] font-normal pl-1.5">
                  <NavLink to="/signup">Sign Up</NavLink>
                </span>
              </p>
            </div>
            <div className="flex justify-center mt-5">
              <Button
                content={loading ? "Logging in..." : "Login"}
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

export default Login;
