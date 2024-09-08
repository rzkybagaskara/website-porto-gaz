import React, { useState } from 'react';

export default function Navbar() {
  // useState to manage navbar visibility
  const [nav, setNav] = useState(false);

  // toggle function to handle navbar display
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="nav mt-5 pt-0 pr-1 flex justify-between text-white">
      {/* Left Side (Brand + Links) */}
      <div className="flex items-center space-x-6">
        {/* Navbar brand */}
        <span className="self-center text-3xl font-semibold whitespace-nowrap ml-10 text-white">Bagas</span>

        {/* Desktop Menu (hidden on mobile) */}
        <ul className="hidden md:flex space-x-4 gap-5 pl-10">
          <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">
            <a href="/">Home</a>
          </li>
          <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">
            <a href="/projects">Projects</a>
          </li>
        </ul>
      </div>

      {/* Mobile Toggle Button */}
      <div className="md:hidden flex items-center mr-10">
        <button onClick={handleNav} className="focus:outline-none">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={nav ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
          </svg>
        </button>
      </div>

      {/* Contact Me Button (Desktop only) */}
      <button className="hidden md:block justify-end mr-20">
        <a href="mailto:rizkybagaskara@outlook.com" className="flex relative bg-emerald-500 duration-300 hover:scale-110 hover:bg-emerald-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Contact Me
        </a>
      </button>

      {/* Mobile Menu */}
      <div className={`${nav ? 'flex' : 'hidden'} absolute top-16 left-0 w-full bg-opacity-80 flex-col items-center space-y-6 py-4 md:hidden`}>
        <a href="/" className="text-xl text-white">
          Home
        </a>
        <a href="/projects" className="text-xl text-white">
          Projects
        </a>
        <a href="mailto:rizkybagaskara@outlook.com" className="bg-emerald-500 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Contact Me
        </a>
      </div>
    </nav>
  );
}
