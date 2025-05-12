"use client"
const { createSlice, nanoid,current, createAsyncThunk } = require("@reduxjs/toolkit");
import products from "../product";

const initialState ={
    users:JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[],
    products:JSON.parse(localStorage.getItem("products")),
    userapidata:[]
}







export const userapi = createAsyncThunk("userapi",async ()=>{
    const data = await fetch("https://jsonplaceholder.typicode.com/photos")
    return data.json();
});



const slice = createSlice({
    name:"adduser",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            
            const data ={

                id:nanoid(),
                name:action.payload
            }
            state.users.push(data)
            localStorage.setItem("users",JSON.stringify(current(state.users)))
        },

        removeUser:(state,action)=>{
const data = state.users.filter((item)=>{
    return item.id!=action.payload
})
localStorage.setItem("users", JSON.stringify(data));
state.users=data;


        },
        addProduct:(state,action)=>{
        
            const data = {
                id:nanoid(),
                productName:action.payload.productName,
                image:action.payload.image,
                category:action.payload.category,
                slug: slugify(action.payload.productName),
            }
                state.products.unshift(data)
                        localStorage.setItem("products",JSON.stringify(current(state.products)))

         
             
             
        },

          editUser: (state, action) => {
  const { id, name } = action.payload;
  const user = state.users.find((u) => u.id === id);
  if (user) {
    user.name = name;
  }

  localStorage.setItem("users", JSON.stringify(current(state.users)));



}

    },
    extraReducers:(builder)=>{

builder.addCase(userapi.fulfilled,(state,action)=>{
    state.isLoading=false,
    state.userapidata=action.payload
})



    }
})


const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  };

export const {addUser,removeUser,addProduct,editUser} = slice.actions;
export default slice.reducer;