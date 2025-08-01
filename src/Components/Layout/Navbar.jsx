import React from "react";
import tcpl_logo from "../../assets/tcpl_logo.png";

const Navbar = () => {
  const navLinks = (
    <ul className=" font-primary font-medium text-sm flex space-x-8">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/work">Work</a>
      </li>
      <li>
        <a href="/customer">Our Customer</a>
      </li>
      <li>
        <a href="/team">Team</a>
      </li>
      <li>
        <a href="/career">Career</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  );
  return (
    <div className="w-full h-16 shadow fixed top-0 left-0">
      <div className="ab-container flex justify-between items-center h-full">
        <div className="w-40">
          <img src={tcpl_logo} alt="TCPL Logo" />
        </div>
        <div className="hidden md:flex flex-grow justify-end">
          <nav>{navLinks}</nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
