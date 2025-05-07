import React, { useEffect, useState } from 'react'

const Navbar = ({ search,   setsearch }) => {







  return (
<>



<div className='flex items-center  space-between  uppercase  text-[22px] lg:text-[25px] gap-5  drop-shadow-xl/50       
     relative   bg-black/70  navbar     shadow-lg  p-7 pt-4 pb-4 lg:flex-row    md:pl-17 flex-col'

>

<div  className='w-[100%] lg:w-[50%] lg:justify-between  flex items-center justify-between             '      >


<h2>home </h2>
<h2>about   </h2>
<h2>products   </h2>



</div>



<div   className='lg:w-[50%] w-[100%]   pr-1 lg:flex lg:justify-end '           >

<input 

value={search}


onChange={(e)=>(


setsearch(e.target.value)


) }



placeholder='enter any product...     '   className='outline-none w-[100%]  lg:w-[60%]  rounded border-white  border-1     p-1 pl-2    text-[20px]              '                 />

</div>



</div>






</>
  )
}

export default Navbar 