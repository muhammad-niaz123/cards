import React from "react";

const Filter = ({ setcategory }) => {
  return (
    <>
      <button
        className=" bg-black/70      md:p-3 rounded  p-2   drop-shadow-xl/50        cursor-pointer    "
        onClick={() => setcategory("men")}
      >
        {" "}
        MENS{" "}
      </button>

      <button
        className="  bg-black/70 md:p-3 rounded p-2   drop-shadow-xl/50    cursor-pointer     "
        onClick={() => setcategory("women")}
      >
        {" "}
        WOMENS{" "}
      </button>

      <button
        className="bg-black/70 md:p-3 rounded p-2   drop-shadow-xl/50      cursor-pointer      "
        onClick={() => setcategory("kids")}
      >
        {" "}
        KIDS{" "}
      </button>

      <button
        className="bg-black/70 md:p-3 rounded p-2  drop-shadow-xl/50          cursor-pointer      "
        onClick={() => setcategory("all")}
      >
        {" "}
        ALL{" "}
      </button>
    </>
  );
};

export default Filter;
