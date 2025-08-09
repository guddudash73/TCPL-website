import React, { useEffect, useReducer } from "react";
import tcpl_logo from "../../assets/tcpl_logo.png";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { IoMdArrowDropright } from "react-icons/io";
import { RiMenu4Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

//Initial state for all dropdown toggles and menu visibility
const initialState = {
  isServiceOpen: false,
  isGisOpen: false,
  isLidarOpen: false,
  isSoftwareOpen: false,
  isMenuOpen: false,
  isMobileServiceOpen: false,
  isTransparent: false,
};

//Reducer to manage toggling and setting state
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, [action.key]: !state[action.key] }; // Toggle boolean value
    case "SET":
      return { ...state, [action.key]: action.value }; // Set specific value
    case "CLOSE_ALL":
      return initialState; // Reset all to initial false
    default:
      return state;
  }
}

//Reusable dropdown item component for desktop submenu
const DropdownItem = ({
  label,
  isOpen,
  onMouseEnter,
  onMouseLeave,
  children,
  link,
}) => (
  <div
    className="group cursor-pointer h-auto"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <NavLink className="flex items-center flex-grow" to="/">
      <p>{label}</p>
      <IoMdArrowDropright
        size="1.5rem"
        className={`transition-transform duration-300 ${
          isOpen ? "rotate-90" : ""
        }`}
      />
    </NavLink>

    {/* Submenu shown when open */}
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -10 }}
        className="pl-4 pt-2 flex flex-col gap-2"
      >
        {children}
      </motion.div>
    )}
  </div>
);

const Navbar = () => {
  //useReducer for centralized toggle state management
  const [state, dispatch] = useReducer(reducer, initialState);

  //Scroll Triggers
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        dispatch({ type: "SET", key: "isTransparent", value: true });
        console.log(initialState.isTransparent);
      } else {
        dispatch({ type: "SET", key: "isTransparent", value: false });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //Desktop navbar content
  const desktopNavLinks = (
    <div className="font-primary font-medium text-sm flex flex-row space-x-8">
      <div>
        <NavLink to="/">Home</NavLink>
      </div>

      {/* Work with dropdown */}
      <div
        className="relative flex-row md:flex-col"
        onMouseEnter={() => dispatch({ type: "TOGGLE", key: "isServiceOpen" })}
        onMouseLeave={() => dispatch({ type: "TOGGLE", key: "isServiceOpen" })}
      >
        <NavLink>Work</NavLink>

        <AnimatePresence>
          {state.isServiceOpen && (
            <div className="absolute w-60 h-auto">
              <motion.div
                className="bg-white/50 p-2 flex flex-col gap-3 rounded-md mt-3 overflow-hidden"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                style={{ backdropFilter: "blur(10px)" }}
                transition={{ duration: 0.2 }}
              >
                {/* GIS Services dropdown */}
                <DropdownItem
                  label="GIS Services"
                  isOpen={state.isGisOpen}
                  onMouseEnter={() =>
                    dispatch({ type: "TOGGLE", key: "isGisOpen" })
                  }
                  onMouseLeave={() =>
                    dispatch({ type: "TOGGLE", key: "isGisOpen" })
                  }
                >
                  <p>Telecommunications</p>
                  <p>Mapping and Navigations</p>
                </DropdownItem>

                {/* LiDAR Services dropdown */}
                <DropdownItem
                  label="LiDAR Services"
                  isOpen={state.isLidarOpen}
                  onMouseEnter={() =>
                    dispatch({ type: "TOGGLE", key: "isLidarOpen" })
                  }
                  onMouseLeave={() =>
                    dispatch({ type: "TOGGLE", key: "isLidarOpen" })
                  }
                >
                  <p>Terrain Mapping</p>
                  <p>Vegetation Analysis</p>
                  <p>3D Modeling</p>
                </DropdownItem>

                {/* Software Development dropdown */}
                <DropdownItem
                  label="Software Development"
                  isOpen={state.isSoftwareOpen}
                  onMouseEnter={() =>
                    dispatch({ type: "TOGGLE", key: "isSoftwareOpen" })
                  }
                  onMouseLeave={() =>
                    dispatch({ type: "TOGGLE", key: "isSoftwareOpen" })
                  }
                >
                  <p>Billing Solution</p>
                  <p>Ecommerce Solution</p>
                </DropdownItem>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Static desktop nav links */}
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

  //Animations for mobile nav
  const mobileNavItemsAnimation = {
    hidden: { opacity: 0, x: 100 },
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
      transition: { staggerChildren: 0.08 },
      backdropFilter: "blur(10px)",
    },
  };

  // Mobile navigation content
  const mobileNavLinks = (
    <div className="h-full w-screen">
      <motion.div
        className="h-full w-full ab-container pt-22"
        variants={mobileNavContainerAnimation}
        initial="hidden"
        animate="visible"
      >
        {/* Common nav items */}
        {["Home", "Our Customers", "Team", "Carrer", "Contact"].map((item) => (
          <motion.div
            key={item}
            variants={mobileNavItemsAnimation}
            className="py-1.5 text-para font-primary text-lg font-medium"
          >
            <p>{item}</p>
          </motion.div>
        ))}

        {/* Work collapsible dropdown */}
        <motion.div
          variants={mobileNavItemsAnimation}
          className="py-1.5 text-para font-primary text-lg font-medium"
          onClick={() =>
            dispatch({ type: "TOGGLE", key: "isMobileServiceOpen" })
          }
        >
          <p>Work</p>

          {/* Nested items */}
          {state.isMobileServiceOpen && (
            <motion.div
              className="pl-4 flex flex-col gap-1.5 pt-2"
              variants={mobileNavContainerAnimation}
              initial="hidden"
              animate="visible"
            >
              {["GIS Services", "LiDAR Services", "Software Development"].map(
                (subItem) => (
                  <motion.div key={subItem} variants={mobileNavItemsAnimation}>
                    <p>{subItem}</p>
                  </motion.div>
                )
              )}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );

  return (
    <div className="flex justify-center">
      {/* Fixed top navbar */}
      <motion.nav
        initial={{
          backgroundColor: "rgba(255, 255, 255, 1)",
          width: "100%",
          radius: "0px",
          height: "4rem",
        }}
        className="w-screen h-16 shadow fixed top-0 z-50"
        animate={{
          backgroundColor: state.isTransparent
            ? "rgba(255, 255, 255, 0.5)" // Transparent when scrolling
            : "rgba(255, 255, 255, 1)", // Solid at top

          backdropFilter: state.isTransparent ? "blur(5px)" : "blur(0px)",
          width: state.isTransparent ? "90%" : "100%",
          top: state.isTransparent ? 15 : 0,
          borderRadius: state.isTransparent ? "12px" : "0px",
          height: state.isTransparent ? "3.5rem" : "4rem",
        }}
        transition={{ duration: 0.4 }}
      >
        <div className="ab-container flex justify-between items-center h-full">
          <div className="w-40">
            <img src={tcpl_logo} alt="TCPL Logo" />
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex flex-grow justify-end">
            <nav className="flex flex-row items-center">{desktopNavLinks}</nav>
          </div>

          {/* Mobile menu toggle */}
          <div
            className="h-full flex justify-center items-center mr-2 md:hidden"
            onClick={() => dispatch({ type: "TOGGLE", key: "isMenuOpen" })}
          >
            <AnimatePresence initial={false}>
              {!state.isMenuOpen ? (
                <motion.div
                  className="absolute"
                  key="open"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <RiMenu4Line size={25} />
                </motion.div>
              ) : (
                <motion.div
                  className="absolute"
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <IoClose size={25} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>

      {/* Mobile nav links container */}
      {state.isMenuOpen && (
        <div className="bg-transparent fixed left-0 w-full h-screen z-40 overflow-y-auto overflow-hidden md:hidden">
          {mobileNavLinks}
        </div>
      )}
    </div>
  );
};

export default Navbar;
