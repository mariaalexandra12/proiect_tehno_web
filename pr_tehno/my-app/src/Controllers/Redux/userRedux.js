import {createSlice} from '@reduxjs/toolkit'

const slice=createSlice({
    name:"user",
    initialState:[{}],
    reducers:{
        getUser:(state) =>{
            state.push({name:"Alexandra",})
            state.push({name:"Maria",})
        }
    }
})

export default slice.reducers;

export const{getUser}=slice.actions;