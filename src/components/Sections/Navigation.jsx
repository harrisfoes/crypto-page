import Logo from "../Logo";
import HamburgerMenu from "../../assets/navigation/menu.svg";
import close from "../../assets/navigation/close.svg";
import { useState } from "react";
import MobileMenu from "../MobileMenu";
import NavLinks from "../NavLinks";
import ConnectWallet from "../ConnectWallet";

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
    <nav>
      <div className="px-4 py-4 md:mx-32 grid grid-cols-2 items-center">
        <div className="grid grid-cols-2 self-center">
          <Logo />
          <ul className="hidden lg:flex md:gap-12 xl:text-xl">
            {navLinks.map((items) => {
              return (
                <NavLinks
                  key={items.name}
                  name={items.name}
                  href={items.href}
                />
              );
            })}
          </ul>
        </div>
        <div className="justify-self-end lg:hidden">
          <img
            className="hover:cursor-pointer"
            src={mobileNav ? close : HamburgerMenu}
            onClick={handleClick}
            alt="menu"
          />
        </div>

        <div className="hidden lg:block justify-self-end">
          <ConnectWallet />
        </div>
      </div>
      {mobileNav ? (
        <div className="fixed min-w-full min-h-screen z-10 bg-neutral-900 ">
          <MobileMenu links={navLinks} />
        </div>
      ) : (
        ""
      )}
    </nav>
  );
}

export default Navigation;
