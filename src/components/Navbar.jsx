import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setnav] = useState(false);

  const handleNav = () => {
    setnav(!nav);
  };

  return (
    <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white bg-black">
      <h1 className="w-full text-3xl font-bold  text-yellow-500">Retro.</h1>
      <ul className="hidden md:flex">
        <Link to="/" className="p-4">
          {" "}
          Home
        </Link>
        <Link to="/Product" className="p-4">
          {" "}
          Product
        </Link>
        <Link to="/Featured" className="p-4">
          {" "}
          Featured
        </Link>
        <Link to="/Orders" className="p-4">
          {" "}
          Orders
        </Link>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "fixed let-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000] ease-in-out duration-700"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-yellow-500 m-4">
          Retro.
        </h1>

        <ul className=" uppercase p-4">
          <Link to="/" className="p-4 border-b border-gray-600">
            {" "}
            Home
          </Link>
          <Link to="/Product" className="p-4 border-b border-gray-600">
            {" "}
            Product
          </Link>
          <Link to="/" className="p-4 border-b border-gray-600">
            {" "}
            Reviews
          </Link>
          <Link to="/" className="p-4 border-b border-gray-600">
            {" "}
            Contact
          </Link>
          <Link to="/" className="p-4">
            {" "}
            Order
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
