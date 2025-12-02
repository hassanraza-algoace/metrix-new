import { NavLink } from "react-router-dom";
import SimpleButton from "../components/UI/SimpleButton";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <h1 className="text-6xl font-bold mb-4 font-[Poppins]">404</h1>
      <p className="text-2xl font-[Inter]">Page Not Found</p>
      <NavLink to="/" className="mt-2.5">
        <SimpleButton content={"Back To Home"}/>
      </NavLink>
    </div>
  );
};

export default NotFound;
