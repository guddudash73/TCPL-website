import React, { useState } from "react";
import tcpl_logo from "../../assets/tcpl_logo.png";
import { motion, AnimatePresence } from "motion/react";
const Navbar = () => {
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  const handleServicesOpen = () => {
    setIsServiceOpen(!isServiceOpen);
  };

  const navLinks = (
    <div className=" font-primary font-medium text-sm flex md:space-x-8 space-x-4">
      <div>
        <a href="/">Home</a>
      </div>
      <div
        className="relative flex-row md:flex-col"
        onMouseEnter={handleServicesOpen}
        onMouseLeave={() => {
          setTimeout(() => {
            handleServicesOpen();
          }, 180);
        }}
      >
        <label>Work</label>
        <AnimatePresence>
          {isServiceOpen && (
            <div className="absolute w-60 h-auto">
              <motion.div
                className="bg-accent/25 p-2 flex flex-col justify-evenly rounded-md mt-3"
                initial={{ opacity: 0, height: 0, minHeight: 100 }}
                animate={{ opacity: 1, height: 150 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div>GIS Services</div>
                <div>LiDAR Services</div>
                <div>Software Deleopment Services</div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
      <div>
        <a href="/customer">Our Customer</a>
      </div>
      <div>
        <a href="/team">Team</a>
      </div>
      <div>
        <a href="/career">Career</a>
      </div>
      <div>
        <a href="/contact">Contact</a>
      </div>
    </div>
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
