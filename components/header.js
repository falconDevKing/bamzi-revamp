import React, { useState } from "react";
import {
  IoIosCart,
  IoIosClose,
  IoIosHeartEmpty,
  IoIosMenu,
  IoIosSearch,
} from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

const Header = ({ pryNav, secNav, bg }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${bg ? "bg-bgcolors" : "bg-white shadow-lg"}`}>
      <div className="w-full md:px-6 lg:px-24 px-4 ">
        <div className="flex w-full lg:justify-between">
          <div className="flex w-full justify-between lg:justify-start items-center">
            {/**Website Brand*/}
            <div>
              <Link href="/">
                <a>
                  <Image
                    src={require("../assets/BAMZI.png")}
                    className="lg:w-16 w-20"
                    alt="bamzi"
                    width={120}
                    height={60}
                  />
                </a>
              </Link>
            </div>

            {/**menu */}
            {pryNav || secNav ? (
              <div className="relative lg:hidden items-center flex justify-end">
                <button className="w-6 h-6" onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? <IoIosClose size={24} /> : <IoIosMenu size={24} />}
                </button>

                {isOpen && (
                  <div className="origin-top-right absolute top-0 right-0 mt-8 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-50">
                    <div className="py-1 text-sm text-gray-700 hover:bg-primary hover:text-white">
                      <Link
                        href="/my-account"
                        className="items-center px-4 py-2 "
                      >
                        My Account
                      </Link>
                    </div>
                    <div className="py-1 text-sm text-gray-700 hover:bg-primary hover:text-white">
                      <Link
                        href="/dashboard"
                        className="items-center px-4 py-2 "
                      >
                        Products
                      </Link>
                    </div>
                    <div className="py-1 text-sm text-gray-700 hover:bg-primary hover:text-white">
                      <Link
                        href="/sellers-store"
                        className="items-center px-4 py-2 "
                      >
                        Store
                      </Link>
                    </div>
                    <div className="py-1 text-sm text-gray-700 hover:bg-primary hover:text-white">
                      <Link
                        href="/wishlist"
                        className="items-center px-4 py-2 "
                      >
                        Wishlist
                      </Link>
                    </div>
                    <div className="py-1 text-sm text-gray-700 hover:bg-primary hover:text-white">
                      <Link
                        href="/Shopping-Cart"
                        className="items-center px-4 py-2 "
                      >
                        Cart
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              ""
            )}

            {/**Primary Nav Items */}

            {pryNav === "auth" && (
              <div className="hidden lg:flex items-center py-4 ml-10 space-x-10">
                <Link
                  href="/sellers-board"
                  className="text-primary hover:text-gray-400 font-bold"
                >
                  Products
                </Link>
                <Link
                  href="/sellers-store"
                  className="text-primary hover:text-gray-400 font-bold"
                >
                  Stores
                </Link>
                <Link
                  href="/"
                  className="text-primary hover:text-gray-400 font-bold"
                >
                  Pricing
                </Link>
                <Link
                  href="/"
                  className="text-primary hover:text-gray-400 font-bold"
                >
                  Features
                </Link>
              </div>
            )}

            {pryNav === "user" && (
              <div className="hidden lg:flex items-center ml-10 space-x-2">
                <Link
                  href="/sellers-board"
                  className="text-primary hover:text-gray-400 font-semibold"
                >
                  Products
                </Link>
                <Link
                  href="/sellers-store"
                  className="text-primary hover:text-gray-400 font-semibold"
                >
                  Stores
                </Link>
                <form action="">
                  <div className="relative mb-3 flex items-center text-gray-400 focus-within:text-gray-600">
                    <input
                      type="text"
                      name="search"
                      placeholder="Search anything"
                      autoComplete="off"
                      aria-label="Search anything"
                      className="px-3 py-2 placeholder:text-gray-500 text-black border-none rounded-2xl ring-2 ring-gray-200 focus:ring-gray-500 focus:ring-2"
                    />
                    <IoIosSearch className="w-5 h-5 absolute right-2" />
                  </div>
                </form>
              </div>
            )}
          </div>

          {/**secondary nav items */}
          {secNav === "auth" && (
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                href="/Shopping-Cart"
                className="flex text-primary hover:text-gray-400 font-bold"
              >
                <a>
                  <span className="mr-1">Cart</span>
                  <IoIosCart className="w-5 h-5" />
                </a>
              </Link>
              <Link
                href="/login"
                className="flex hover:text-gray-400 font-bold"
              >
                <a>
                  <span className="mr-1 border py-1 px-3 rounded-md border-yellow-500">
                    Login
                  </span>
                </a>
              </Link>
            </div>
          )}

          {secNav === "prelaunch" && (
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                href=""
                className="flex text-primary hover:text-gray-400 font-semibold p-0"
              >
                Contact Us
              </Link>
              <Link href="" className="p-0">
                <a>
                  <span className="text-primary hover:text-gray-400 font-semibold">
                    Features
                  </span>
                </a>
              </Link>
            </div>
          )}

          {secNav === "user" && (
            <div className="hidden lg:flex items-center">
              <Link
                href="/wishlist"
                className="flex text-primary hover:text-gray-400 font-semibold"
              >
                <a>
                  <span className="mr-1">Wishlist</span>
                  <IoIosHeartEmpty className="w-5 h-5" />
                </a>
              </Link>
              <Link
                href="/shopping-cart"
                className="flex text-primary hover:text-gray-400 font-semibold"
              >
                <a>
                  <span className="mr-1">Cart</span>
                  <IoIosCart className="w-5 h-5" />
                </a>
              </Link>

              <Link href="/my-account">
                <a>
                  <Image
                    src={require("../assets/avatar-0.jpg")}
                    alt=""
                    className="rounded-full shadow-sm w-36  object-contain aspect-square"
                  />
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
