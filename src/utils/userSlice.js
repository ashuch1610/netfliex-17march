import { createSlice } from "@reduxjs/toolkit";



 const userSlice =createSlice({
  name:"user",
  initialState: null,
  reducers:{
    addUser:(state , action)=>{
        return action.payload;
    },
    removeUser:(state , action)=>{

    return null;

    }
  }

})

//export default userSlice;
export const { addUser, removeUser } = userSlice.actions; // export the actions
export default userSlice.reducer; // export the reducer as default