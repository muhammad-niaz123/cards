"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userapi } from '../redux/Slice';

const page = () => {


const dispatch = useDispatch()
const data = useSelector((data)=>data.userapidata)



useEffect(()=>{

dispatch(userapi())


},[])



  return (
    <>
    <div className='text-black p-10'>
    <h1 className='text-3xl uppercase font-bold'>user list from api</h1>
   


{

data.map((user)=>{
    return(
<h1>{user.title}</h1>
    )
})





}




</div>




    </>
  )
}

export default page