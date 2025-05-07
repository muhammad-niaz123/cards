  "use client"
  import products from "@/app/product";
import { useEffect, useState } from "react";


export default function ProductPage({ params }) {
//  const  {slug} = params;

const [product, setproduct] = useState([])

useEffect(()=>{

const product = products.find((product,i)=>product.slug === params.slug)    


setproduct(product)
},[params.slug])

 
  return (
    <div className="p-8">
     <h1 className=" text-black">  {product.productName}   </h1>
     <div className="w-[40%] h-[70%]">
     <img
            src={product.image}
            alt={product.productName || "Product image"}
            
            className="w-full h-full  object-cover"
          />
          </div>
    </div>
  );
}
