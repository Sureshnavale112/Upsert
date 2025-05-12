import React from "react";
import { Link } from "react-router-dom";
import CertCardList from "../CertCardList/CertCardList";

const cartItems = [
  {
    id: 1,
    title: "Cloud Computing Professional Certificate",
    price: 6400,
    examSlot: "30 May 2024, 09:00 AM",
    imgSrc: "/assets/cart/carttop.png",
  },
  {
    id: 2,
    title: "Cloud Computing Professional Certificate",
    price: 6400,
    examSlot: "30 May 2024, 09:00 AM",
    imgSrc: "/assets/cart/carttop.png",
  },
];

const Cart = () => {
  const orderTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen p-6 bg-white">
      <a href="#" className="text-sm text-blue-700 mb-4 inline-block">HOME</a>
      <h1 className="text-3xl font-bold text-center mb-2">MY CART</h1>
      <p className="text-center text-lg text-blue-600 mb-8">REVIEW YOUR ORDER BEFORE CHECKOUT</p>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 border-b-gray-600 space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className=" rounded-lg p-4 flex items-start gap-4 shadow-sm">
              <img src={item.imgSrc} alt="Course" className="w-35 h-35 object-cover rounded" />
              <div>
                <h2 className="font-semibold text-lg">{item.title}</h2>
                <p className="text-sm text-gray-500 mb-2">
                  Maecenas lobortis tempus tellus non viverra. Nullam interdum...
                </p>
                <p className="text-lg font-semibold">Rs. {item.price.toFixed(2)}</p>
                <p className="text-sm mt-2">
                  <span className="font-medium">Selected Exam Slot:</span>{" "}
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                    {item.examSlot}
                  </span>
                  <button className="ml-2 text-blue-600 text-sm">✎</button>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/3  rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between text-sm mb-2">
              <span>{item.title}</span>
              <span>Rs. {item.price.toFixed(2)}</span>
            </div>
          ))}
          <hr className="my-4" />
          <div className="flex justify-between font-semibold text-lg">
            <span>Order Total</span>
            <span>Rs. {orderTotal.toFixed(2)}</span>
          </div>
          <Link to="/checkout">
          <button className="mt-6 w-full bg-blue-900 text-white py-2 rounded shadow-md hover:bg-blue-800">
          CHECKOUT
          </button>
          </Link>
        </div>
      </div>



      <div><CertCardList/></div> 
    </div>  

   
  );
}
export default Cart;


