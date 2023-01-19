import {createSlice} from '@reduxjs/toolkit'

const slice=createSlice({
    name:"user",
    initialState:[{}],
    reducers:{
        getUser:(state) =>{
            state.push({name:"Maria"})
            state.push({name:"Alexandra"})
        }
    }
})

export default slice.reducer;

export const{getUser}=slice.actions;