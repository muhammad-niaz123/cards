import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/Slice'
import Displaynewproduct from './Displaynewproduct'

const Addproduct = () => {


const [productName, setproductName] = useState("")
const [image, setimage] = useState("")
const [category, setcategory] = useState("")

const dispatch = useDispatch();

const handlesubmit = (e)=>{

    e.preventDefault();


    if (!productName || !image || !category) {
        alert("All fields are required!");
        return;
      }
      

dispatch(
    addProduct({
        productName,
        image,
        category
    } )
)



console.log(e)


    setproductName("");
    setimage("");
    setcategory("");

}




  return (
    <>
    
<div className='w-[100%] '>


    <form 
    onSubmit={handlesubmit}
    className=' flex items-center justify-center gap-5 p-5 bg-black/80'>


<input
onChange={(e)=>setproductName(e.target.value)}
value={productName}
className=' w-fit p-2 rounded
outline-none border-white border-1' placeholder='enter product name' />




<input
onChange={(e)=>setimage(e.target.value)}
value={image}
className=' w-fit p-2 rounded
outline-none border-white border-1' placeholder='enter image url' />



<input
onChange={(e)=>setcategory(e.target.value)}
value={category}
className=' w-fit p-2 rounded
outline-none border-white border-1' placeholder='enter category ' />




<button className='bg-white text-black p-2 rounded'>Add Product</button>






    </form>
    
    
    </div>

    

    
    
    
    </>
  )
}

export default Addproduct