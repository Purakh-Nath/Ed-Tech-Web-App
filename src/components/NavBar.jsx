import React, { useState, useEffect, useRef, useContext } from "react";
import { AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import UserContext from "../context/UserContext";




function NavBar() {
  const [activeNavItem, setActiveNavItem] = useState('');
  const [nav, setNav] = useState(false);
  const isSmooth = true;
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setNav(false);
        // console.log(menuRef.current);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleNav = () => {
    setNav(!nav);

  };

  const {user} = useContext(UserContext)


  return (
    <div
      name="home"
      className="flex justify-between items-center h-24 max-w-[1240px] mx-auto  text-white bg-slate-800 min-w-full"
    >
      <h1 className="w-full text-3xl font-bold pl-7"> <NavLink to="/" className={`${activeNavItem === 'join-us' ? 'text-amber-100' : activeNavItem === 'classes' ? 'text-blue-500' : activeNavItem === 'products' ? 'text-[#F0E68C]' : activeNavItem === 'about' ? 'text-[#002CFF]': activeNavItem === 'check' ? 'text-[#FFD300]' : activeNavItem === 'user' ? 'text-[#35DB24]' : 'text-[#35DB24]'}`}>ED.TECH</NavLink></h1>
      <ul className="hidden md:flex  cursor-pointer">
        <li className="p-4 whitespace-nowrap hover:bg-[#FC766AFF] rounded-md font-bold">
          {" "}
          <NavLink to="/" smooth={isSmooth.toString()} duration={500} onClick={() => setActiveNavItem('join-us')}>
          JOIN US
          </NavLink>{" "}
        </li>
        <li className="p-4  hover:bg-[#FC766AFF] rounded-md"  onClick={() => setActiveNavItem('classes')}>
          <NavLink to="/classes" smooth={isSmooth.toString()} duration={500} >
            Classes
          </NavLink>
        </li>
        <li className="p-4 hover:bg-[#FC766AFF] rounded" onClick={() => setActiveNavItem('products')}>
          <NavLink to="/products" smooth={isSmooth.toString()} duration={500}>
            Products
          </NavLink>
        </li>
        <li className="p-4 whitespace-nowrap hover:bg-[#FC766AFF] rounded" onClick={() => setActiveNavItem('about')}>
          <NavLink to="/about" smooth={isSmooth.toString()} duration={500}>
             About Us
          </NavLink>
        </li>
        <li className="p-4 hover:bg-[#FC766AFF] rounded" onClick={() => setActiveNavItem('user')}>
          <NavLink to="/login" smooth={isSmooth.toString()} duration={500}>
          <FaUser size={20}/>
          </NavLink>
        </li>
        <li className="p-4 hover:bg-[#FC766AFF] rounded">

        {user ? (
  <NavLink to="/check" onClick={() => setActiveNavItem('check')}> <FaShoppingCart size={20}/> </NavLink>
) : (
  <div>  <FaShoppingCart size={20}/> </div>
)}

          {/* <NavLink to="Insight" smooth duration={500}>
          <FaShoppingCart size={20}/>
          </NavLink> */}
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-10"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
        ref={menuRef}
      >
        <h1 className="w-full text-3xl font-bold text-[#ffc519] m-4">
        KARO ABHAYAAS
        </h1>
        <li className="p-4 border-b border-gray-600">
          {" "}
          <NavLink to="/" smooth={isSmooth.toString()} duration={500}>
            JOIN US
          </NavLink>
        </li>
        <li className="p-4 border-b border-gray-600">
          <NavLink to="/classes" smooth={isSmooth.toString()} duration={500}>
            Classes
          </NavLink>
        </li>
        <li className="p-4 border-b border-gray-600">
          <NavLink to="/products" smooth={isSmooth.toString()} duration={500}>
            Products
          </NavLink>
        </li>
        <li className="p-4 border-b border-gray-600">
          <NavLink to="/about" smooth={isSmooth.toString()} duration={500}>
            About Us
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink to="/login" smooth={isSmooth.toString()} duration={500}>
          <FaUser size={20}/>
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink to="Insight" smooth={isSmooth.toString()} duration={500}>
          <FaShoppingCart size={20}/>
          </NavLink>
        </li>

      </ul>
    </div>
  );
}

export default NavBar;