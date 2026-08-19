"use client";
import React from "react";
import LoginButton from "@/components/loginbutton";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();

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
      <div className="flex items-center gap-4">
        {session ? (
          <>
            <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
              Dashboard
            </button>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <Link href={"/login"}>
            <LoginButton />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
