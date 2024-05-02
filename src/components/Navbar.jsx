import React, { useState } from 'react';

const linksData = [
  {
    name: 'SERVICES',
    hash: '#home',
  },
  {
    name: 'ABOUT US',
    hash: '#about',
  },
  {
    name: 'CONTACT US',
    hash: '#Contact',
  },
  {
    name: 'CAREERS',
    hash: '#Careers',
  },
];

const menuItems = [
  { name: 'HOME', hash: '#home' },
  { name: 'SERVICES', hash: '#services' },
  { name: 'ABOUT US', hash: '#about' },
  { name: 'CONTACT US', hash: '#contact' },
  { name: 'CAREERS', hash: '#careers' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-customPurple h-19 ">
      <div className="max-w-7xl lg:mx-20 sm:mx-10 mx-5">
        <div className="flex items-center justify-between ">
          <div className="flex gap-3.5 flex-shrink-0 h-16">
            <img
              className="h-9 w-11 mb-6 mt-4"
              src="/assets/at.png"
              alt="AT Digital"
            />
            <h1 className="my-6 text-white text-xl font-semibold">
              AT DIGITAL
            </h1>
          </div>

          <div className="flex sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center mt-2 justify-center text-white"
              aria-controls="mobile-menu"
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="hidden gap-7 font-sm font-interFont sm:ml-6 sm:flex sm:items-center justify-center">
            {linksData.map((link) => (
              <div key={link.hash}>
                <a
                  className="text-3.5 font-medium text-sm text-white"
                  href={link.hash}
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 z-10 h-full w-full bg-white transform transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="mobile-menu-panel"
      >
        <div className="flex flex-col justify-start items-start px-5 py-4">
          <button onClick={toggleMenu} className="self-end">
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="w-full">
            {menuItems.map((item) => (
              <a
                key={item.hash}
                href={item.hash}
                className="mb-8 block text-sm font-medium text-customBlack"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
