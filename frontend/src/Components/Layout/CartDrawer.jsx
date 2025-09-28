import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const CartDrawer = ({drawerOpen, CartDawerToggle}) => {

  return(
    <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
      {/* close buttion */}
      <div className="flex justify-end p-4 ">
        <button onClick={CartDawerToggle}>
          <IoMdClose className="h-5 w-5 text-gray-600"/>
        </button>
      </div>
    </div>
  )
}

export default CartDrawer;