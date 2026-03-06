import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="p-4 text-white bg-[#406e83] shadow md:px-6 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center mb-4 sm:mb-0">
          <span className="text-xl font-bold">Satta King 7™</span>
        </Link>

        {/* Links */}
        <ul className="flex flex-wrap items-center justify-end mb-4 text-sm md:justify-start sm:mb-0">

          <li>
            <Link
              to="/chart"
              className="mr-4 text-lg text-white hover:underline md:mr-6"
            >
              Chart
            </Link>
          </li>

          <li>
            <Link
              to="/privacy-policy"
              className="mr-4 text-lg text-white hover:underline md:mr-6"
            >
              Privacy&Policy
            </Link>
          </li>

          <li>
            <Link
              to="/terms-and-conditions"
              className="mr-4 text-lg text-white hover:underline md:mr-6"
            >
              Terms & Conditions
            </Link>
          </li>

          <li>
            <Link
              to="/disclaimer"
              className="mr-4 text-lg text-white hover:underline md:mr-6"
            >
              Disclaimer
            </Link>
          </li>

          <li>
            <a
              href="https://wa.me/917206591251"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-lg text-white hover:underline md:mr-6"
            >
              Connect
            </a>
          </li>

        </ul>
      </div>

      <hr className="border-gray-200 sm:mx-auto lg:my-8" />

      {/* Disclaimer */}
      <p className="text-sm text-center text-red-400">
        This website does not promote any kind of satta activities. This
        website is made for entertainment purpose only.
      </p>

      <hr className="border-gray-200 sm:mx-auto lg:my-4" />

      {/* Copyright */}
      <span className="block text-sm text-white sm:text-center">
        ©{" "}
        <Link to="/" className="hover:underline">
          Satta King 7™
        </Link>{" "}
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;