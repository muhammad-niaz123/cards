"use client";
import React, { useEffect, useState } from "react";
import products from "../../public/data/products";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Filter from "./components/Filter";

const page = () => {

  const [category, setcategory] = useState("all");

  const [filtered, setfiltered] = useState(products);


  
const [search , setsearch ] = useState("")


const [searchfilter    , setsearchfilter    ] = useState(products)


/*

useEffect(() => {
  let result = products;

  // Filter by category
  if (category !== "all") {
    result = result.filter(
      (product) =>
        product.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Filter by search
  if (search.trim() !== "") {
    result = result.filter((product) =>
      product.productName.toLowerCase().includes(search.toLowerCase())
    );
  }




  setfiltered(result);
}, [category, search]);


*/




useEffect(()=>{


const searchproduct = searchfilter.filter((product,i)=> product.productName.toLowerCase().includes(search.toLowerCase())




)

setfiltered(searchproduct)



} ,[search])




  useEffect(() => {
    if (category === "all") {
      setfiltered(products);
    } else {
      const filteredProducts = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      setfiltered(filteredProducts);
    }
  }, [category]);


console.log(search)




  return (


    <>

      <div className="    bg-amber-50   ">
        <Navbar   setsearch={setsearch}  search={search}           />

        <div className="flex items-center gap-6 justify-center  md:gap-10 w-[100%] md:mt-5 flex-wrap p-8 md:pl-15    text-xl     ">

          <Filter setcategory={setcategory}       />
          
        </div>

        <div className="flex  flex-wrap items-center w-[100%]  justify-around       ">
          {filtered.map((product, i) => (
            <div key={i}>
              <Products product={product} id={i} />
            </div>
          ))}
        </div>
      </div>
      
    </>


  );
};

export default page;
