  "use client";
  import React, { useEffect, useState } from "react";
import products from "./product";
  import Navbar from "./components/Navbar";
  import Products from "./components/Products";
  import Filter from "./components/Filter";
import Adduser from "./components/Adduser";
import Addproduct from "./components/Addproduct";
import { useSelector } from "react-redux";

  const page = () => {


    const data = useSelector((data)=>data.products)

    


    const [category, setcategory] = useState("all");

    const [filtered, setfiltered] = useState(data);

    
  const [search , setsearch ] = useState("")


  const [searchfilter    , setsearchfilter    ] = useState(data)

  

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


  const searchproduct = data.filter((product,i)=> product.productName.toLowerCase().includes(search.toLowerCase())




  )

  setfiltered(searchproduct)



  } ,[search,data])




    useEffect(() => {
      if (category === "all") {
        setfiltered(data);
      } else {
        const filteredProducts = data.filter(
          (product) => product.category.toLowerCase() === category.toLowerCase()
        );
        setfiltered(filteredProducts);
      }
    }, [category,data]);


  console.log(search)




    return (


      <>

        <div className="    bg-amber-50   ">

          <Navbar   setsearch={setsearch}  search={search}           />

          <Adduser/>

          <Addproduct/>

          <div className="flex items-center gap-6 justify-center  md:gap-10 w-[100%] md:mt-5 flex-wrap p-8 md:pl-15    text-xl     ">


            <Filter setcategory={setcategory}       />
            
          </div>

      

          <div className="flex  flex-wrap items-center w-[100%]  justify-center  gap-4       ">
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
