import { BiSearchAlt } from "react-icons/bi";

import ButtonPrimary from "../UI/button/ButtonPrimary";
import ButtonSecondary from "../UI/button/ButtonSecondary";

const Navbar = () => {
  return (
    <div className="bg-white h-[70px] flex flex-col justify-center">
      <div className="w-[85%] m-auto flex justify-between">
        <div className="flex">
          <div className="bg-black h-[40px] flex flex-col justify-center rounded-lg px-5 mt-1 tracking-widest font-bold">
            <h1 className="text-white">TCP</h1>
          </div>
          <div className="ml-2 flex flex-col justify-center">
            <input
              type="text"
              placeholder="Search..."
              className="border-b-2 focus:outline-none"
            />
          </div>
          <div className="ml-2 flex flex-col justify-center">
            <BiSearchAlt />
          </div>
        </div>
        <div className="flex h-[40px] mt-[5px]">
          <ButtonSecondary>Login</ButtonSecondary>
          <ButtonPrimary>Create account</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
