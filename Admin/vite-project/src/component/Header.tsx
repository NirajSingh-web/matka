import React from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

interface HeaderProps {
  title?: string;
};
const Header: React.FC<HeaderProps> = ({ title = "Matka" }) => {
  const navLinks = [
    { name: "Market", path: "/" },
    { name: "Result", path: "/result" },
  ];
  return (
    <header className="sticky w-full top-0 left-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700 shadow-xl ">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-wide"
        >
          {title}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative font-medium transition duration-300 ${
                  isActive
                    ? "text-indigo-400"
                    : "text-slate-300 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 -bottom-2 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.8)]"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;