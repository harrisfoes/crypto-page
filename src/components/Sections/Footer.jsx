import React from "react";
import Logo from "../Logo";
import twitterLogo from "../../assets/footer/twitter.svg";
import linkedinLogo from "../../assets/footer/linkedin.svg";
import facebookLogo from "../../assets/footer/facebook.svg";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center border border-bg-2 p-2 mt-12 md:flex-row md:justify-around md:min-w-full">
      <Logo />
      <div className="flex gap-5 my-4">
        <img className="cursor-pointer" src={twitterLogo} alt="twitter" />
        <img className="cursor-pointer" src={linkedinLogo} alt="linkedin" />
        <img className="cursor-pointer" src={facebookLogo} alt="facebook" />
      </div>
      <p className="text-sm text-neutral-200 my-2">
        Built by harrisfoes. Copyright © 2022 SendCrypt. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
