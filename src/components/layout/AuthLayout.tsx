import { Outlet } from "react-router-dom";
import AuthHeader from "./AuthHeader";
import AutoTitle from "./AutoTitle";

const AppLayout = () => {
  return (
    <>
      <AutoTitle />
      <AuthHeader />
      <Outlet />
    </>
  );
};
export default AppLayout;
