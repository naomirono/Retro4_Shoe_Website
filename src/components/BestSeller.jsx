import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Autoplay]);


const BestSeller = () => {
  const [products, setProducts] = useState([]);
  const [swiperProducts, setSwiperProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchProducts = async () => {
    const response = await axios.get(`http://127.0.0.1:3000/products?page=${pageNumber}`);
    setProducts(response.data);

    setSwiperProducts(response.data.slice(0, 9));
  };

  useEffect(() => {
    fetchProducts();
  }, [pageNumber]);

  const Pagination = ({ pageNumber, setPageNumber }) => {
    const handlePrevPage = () => {
      setPageNumber(pageNumber - 1);
    };

    const handleNextPage = () => {
      setPageNumber(pageNumber + 1);
    };

  };

  return (
    <div className="container mx-auto mt-8">
     

     <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
<Swiper
    className="mt-8"
    slidesPerView={3}
    spaceBetween={20}
    navigation={false}
    loop={true}
    autoplay={{ delay: 5000, disableOnInteraction: false }}
>
  {products.map((product) => (
    <SwiperSlide key={product.id}>
      <div className=" shadow-md p-4 rounded-lg bg-white mt-20">
        <img src={product.image} alt={product.name} className="w-full " style={{ transform: "rotate(-30deg)", height: "100%" }}/>
       
        <p className="text-lg font-bold text-center">{product.description}</p>
        <p className="text-yellow-500 font-bold mt-4 text-center">${product.price}</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

    </div>
  );
};

export default BestSeller;
