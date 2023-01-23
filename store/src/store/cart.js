import { createSlice } from '@reduxjs/toolkit';

const cart = createSlice({
   name:'cart',
   initialState:{
    start:0,
   },
   reducers:{
     increase(state){
      state.start+=1
    },
    decrease(state){
        state.start-=1
    }
   }
});

export  const statecart=(state)=>state.cart;
export const {increase, decrease}=cart.actions;
export default cart.reducer;
