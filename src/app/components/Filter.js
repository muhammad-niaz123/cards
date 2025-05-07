import React, { useState } from "react";

const Filter = ({ setcategory }) => {


const [active, setactive] = useState("all")


  return (
    <>
      <button
        className={` bg-black/70 ${ active === "men" ? "buttonactive" : "" }   md:p-3 rounded  p-2   drop-shadow-xl/50  
              cursor-pointer    `}
        onClick={() =>{ setcategory("men")
          setactive("men")
        }}
       
      >
        {" "}
        MENS{" "}
      </button>

      <button
        className={` bg-black/70 ${ active === "women" ? "buttonactive" : "" }   md:p-3 rounded  p-2   drop-shadow-xl/50  
        cursor-pointer    `}
        onClick={() =>{ setcategory("women")
          setactive("women")
        }}
      >
        {" "}
        WOMENS{" "}
      </button>

      <button
        className={` bg-black/70 ${ active === "kids" ? "buttonactive" : "" }   md:p-3 rounded  p-2   drop-shadow-xl/50  
        cursor-pointer    `}
        onClick={() =>{ setcategory("kids")
          setactive("kids")
        }}
      >
        {" "}
        KIDS{" "}
      </button>

      <button
        className={` bg-black/70 ${ active === "all" ? "buttonactive" : "" }   md:p-3 rounded  p-2   drop-shadow-xl/50  
        cursor-pointer    `}
        onClick={() =>{ setcategory("all")
          setactive("all")
        }}
      >
        {" "}
        ALL{" "}
      </button>
    </>
  );
};

export default Filter;
