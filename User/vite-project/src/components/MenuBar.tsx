const MenuBar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="px-4 py-3 mx-auto max-w-7xl">
        <ul className="flex items-center justify-center space-x-8 text-sm font-medium">
          <li>
            <a href="/chart" className="text-gray-900 hover:underline">
              Chart
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/+917206591251"
              target="_blank"
              className="text-gray-900 hover:underline"
            >
              Play Now
            </a>
          </li>
          <li>
            <a href="/" className="text-gray-900 hover:underline">
              DELHI SATTA CHART
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MenuBar;