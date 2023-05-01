import { Outlet } from "react-router-dom";
import Navbar from "../componencts/header/Navbar";

const Root = (props) => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
