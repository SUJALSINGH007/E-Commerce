import { useState } from "react";

const CartDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const CartDawerToggle = () =>{
    setDrawerOpen(!drawerOpen);
  }
  return(
    <div className={``}>

    </div>
  )
}

export default CartDrawer;