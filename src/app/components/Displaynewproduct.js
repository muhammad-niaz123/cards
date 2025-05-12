"use client"
import Link from 'next/link';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const Displaynewproduct = () => {

const dispatch = useDispatch();

const select = useSelector((data)=>data.products)



  return (
    <>


    <div className='bg-black  flex flex-wrap items-center justify-center '>

{
    select.map((product,id    )=>{
        return(
            <Link href={`/product/${product.slug}`}           >
            <div className="p-10 pt-6 flex items-center   h-fit">
      <div className="rounded shadow-lg">
        <div
          key={id}
          className="bg-white rounded-lg overflow-hidden w-80 h-100 shadow-lg hover:drop-shadow-xl/30 transition-all hover:scale-[1.1] cursor-pointer duration-500 drop-shadow-xl/10"
        >
          <img
            src={product.image}
            alt={product.productName || "Product image"}
            width={320}
            height={320}
            className="w-full h-80 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {product.productName}
            </h3>
            <p className="text-sm text-gray-500">{product.category}</p>
          </div>
        </div>
      </div>
    </div>
    </Link>
        )
    })
}



    </div>


    </>
  )
}


export default Displaynewproduct