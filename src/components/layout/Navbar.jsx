import { useEffect, useState } from "react";
import { HamburgerButton, IconNavBar, Logo, SearchBar } from "../ui";
import Drawer from "./Drawer";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  // const [isVisible, setIsVisible] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);
  // const [hasShadow, setHasShadow] = useState(false);
  // const [isFloating, setIsFloating] = useState(false);
  const listItems = ["Home", "Shop All", "Orders", "Branches", "Our Polices"];
  const items = useSelector((state) => state.cart.items);

  const closeDrawer = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsDrawerOpen(false);
      setIsClosing(false);
    }, 400); // Match animation duration
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
  //     const isMobile = window.innerWidth < 768;

  //     if (isMobile) {
  //       if (currentScrollY > lastScrollY && currentScrollY > 50) {
  //         setIsVisible(false); // hide on scroll down
  //       } else {
  //         setIsVisible(true); // show on scroll up
  //       }

  //       setHasShadow(currentScrollY > 5);
  //       setIsFloating(currentScrollY > 0); // make fixed only after scrolling

  //       setLastScrollY(currentScrollY);
  //     } else {
  //       // Desktop always visible
  //       setIsVisible(true);
  //       setIsFloating(false);
  //       setHasShadow(currentScrollY > 5);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [lastScrollY]);

  return (
    <nav
      className={`border-b border-gray-200 bg-white z-50 transition-all duration-300 
      `}>
      <div className="flex items-center justify-between px-4 py-4 md:px-20">
        {/* Logo */}
        <Logo />
        {/* Hamburger icon */}
        <HamburgerButton setIsOpen={setIsDrawerOpen} />
        {/* Search bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <SearchBar />
        </div>
        {/* Navbar List */}
        <IconNavBar items={items} closeDrawer={closeDrawer} hidden={true} />
        {/* <div className="hidden md:flex items-center space-x-8">
          <IconNavList icon={<TbArrowsShuffle />} count={1} />
          <IconNavList icon={<RiHeartAdd2Line />} count={2} />
          <IconNavList
            icon={<MdOutlineShoppingCart />}
            count={items?.length}
            dist={"/cart"}
          />
        </div> */}
      </div>
      {/* Desktop Nav Links */}
      <div className="hidden md:flex justify-center gap-10 pb-2">
        {listItems.map((item) => (
          <Link
            to={`/`}
            key={item}
            className="px-2 py-1 rounded relative text-gray-600 hover:text-gray-700 bg-transparent hover:bg-gray-200  transition-all duration-300 focus:outline-none focus:text-black">
            {item}
          </Link>
        ))}
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <Drawer
          isOpen={isDrawerOpen}
          setIsOpen={setIsDrawerOpen}
          isClosing={isClosing}
          setIsClosing={setIsClosing}
          closeDrawer={closeDrawer}>
          <div className="flex flex-col h-full justify-between">
            <div className="flex flex-col gap-8">
              <SearchBar />
              <div className="flex flex-col gap-2">
                {listItems.map((item) => (
                  <Link
                    to={`/`}
                    key={item}
                    onClick={closeDrawer}
                    className=" text-xl px-2 py-1 rounded relative text-gray-600 hover:text-gray-700  bg-transparent hover:bg-gray-200 transition-all duration-300 focus:outline-none focus:text-gray-900 ">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <IconNavBar items={items} closeDrawer={closeDrawer} />
          </div>
        </Drawer>
      )}
    </nav>
  );
};

// ${isFloating ? "fixed top-0 left-0 w-full" : ""}
//         ${isVisible ? "translate-y-0" : "-translate-y-full"}
//         ${hasShadow ? "shadow-md" : "shadow-none"}
