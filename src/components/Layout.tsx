import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="max-w-[1440px] mx-auto font-outfit">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
