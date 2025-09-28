import { Link } from "react-router-dom";
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useState } from "react";

const Navbar = () =>{

  const [drawerOpen, setDrawerOpen] = useState(false);

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
        <Link to="/profile" className="hover:text-black">
        <HiOutlineUser className="h-5 w-5 text-gray-700" />
        </Link>

        <button  onClick={CartDawerToggle} className="relative hover:text-black">
          <HiOutlineShoppingBag className="h-5 w-5 text-gray-700 hover:cursor-pointer"/>
          <span className="absolute -top-1 bg-manu-red text-white text-xs rounded-full px-2 py-0.5 hover:cursor-pointer">2</span>
        </button>

        {/* {search} */}
        <div className="overflow-hidden">
          <SearchBar />
        </div>

        <button className="md:hidden ">
        <HiBars3BottomRight className="h-6 w-6 text-gray-700 hover:cursor-pointer" />
        </button>
      </div>
    </nav>

    <CartDrawer drawerOpen={drawerOpen} CartDawerToggle={CartDawerToggle} />
    </>
  )
}

export default Navbar;