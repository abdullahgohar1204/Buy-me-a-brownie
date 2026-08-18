import React from "react";
import LoginButton from "@/components/loginbutton";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-indigo-950 text-white flex justify-between px-4 h-16 items-center">
      <div className="logo font-bold text-lg">
        <img
          src="/assets/cake2.gif"
          alt=""
          className="w-13 h-13 inline-block"
        />
        <span> BuyMeABrownie</span>
      </div>
      {/* <ul className="flex justify-between gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li>
        <li>Login</li>
      </ul> */}

      <div>
        <Link href={"/login"}>
          <LoginButton />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
