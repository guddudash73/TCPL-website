import React, { useState } from "react";
import tcpl_logo from "../../assets/tcpl_logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdArrowDropright } from "react-icons/io";
import { RiMenu4Line } from "react-icons/ri";
const Navbar = () => {
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isGisOpen, setIsGisOpen] = useState(false);
  const [isLidarOpen, setIsLidarOpen] = useState(false);
  const [isSoftwareOpen, setIsSoftwareOpen] = useState(false);
  const [isMenuHidden, setIsmenuHidden] = useState(false);

  const handleMenuOpen = () => {
    setIsmenuHidden(!isMenuHidden);
    console.log("handlemenuopen");
  };

  const handleSoftwareOpen = () => {
    setIsSoftwareOpen(!isSoftwareOpen);
  };

  const handleLidarOpen = () => {
    setIsLidarOpen(!isLidarOpen);
  };

  const handleGisOpen = () => {
    setIsGisOpen(!isGisOpen);
  };

  const handleServicesOpen = () => {
    setIsServiceOpen(!isServiceOpen);
  };

  const navLinks = (
    <div className=" font-primary font-medium text-sm md:flex md:flex-row flex flex-col md:space-x-8 space-x-4">
      <div>
        <a href="/">Home</a>
      </div>
      <div
        className="relative flex-row md:flex-col"
        onMouseEnter={!isMenuHidden ? handleServicesOpen : undefined}
        onMouseLeave={!isMenuHidden ? handleServicesOpen : undefined}
        onClick={isMenuHidden ? handleServicesOpen : undefined}
      >
        <p className="cursor-pointer">Work</p>
        <AnimatePresence>
          {isServiceOpen && (
            <div className="absolute w-60 h-auto">
              <motion.div
                className="bg-accent/25 p-2 flex flex-col gap-3 rounded-md mt-3 overflow-hidden"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className="group cursor-pointer h-auto"
                  onMouseEnter={handleGisOpen}
                  onMouseLeave={handleGisOpen}
                >
                  <div className="flex items-center flex-grow">
                    <p>GIS Services</p>
                    <IoMdArrowDropright
                      size="1.5rem"
                      className={`transition-transform duration-300 ${
                        isGisOpen ? "rotate-90" : ""
                      }`}
                    ></IoMdArrowDropright>
                  </div>
                  {isGisOpen && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="pl-4 pt-2 flex flex-col gap-2"
                    >
                      <div>
                        <p>Telecommunications</p>
                      </div>
                      <div>
                        <p>Mapping and Navigations</p>
                      </div>
                    </motion.div>
                  )}
                </div>
                <div
                  className="group cursor-pointer h-auto"
                  onMouseEnter={handleLidarOpen}
                  onMouseLeave={handleLidarOpen}
                >
                  <div className="flex items-center flex-grow">
                    <p>LiDAR Services</p>
                    <IoMdArrowDropright
                      size="1.5rem"
                      className={`transition-transform duration-300 ${
                        isLidarOpen ? "rotate-90" : ""
                      }`}
                    ></IoMdArrowDropright>
                  </div>
                  {isLidarOpen && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="pl-4 pt-2 flex flex-col gap-2"
                    >
                      <div>
                        <p>Terrain Mapping</p>
                      </div>
                      <div>
                        <p>Vegetation Analysis</p>
                      </div>
                      <div>
                        <p>3D Modeling</p>
                      </div>
                    </motion.div>
                  )}
                </div>
                <div
                  className="group cursor-pointer h-auto"
                  onMouseEnter={handleSoftwareOpen}
                  onMouseLeave={handleSoftwareOpen}
                >
                  <div className="flex items-center flex-grow">
                    <p>Software Developmemnt</p>
                    <IoMdArrowDropright
                      size="1.5rem"
                      className={`transition-transform duration-300 ${
                        isSoftwareOpen ? "rotate-90" : ""
                      }`}
                    ></IoMdArrowDropright>
                  </div>
                  {isSoftwareOpen && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="pl-4 pt-2 flex flex-col gap-2"
                    >
                      <div>
                        <p>Billing Solution</p>
                      </div>
                      <div>
                        <p>Ecommerce Solution</p>
                      </div>
                    </motion.div>
                  )}
                </div>
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
          <nav className="flex flex-row items-center">{navLinks}</nav>
        </div>
        <div
          className="h-full flex justify-center items-center mr-2 md:hidden"
          onClick={handleMenuOpen}
        >
          <RiMenu4Line size={25}></RiMenu4Line>
        </div>

        {isMenuHidden && (
          <nav className="absolute top-20 left-5 hidden">{navLinks}</nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;
