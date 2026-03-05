import React from "react";
import { Link } from "react-router-dom";
import asset from "../assets/sk7-logo.png";

const Navbar = () => {
  return (
    <>
      {/* Top Logo Section */}
      <nav className="w-full bg-gradient-to-br from-blue-400 to-pink-700">
        <div className="flex items-center justify-center h-[170px]">
          <a href="/" title="Satta King 7 Home">
            <img
              src={asset}
              alt="Satta King 7 Logo"
              className="h-[150px] w-[150px] object-contain"
            />
          </a>
        </div>
      </nav>

      {/* Bottom Menu Section */}
      <nav className="bg-white">
        <div className="px-4 py-3 mx-auto md:px-6">
          <div className="flex items-center justify-center">
            <ul className="flex flex-row space-x-8 text-sm font-medium">
              
              <li>
                <Link
                  to="/chart"
                  className="text-gray-900 hover:underline hover:text-blue-600 transition"
                >
                  Chart
                </Link>
              </li>

              <li>
                <a
                  href="https://wa.me/917206591251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:underline hover:text-green-600 transition"
                >
                  Play Now
                </a>
              </li>

              <li>
                <Link
                  to="/"
                  className="text-gray-900 hover:underline hover:text-pink-600 transition"
                >
                  DELHI SATTA CHART
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;