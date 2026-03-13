import React from "react";
import { Link } from "react-router-dom";
import asset from "../assets/sk7-logo.png";

const Navbar = () => {
  return (
    <>
      {/* Logo */}
      <nav className="w-full bg-black">
        <div className="flex items-center justify-center py-6">
          <Link to="/">
            <img
              src={asset}
              alt="logo"
              className="h-[140px] w-[140px] object-contain"
            />
          </Link>
        </div>
      </nav>

      {/* Menu */}
<section className="bg-yellow-400 py-7">
  <div className="max-w-7xl mx-auto px-7">
    <ul className="grid grid-cols-3 gap-15">

      {/* Home */}
      <li>
        <Link
          to="/"
          className="flex items-center justify-center h-[55px] w-full rounded-full bg-yellow-300 text-black font-semibold hover:bg-white transition"
        >
          Home
        </Link>
      </li>

      {/* Chart */}
      <li>
        <Link
          to="/chart"
          className="flex items-center justify-center h-[55px] w-full rounded-full bg-yellow-300 text-black font-semibold hover:bg-white transition"
        >
          Chart
        </Link>
      </li>

      

      {/* Play Now */}
      <li>
        <a
          href="https://wa.me/917206591251"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center h-[55px] w-full rounded-full bg-yellow-300 text-black font-semibold hover:bg-white transition"
        >
          Contact
        </a>
      </li>

    </ul>
  </div>
</section>
    </>
  );
};

export default Navbar;