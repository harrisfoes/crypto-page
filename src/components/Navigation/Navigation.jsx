import Logo from "./Logo";
import HamburgerMenu from "../../assets/navigation/menu.svg";
import close from "../../assets/navigation/close.svg";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

function Navigation() {
  const [mobileNav, setMobileNav] = useState(false);

  const navLinks = [
    {
      name: "Markets",
      href: "#",
    },
    {
      name: "Portfolio",
      href: "#",
    },
    {
      name: "Products",
      href: "#",
    },
  ];

  const handleClick = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <nav className="w-full max-w-lg">
      {/* mobile */}
      <div className=" px-4 py-4 grid grid-cols-2 align-center">
        <Logo />
        <div className="justify-self-end">
          <img
            className="hover:cursor-pointer"
            src={mobileNav ? close : HamburgerMenu}
            onClick={handleClick}
            alt="menu"
          />
        </div>
      </div>
      {mobileNav ? (
        <div className="fixed min-w-full min-h-screen z-10 bg-neutral-900">
          <MobileMenu links={navLinks} />
        </div>
      ) : (
        ""
      )}
    </nav>
  );
}

export default Navigation;
