  "use client"
  import products from "@/app/product";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


export default function ProductPage({ params }) {

const select = useSelector((data)=>data.products)





//  const  {slug} = params;

const [product, setproduct] = useState([])

useEffect(()=>{

const product = select.find((product,i)=>product.slug === params.slug)    

console.log(product)


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
