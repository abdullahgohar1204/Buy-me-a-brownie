"use client";
import React from "react";
import LoginButton from "@/components/loginbutton";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <nav className="bg-indigo-950 text-white flex justify-between px-4 h-16 items-center">
      <Link href="/">
        <div className="logo font-bold text-lg">
          <img
            src="/assets/cake2.gif"
            alt=""
            className="w-13 h-13 inline-block"
          />
          <span> BuyMeABrownie</span>
        </div>
      </Link>
      <div>
        <Link href={"/login"}>
          <LoginButton />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
