"use client";
import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import LoginButton from "@/components/loginbutton";

const UserMenu = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  let timeoutId = null;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, 50);
  };

  if (!session) return null;

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 sm:gap-2 bg-slate-700 hover:bg-slate-600 px-2 sm:px-4 py-1 sm:py-2 rounded-lg transition text-xs sm:text-sm"
      >
        <span className="hidden xs:inline">Welcome, </span>
        <span className="max-w-[80px] sm:max-w-none truncate">
          {session.user?.email}
        </span>

        <svg className="w-3 h-3 sm:w-4 sm:h-4">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-lg border border-slate-700 overflow-hidden z-50"
          onMouseEnter={() => {
            clearTimeout(timeoutId);
            setIsOpen(true);
          }}
          onMouseLeave={() => {
            timeoutId = setTimeout(() => {
              setIsOpen(false);
            }, 50);
          }}
        >
          <Link
            href={`/${session.user?.email?.split("@")[0]}`}
            className="block px-4 py-2 text-sm text-white hover:bg-slate-700 transition"
          >
            Your Page
          </Link>
          <Link
            href="/dashboard"
            className="block px-4 py-2 text-sm text-white hover:bg-slate-700 transition"
          >
            Dashboard
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-slate-700 transition"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <nav className="bg-indigo-950 text-white flex flex-col sm:flex-row justify-between px-4 py-2 sm:py-0 sm:h-16 items-center gap-2">
        <Link href="/">
          <div className="logo font-bold text-lg flex items-center gap-1">
            <img
              src="/assets/brownie1.gif"
              alt=""
              className="w-10 h-10 sm:w-13 sm:h-13 inline-block"
            />
            <span className="text-sm sm:text-base">BuyMeABrownie</span>
          </div>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          {session ? (
            <UserMenu />
          ) : (
            <Link href="/login">
              <LoginButton />
            </Link>
          )}
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-indigo-950 text-white flex justify-between px-4 h-16 items-center">
      <Link href="/">
        <div className="logo font-bold text-lg flex items-center gap-1">
          <img
            src="/assets/brownie1.gif"
            alt=""
            className="w-13 h-13 inline-block"
          />
          <span>BuyMeABrownie</span>
        </div>
      </Link>

      <div className="flex items-center gap-4">
        {session ? (
          <UserMenu />
        ) : (
          <Link href="/login">
            <LoginButton />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
