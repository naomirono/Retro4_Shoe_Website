import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function Product1() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      fetch(`http://127.0.0.1:3000/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }, [id]);
  
    if (!product) {
      return <div>Loading...</div>;
    }

  if (!product) {
    return <div>Loading...</div>;
  }
  

  return (
    <div className="flex flex-wrap justify-center py-8 max-w-[1240px] mx-auto ">
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4 flex">
      <div className=" p-4 flex-1 flex flex-col ">
        <div className="bg-white rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.description}
            className="w-full mb-4"
            style={{ transform: 'rotate(-30deg)' }}
          />
        </div>
        <h2 className="text-lg font-semibold mb-2 text-[#f2f3f4] text-center mt-10">
          {product.description}
        </h2>
        <div className="flex justify-center mt-auto ">
          <p className="text-gray-600">${product.price}</p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Product1;
