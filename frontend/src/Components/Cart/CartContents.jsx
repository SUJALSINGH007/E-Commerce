import { RiDeleteBin2Line } from "react-icons/ri";
const CartContents = () => {

  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      colour: "Blue",
      quantity: 1,
      price: 1500,
      image: "https://picsum.photos/200?random=1"
    },
    {
      productId: 2,
      name: "shirt",
      size: "S",
      colour: "Blue",
      quantity: 1,
      price: 1200,
      image: "https://picsum.photos/200?random=2"
    },
    {
      productId: 3,
      name: "pant",
      size: "S",
      colour: "Blue",
      quantity: 1,
      price: 8999,
      image: "https://picsum.photos/200?random=8"
    },
    {
      productId: 2,
      name: "shirt",
      size: "S",
      colour: "Blue",
      quantity: 1,
      price: 1200,
      image: "https://picsum.photos/200?random=11"
    },
    {
      productId: 2,
      name: "shirt",
      size: "S",
      colour: "Blue",
      quantity: 1,
      price: 1200,
      image: "https://picsum.photos/200?random=5"
    },
    {
      productId: 2,
      name: "shirt",
      size: "S",
      colour: "Blue",
      quantity: 1,
      price: 1200,
      image: "https://picsum.photos/200?random=20"
    },
  ]
  return(
    <div>
      {
        cartProducts.map((product, index) => (
          <div key={index} className="flex items-start justify-between py-4 border-b ">
            <div className="flex items-start">
              <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"/>
              <div>
                <div>
                  <h3>{product.name}</h3>
                  <p className="text-sm text-gray-500">
                  Size:{product.size} | Colour:{product.colour}
                  </p>

                  <div className="flex items-center mr-2">
                    <button className="border rounded px-2 py-1  ">+</button>
                    <span className="mx-4 text-black">{product.quantity}</span>
                    <button className="border rounded px-2 py-1 ">-</button>
                  </div>
              </div>
              </div>
            </div>
            <div>
              <p>₹{product.price.toLocaleString()}</p>
              <button>
                <RiDeleteBin2Line className="h-6 w-6 mt-2 text-red-700"/>
              </button>
            </div>
          </div>
        )) }
    </div>
  );
};


export default CartContents;