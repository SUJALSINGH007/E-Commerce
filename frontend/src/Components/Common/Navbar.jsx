import { Link } from "react-router-dom";
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Navbar = () =>{

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toogleNavDrawer = () =>{
    setNavDrawerOpen(!navDrawerOpen);
  }

  const CartDawerToggle = () =>{
    setDrawerOpen(!drawerOpen);
  }

return(
  <>
    <nav className="container mx-auto flex items-center justify-between py-4 px-6">
      <div>
        <Link to="/" className=""><img
            src="/vite.svg"
            alt="Manchester United Logo"
            className="h-10 w-auto"
          /></Link>
      </div>
      <div className=" hidden md:flex space-x-6">
        <Link to="#"
        className="text-gray-700 hover:text-black text-sm font-medium uppercase"
        >T-shirt</Link>
        <Link to="#"
        className="text-gray-700 hover:text-black text-sm font-medium uppercase"
        >pants</Link>
        <Link to="#"
        className="text-gray-700 hover:text-black text-sm font-medium uppercase"
        >kit</Link>
        <Link to="#"
        className="text-gray-700 hover:text-black text-sm font-medium uppercase"
        >originals</Link>
      </div>

      <div className="flex items-center space-x-4">
        <Link to="/" className="hover:text-black">
        <HiOutlineUser className="h-5 w-5 text-gray-700" />
        </Link>

        <button  onClick={CartDawerToggle} className="relative hover:text-black">
          <HiOutlineShoppingBag className="h-5 w-5 text-gray-700 hover:cursor-pointer"/>
          <span className="absolute -top-1 bg-manu-red text-white text-xs rounded-full px-2 py-0.5 hover:cursor-pointer">2</span>
        </button>

        {/* {search} */}
        <div className="overflow-hidden ">
          <SearchBar />
        </div>

        <button onClick={toogleNavDrawer} className="md:hidden ">
        <HiBars3BottomRight className="h-6 w-6 text-gray-700 hover:cursor-pointer" />
        </button>
      </div>
    </nav>

    <CartDrawer drawerOpen={drawerOpen} CartDawerToggle={CartDawerToggle} />

    {/* Mobile Navigation */}
    <div className={`fixed h-full top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3  bg-white shadow-lg transform transition-transform duration-300 z-50 ${navDrawerOpen ? "translate-x-0":"-translate-x-full"}`}>
      <div  className="flex justify-end p-4">
        <button onClick={toogleNavDrawer}>
          <IoMdClose className="h-6 w-6 text-gray-600"/>
        </button>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4 text-center">Menu</h2>
        <nav className="space-y-4">
            <Link to="#"
            onClick={toogleNavDrawer}
            className="block text-gray-600 hover:text-black  uppercase ">T-shirt</Link>

            <Link to="#"
            onClick={toogleNavDrawer}
            className="block text-gray-600 hover:text-black uppercase">pants</Link>

            <Link to="#"
            onClick={toogleNavDrawer}
            className="block text-gray-600 hover:text-black uppercase">kit</Link>

            <Link to="#"
            onClick={toogleNavDrawer}
            className="block text-gray-600 hover:text-black uppercase">originals</Link>
        </nav>
      </div>
    </div>
    </>
  )
}

export default Navbar;