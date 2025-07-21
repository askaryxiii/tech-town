import { useState } from "react";
import { HamburgerButton, IconNavList, Logo, SearchBar } from "../ui";
import Drawer from "./Drawer";
import { Link } from "react-router-dom";
import { RiHeartAdd2Line } from "react-icons/ri";
import { TbArrowsShuffle } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const listItems = ["Home", "Shop All", "Orders", "Branches", "Our Polices"];

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

        {/* Notification and Avatar */}
        <div className="hidden md:flex items-center space-x-8">
          <IconNavList icon={<TbArrowsShuffle />} count={1} />
          <IconNavList icon={<RiHeartAdd2Line />} count={2} />
          <IconNavList icon={<MdOutlineShoppingCart />} count={0} />
        </div>
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
        <Drawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen}>
          <div className="flex flex-col h-full justify-between">
            <div className="flex flex-col gap-8">
              <SearchBar />
              <div className="flex flex-col gap-2">
                {listItems.map((item) => (
                  <Link
                    key={item}
                    className=" text-xl px-2 py-1 rounded relative text-gray-600 hover:text-gray-700  bg-transparent hover:bg-gray-200 transition-all duration-300 focus:outline-none focus:text-gray-900 ">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex justify-evenly pr-2 pt-5">
              <IconNavList icon={<TbArrowsShuffle />} count={1} />
              <IconNavList icon={<RiHeartAdd2Line />} count={2} />
              <IconNavList icon={<MdOutlineShoppingCart />} count={0} />
            </div>
          </div>
        </Drawer>
      )}
    </nav>
  );
};
