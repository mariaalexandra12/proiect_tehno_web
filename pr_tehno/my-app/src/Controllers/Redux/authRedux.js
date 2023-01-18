import {createSlice} from '@reduxjs/toolkit'

const slice=createSlice({
    name: 'auth',
    initialState:{
        admin:false,
        LoggedIn:false
    },
    reducers:{
        sigIn:(state,action)=>{
            const{name,password}=action.payload;
            state.LoggedIn=true;
            state.admin=true;
        },
        sigOut:(state,action)=>{
            state.LoggedIn=false;
            state.admin=false;
        },
        createUser:(state,action)=>{
            
        }
    }
})

export default slice.reducer;

export const{sigIn,sigOut,createUser}=slice.actions;