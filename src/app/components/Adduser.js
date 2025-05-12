"use client"
import React, { useState } from 'react'
import Displayuser from './Displayuser'
import { addUser, editUser } from '../redux/Slice'
import { useDispatch } from 'react-redux'




const Adduser = () => {

  
const [name, setname] = useState("")

const dispatchuser =  useDispatch();

const [isedit, setisedit] = useState(null); 


const handlesubmit = ()=>{

  if (name.trim() === "") return;

  if(isedit){
    dispatchuser(editUser({
      id:isedit,
      name:name
    })
  );
  setisedit(null)

  }
else{
dispatchuser(addUser(name))

}
setname("")
}









  return (
    <>


<div className='w-[100%] p-[7%] flex  border-black border-1' >





<div className=' flex flex-col w-[50%]  items-start gap-10'>

<input placeholder='enter user name'

value={name}

onChange={(e)=>{
    setname(e.target.value)
}}

className='p-3 rounded outline-none border-none bg-black/80'    />


<button onClick={handlesubmit} className='bg-black/80 p-2 rounded'>Add a User</button>



</div>








<div className='w-[50%] bg-black/80 rounded p-5 '>



<Displayuser setname={setname}  setisedit={setisedit} isedit={isedit}  />


</div>






</div>







    </>
  )
}

export default Adduser