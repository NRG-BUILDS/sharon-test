import { Link } from "react-router-dom";
import logo from "../assets/images/logos/logo.png";
import Icons from "./Icons";
import React, { useEffect, useState } from "react";
import { getImgUrl } from "../utils";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { list } = useSelector((state: any) => state.cartList);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="shrinkable  duration-150 flex justify-between items-center p-4 md:p-4 shadow-md md:shadow-none">
        <div className="md:hidden">
          <button
            onClick={() => {
              if (isNavOpen) {
                setIsNavOpen(false);
              } else {
                setIsNavOpen(true);
              }
            }}
            className="w-12 h-12"
          >
            {!isNavOpen && <i className="fa-solid fa-bars text-2xl"></i>}
            {isNavOpen && <i className="fa-solid fa-close text-2xl"></i>}
          </button>
        </div>
        <div className="logo">
          <img src={logo} alt="" className="h-16" />
        </div>
        <div className="hidden md:block w-2/4 relative">
          <div className="absolute top-1/2 right-4 -translate-y-1/2">
            <Icons name={"icon-search.png"} style={"w-6"} />
          </div>
        </div>
        <div className="flex gap-4">
          <Link to="/cart">
            <div className="flex gap-2 items-end">
              <div className="relative">
                <Icons name={"icon-cart.svg"} style={"w-7"} />
                {list.length != 0 && (
                  <span className="absolute -top-3 -right-3 bg-Green rounded-full flex justify-center items-center w-6 aspect-square text-white text-xs">
                    {list.length}
                  </span>
                )}
              </div>
              <span className="hidden md:block">Cart</span>
            </div>
          </Link>

          <div className="flex gap-2 items-end">
            <Icons name={"icon-user.svg"} style={"w-7"} />
            <span className="hidden md:block">Account</span>
          </div>
        </div>
      </div>

      <div className="bg-Red text-white p-4 py-2 hidden md:flex justify-between items-center w-full">
        <div className="flex gap-4 items-center">
          <button className="font-bold h-full p-2 px-4 bg-yellow-400 text-white rounded-md flex items-center justify-center gap-2">
            Trending Categories
          </button>
          <div>
            <Link to="/">
              <span className="font-bold">Home</span>
            </Link>
          </div>
          <div>
            <Link to="/">
              <span className="font-bold">Store</span>
            </Link>
          </div>
          <div>
            <Link to="/">
              <span className="font-bold">Contact</span>
            </Link>
          </div>
          <div>
            <Link to="/signin">
              <span className="font-bold">Login</span>
            </Link>
          </div>
        </div>
        <div className=" flex gap-2 items-center">
          <Icons name={"icon-headphone-white.svg"} style={"w-8 h-8"} />
          <div>
            <span className="block text-xl font-bold leading-tighter">
              +234-803-391-9357
            </span>
            <span>24/7 Support Center</span>
          </div>
        </div>
      </div>
      {isNavOpen && (
        <Mobilenav toggled={isNavOpen} setIsNavOpen={setIsNavOpen} />
      )}
    </nav>
  );
};

const Mobilenav = ({
  toggled,
  setIsNavOpen = () => {
    return;
  },
}) => {
  const [showCat, setShowCat] = useState(false);

  return (
    <div
      className={
        "bg-white h-screen  transition-all duration-200 overflow-hidden " +
        (toggled ? "w-full p-6 z-50" : "w-0 p-0 -z-40")
      }
    >
      <div className="py-6">
        <div className="relative">
          <div className="absolute top-1/2 right-4 -translate-y-1/2">
            <Icons name={"icon-search.png"} style={"w-6"} />
          </div>
        </div>
        <Link to="/" onClick={() => setIsNavOpen(false)}>
          <div className="border-b py-4 font-bold">
            <span>Home</span>
          </div>
        </Link>
        <div
          onClick={() => {
            showCat ? setShowCat(false) : setShowCat(true);
          }}
          className="block w-full relative"
        >
          <div className="border-b py-4 font-bold active:bg-gray-300">
            <span>
              Categories <i className="fa-solid fa-caret-down ml-2"></i>
            </span>
          </div>
        </div>
        <Link to="/" onClick={() => setIsNavOpen(false)}>
          <div className="border-b py-4 font-bold">
            <span>Stores</span>
          </div>
        </Link>
      </div>
      <div className="mt-8 border rounded-lg p-4">
        <Link to="/">
          <div className=" py-2 flex items-center gap-2">
            <img
              src={getImgUrl("icon-location.svg", "icons")}
              alt=""
              className="w-4"
            />
            <span>Contact</span>
          </div>
        </Link>

        <div className=" py-2 flex items-center gap-2">
          <img
            src={getImgUrl("icon-user.svg", "icons")}
            alt=""
            className="w-4"
          />
          <span>
            <Link to="/signin" onClick={() => setIsNavOpen(false)}>
              Log in
            </Link>
            /
            <Link to={"/signup"} onClick={() => setIsNavOpen(false)}>
              Sign Up
            </Link>
          </span>
        </div>

        <Link to="/">
          <div className=" py-2 flex items-center gap-2">
            <img
              src={getImgUrl("icon-contact.svg", "icons")}
              alt=""
              className="w-4"
            />
            <span>(+01) - 2345 - 6789</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
