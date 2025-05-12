"use client"
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editUser, removeUser } from '../redux/Slice';

const Displayuser = ({setname,isedit,setisedit}) => {

const display = useSelector((data)=>data.users);

const dispatch = useDispatch();


console.log(isedit)


const edit = (product)=>{
  
if(isedit){
        alert("Please finish the current edit first.");
return;
}

      setname(product.name),

//dispatch(removeUser(product.id)),

setisedit(product.id)


}




  return (



    <>
    
    <h1>USERS </h1>

    <div>


{

display.map((product,id)=>{


return(
  <div className='flex items-center gap-40 p-3 pl-1' key={id}>
  <h1>{product.name}</h1>
  <button className='bg-red-500 p-1 rounded' onClick={()=>dispatch(removeUser(product.id) )}>
    
    Remove</button>
  <button className='bg-red-500 p-1 rounded'
  
  
  
  onClick={()=>
    edit(product)
    }
    
    
    >Edit</button>
  
  
  </div>
)
})


}



    </div>
    
    
    
    
    </>
  )
}

export default Displayuser