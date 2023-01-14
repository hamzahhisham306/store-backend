import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
   name:'auth',
   initialState:{
    isLogin:false,
   },
   reducers:{
     setLogin(state){
      state.isLogin=true
    },
    setLogout(state){
        state.isLogin=false
    }
   }
});

export  const stateAuth=(state)=>state.auth;
export const {setLogin, setLogout}=auth.actions;
export default auth.reducer;
