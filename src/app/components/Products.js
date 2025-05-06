import React from "react";

const Products = ({ product, id }) => {
  return (
    <>
      <div className="p-10  pt-6  flex items-center                w-[100%] h-fit         ">
        <div className="  rounded    shadow-lg  ">
          <div
            key={id}
            className="bg-white rounded-lg overflow-hidden w-80 h-100  p shadow-lg hover:drop-shadow-xl/30 transition-all      hover:scale-[1.1]     cursor-pointer     duration-500        drop-shadow-xl/10      "
          >
            <img src={product.image} className="w-full h-80 object-cover " />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.productName}
              </h3>
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
