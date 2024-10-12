import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{user:null},
    reducers:{
        register:(state,action)=>{
            state.user = action.payload
        }
    }
})

export const {register} = authSlice.actions;
export default authSlice.reducer;