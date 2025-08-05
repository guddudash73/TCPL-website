import React, { useState } from "react";
import tcpl_logo from "../../assets/tcpl_logo.png";
import { motion, AnimatePresence, spring, easeInOut } from "framer-motion";
import { IoMdArrowDropright } from "react-icons/io";
import { RiMenu4Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isGisOpen, setIsGisOpen] = useState(false);
  const [isLidarOpen, setIsLidarOpen] = useState(false);
  const [isSoftwareOpen, setIsSoftwareOpen] = useState(false);
  const [isMenuHidden, setIsmenuHidden] = useState(false);

  const [isMobileServiceOpen, setIsMobileServiceOpen] = useState(false);

  const handleToggle = (state, changeState) => {
    changeState(!state);
  };

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

  const desktopNavLinks = (
    <div className=" font-primary font-medium text-sm flex flex-row space-x-8">
      <div>
        <a href="/">Home</a>
      </div>
      <div
        className="relative flex-row md:flex-col"
        onMouseEnter={handleServicesOpen}
        onMouseLeave={handleServicesOpen}
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

  // mobile nav bar

  const mobileNavItemsAnimation = {
    hidden: {
      opacity: 0,
      x: 100,
    },

    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.1,
        ease: easeInOut,
      },
    },
  };

  const mobileNavContainerAnimation = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const mobileNavLinks = (
    <div className="h-full w-screen bg-white">
      <motion.div
        className="h-full w-full ab-container pt-4"
        variants={mobileNavContainerAnimation}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={mobileNavItemsAnimation}
          className="py-1.5 text-para font-primary text-lg font-medium"
        >
          <p>Home</p>
        </motion.div>

        <motion.div
          variants={mobileNavItemsAnimation}
          className="py-1.5 text-para font-primary text-lg font-medium"
          onClick={() => {
            handleToggle(isMobileServiceOpen, setIsMobileServiceOpen);
          }}
        >
          <p>Work</p>

          {isMobileServiceOpen && (
            <motion.div
              className="pl-4 flex flex-col gap-1.5 pt-2"
              variants={mobileNavContainerAnimation}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={mobileNavItemsAnimation}>
                <p>GIS Services</p>
              </motion.div>

              <motion.div variants={mobileNavItemsAnimation}>
                <p>LiDAR Services</p>
              </motion.div>

              <motion.div variants={mobileNavItemsAnimation}>
                <p>Software Development</p>
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          variants={mobileNavItemsAnimation}
          className="py-1.5 text-para font-primary text-lg font-medium"
        >
          <p>Our Customers</p>
        </motion.div>

        <motion.div
          variants={mobileNavItemsAnimation}
          className="py-1.5 text-para font-primary text-lg font-medium"
        >
          <p>Team</p>
        </motion.div>

        <motion.div
          variants={mobileNavItemsAnimation}
          className="py-1.5 text-para font-primary text-lg font-medium"
        >
          <p>Carrer</p>
        </motion.div>

        <motion.div
          variants={mobileNavItemsAnimation}
          className="py-1.5 text-para font-primary text-lg font-medium"
        >
          <p>Contact</p>
        </motion.div>
      </motion.div>
    </div>
  );
  return (
    <div>
      <div className="w-full h-16 shadow fixed top-0 left-0 bg-white z-50">
        <div className="ab-container flex justify-between items-center h-full">
          <div className="w-40">
            <img src={tcpl_logo} alt="TCPL Logo" />
          </div>
          <div className="hidden md:flex flex-grow justify-end">
            <nav className="flex flex-row items-center">{desktopNavLinks}</nav>
          </div>
          <div
            className="h-full flex justify-center items-center mr-2 md:hidden"
            onClick={handleMenuOpen}
          >
            <AnimatePresence initial={false}>
              {!isMenuHidden ? (
                <motion.div
                  className="absolute"
                  key="open"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <RiMenu4Line size={25}></RiMenu4Line>
                </motion.div>
              ) : (
                <motion.div
                  className="absolute"
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ type: spring, stiffness: 260, damping: 20 }}
                >
                  <IoClose size={25}></IoClose>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      {isMenuHidden && (
        <div className="fixed top-16 left-0 w-full h-[calc(100vh-4rem)] z-40 overflow-y-auto overflow-hidden md:hidden">
          {mobileNavLinks}
        </div>
      )}
    </div>
  );
};

export default Navbar;
