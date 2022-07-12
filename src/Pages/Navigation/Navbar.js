import React, { useState } from "react";
import MyButton from "../MyButton";
import NavLink from "./NavLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-gray-200">
      <div className="items-center justify-around md:flex">
        <div className="z-50 flex w-full justify-between p-5 md:w-auto">
          <img
            className="h-10 md:cursor-pointer"
            src="https://i.ibb.co/KszKcVV/technical-support-removebg-preview.png"
            alt=""
            srcSet=""
          />
          <div className="text-4xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon
              name={`${open ? "close-sharp" : "menu-sharp"}`}
            ></ion-icon>
          </div>
        </div>
        <ul className="uppercase md:flex hidden items-center justify-around gap-8">
          <li>
            <b className="inline-block py-7 px-3">Home</b>
          </li>
          <NavLink />
        </ul>
        <div className="hidden md:block">
          <MyButton />
        </div>

        {/*  Mobile Navigation bar  */}
        <ul
          className={`absolute h-fit w-full bg-red-100 py-12 pl-4 uppercase duration-500 md:hidden ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <li className=" text-left">
            <b className="inline-block py-7 px-3">Home </b>
          </li>
          <div>
            <NavLink />
          </div>
          <div className="py-5">
            <MyButton />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
