import React from "react";
import Logo from "../Logo";
import twitterLogo from "../../assets/footer/twitter.svg";
import linkedinLogo from "../../assets/footer/linkedin.svg";
import facebookLogo from "../../assets/footer/facebook.svg";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center border border-bg-2 p-2 mt-12">
      <Logo />
      <div className="flex gap-5 my-4">
        <img src={twitterLogo} alt="twitter" />
        <img src={linkedinLogo} alt="linkedin" />
        <img src={facebookLogo} alt="facebook" />
      </div>
      <p className="text-sm text-neutral-200 my-2">
        Copyright © 2022 SendCrypt. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
