import { useState } from "react";

import Logo from "./Logo";
import NavbarLinks from "./NavbarLinks";
import MenuToggle from "./MenuToggle";
import LoginAndCart from "./LoginAndCart";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full h-28 z-[10000] paddingX flexBetween bg-black">
      <Logo />

      <div className="flexBetween font-semibold text-lg">
        <ul className="hidden lg:flexCenter gap-8">
          <NavbarLinks setIsOpen={setIsOpen} />
          <LoginAndCart setIsOpen={setIsOpen} />
        </ul>

        <MenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {isOpen && (
        <div className="pt-8 absolute inset-x-0 h-screen top-28 z-[500] font-semibold text-lg text-center backdrop-blur-md lg:hidden">
          <ul className="space-y-8">
            <NavbarLinks setIsOpen={setIsOpen} />
            <LoginAndCart setIsOpen={setIsOpen} />
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
