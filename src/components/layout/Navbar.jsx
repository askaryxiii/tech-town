import { useState } from "react";
import { HamburgerButton, IconNavBar, Logo, SearchBar } from "../ui";
import Drawer from "./Drawer";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const listItems = ["Home", "Shop All", "Orders", "Branches", "Our Polices"];
  const items = useSelector((state) => state.cart.items);

  const closeDrawer = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsDrawerOpen(false);
      setIsClosing(false);
    }, 400); // Match animation duration
  };

  return (
    <nav className="border-b border-gray-200 bg-white shadow-sm">
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
            {/* <div className="flex justify-evenly pr-2 pt-5">
              <IconNavList
                icon={<TbArrowsShuffle />}
                count={1}
                onClickFun={closeDrawer}
              />
              <IconNavList
                icon={<RiHeartAdd2Line />}
                count={2}
                onClickFun={closeDrawer}
              />
              <IconNavList
                icon={<MdOutlineShoppingCart />}
                count={items?.length}
                dist={"/cart"}
                onClickFun={closeDrawer}
              />
            </div> */}
          </div>
        </Drawer>
      )}
    </nav>
  );
};
