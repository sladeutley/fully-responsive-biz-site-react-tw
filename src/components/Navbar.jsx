import React, { useState } from 'react'

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    // NOTE, to know what these tailwind classes do, like below, go to tailwind docs and search for them - it will explain everything
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      {/* This is our desktop nav bar, so that's why on small devices it will be hidden */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            // Above, 'navLinks.length-1' just means if it's last element, like one on far right, no margin, else margin 10 
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      

    </nav>
  )
}

export default Navbar