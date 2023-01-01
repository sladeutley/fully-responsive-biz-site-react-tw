import React, { useState } from 'react'

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

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

      {/* 38:00 - Mobile Devices - not sure the hidden thing seems counterintuitive to me. like above on desktop its hidden, but here on small devices its hidden - shouldn't it be the other way around */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img 
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          // onClick={() => setToggle(!toggle)} //**in react, never want to update state using previous version of same old state. instead need to create a callback function like below. This way react knows to keep the state up to date
          onClick={() => setToggle((prev) => !prev)} 
        />

        <div
          className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? "mr-0" : "mb-4"}`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar