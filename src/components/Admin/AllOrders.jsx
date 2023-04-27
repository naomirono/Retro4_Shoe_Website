import React, { useState, useEffect } from "react";
import axios from "axios";
const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    async function fetchOrders() {
      const response = await axios.get("http://127.0.0.1:3000/bookings");

      setOrders(response.data);
    }
    fetchOrders();
  }, []);

  return (
    <div className="flex flex-wrap justify-around  items-center">
      {orders.map((order) => (
        <div
          key={order.product.id}
          className="w-full sm:w-1/2 text-center border-2 rounded-lg border-orange-400 lg:w-1/3  p-4 flex flex-col hover:scale-105 transition-all duration-500 cursor-pointer"
        >
          <div className="bg-white rounded-lg overflow-hidden">
            <img
              src={order.product.image}
              alt={order.product.description}
              className="w-full mb-4"
              style={{ transform: "rotate(-30deg)", height: "100%" }}
            />
          </div>
          <h2 className="text-lg font-semibold mb-2 text-[#f2f3f4] text-center mt-10">
            {order.product.description}
          </h2>
          <div className="flex justify-center mt-auto ">
            <p className="text-gray-600">${order.product.price}</p>
          </div>
          <div className="text-white">
            <p>User's Location : {order.location}</p>
            <p>User's Phone Number : {order.phone_number}</p>
            <p>User's Email : {order.user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllOrders;
