import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";

const CartDrawer = ({drawerOpen, CartDawerToggle}) => {

  return(
    <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
      {/* close buttion */}
      <div className="flex justify-end p-4 ">
        <button onClick={CartDawerToggle}>
          <IoMdClose className="h-6 w-6 text-gray-600 hover:cursor-pointer"/>
        </button>
      </div>

        {/* cart contents with scrolleable area */}
      <div className="flex-grow p-4 overflow-y-auto  ">
        <h2 className="text-xl font-semibold text-center">Your Cart</h2>
        {/* Components for cart contaents */}
        <CartContents />
      </div>

      {/* Checkout buttion fixed at the bottom */}
      <div className="p-4 bg-white sticky bottom-0">
        <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-200 hover:text-black transition">Checkout</button>
        <p className="text-xs tracking-tighter text-gray-500 text-center mt-2">
          Shipping, taxes, and discount codes calculated at checkout.</p>
      </div>

    </div>
  )
}

export default CartDrawer;