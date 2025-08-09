import React from "react";
import { IconNavList } from "../../ui";
import { TbArrowsShuffle } from "react-icons/tb";
import { RiHeartAdd2Line } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";

export const IconNavBar = ({ items, closeDrawer, hidden }) => {
  return (
    <div
      className={`${
        hidden ? "hidden" : "flex"
      } md:flex lg:items-center lg:space-x-8 md:space-x-8 md:items-center justify-evenly pr-2 pt-5 md:pr-0 md:pt-0`}>
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
    </div>
  );
};
