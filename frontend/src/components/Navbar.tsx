import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { FaBookOpenReader } from "react-icons/fa6";
import avatarImg from "../assets/avatar.png";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/user-dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const currentUser = true;
  const token = true;
  const cartItems = [];

  return (
    <header className="px-4 py-6 mx-auto max-w-screen-2xl">
      <nav className="flex items-center justify-between">
        {/* left side */}
        <div className="flex items-center gap-4 md:gap-16">
          <Link
            to="/"
            className="p-2 transition-colors rounded hover:bg-yellow-300"
          >
            <FaBookOpenReader size={24} />
          </Link>

          {/* search input */}
          <div className="relative w-36 sm:w-72">
            <IoSearchOutline className="absolute inline-block inset-y-2 left-2" />

            <input
              type="text"
              placeholder="Search here"
              className="w-full rounded-md bg-[#EAEAEA] py-1 pl-8 focus:outline-none md:pl-10"
            />
          </div>
        </div>

        {/* right side */}
        <div className="relative flex items-center gap-2">
          {currentUser ? (
            <>
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <img
                  src={avatarImg}
                  alt="Avatar User"
                  className={cn(
                    "size-8 rounded-full",
                    currentUser && "ring-blue-500",
                  )}
                />
              </button>
              
              {/* show dropdowns */}
              {isDropdownOpen && (
                <div className="absolute right-0 z-10 w-48 mt-2 bg-white border rounded-md shadow-lg top-9">
                  <ul className="py-2">
                    {navigation.map((item) => (
                      <li
                        key={item.name}
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <Link
                          to={item.href}
                          className="block px-4 py-2 text-sm hover:bg-gray-200"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <button
                        onClick={() => {
                          console.log("Logout");
                        }}
                        className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-200"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </>
          ) : token ? (
            <Link to="/dashboard" className="border-b-2 border-primary">
              Dashboard
            </Link>
          ) : (
            <Link to="/login">
              {" "}
              <HiOutlineUser size={24} />
            </Link>
          )}

          <button className="hidden sm:block">
            <HiOutlineHeart size={24} />
          </button>

          <Link
            to="/cart"
            className="flex items-center gap-1 p-1 px-2 rounded-sm bg-primary"
          >
            <HiOutlineShoppingCart size={24} />
            {cartItems.length > 0 ? (
              <span className="text-sm font-semibold">{cartItems.length}</span>
            ) : (
              <span className="text-sm font-semibold">0</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
