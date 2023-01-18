const reducer = new Reducer({
    name:"autenti",
    initialState: {
        admin: false,
        LoggedIn: false,
    },
    reducers:{
        sigIn:(state, action)=>{ 
             const {name,password}=action.payload;
             state.LoggedIn=true;
             state.Admin=true;
        },
        signOut:(state,action)=>{
             state.LoggedIn=false;
             state.Admin=false;
        },
        createUser:(state, action)=>{
          
        }
    }
});

export const{sigIn,signOut,createUser}=authReducer;