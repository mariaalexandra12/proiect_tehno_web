
import React from 'react';
import Login from './View/LogIn/login';
import {useSelector} from 'react-redux'; //am folosit hookul useSelector pentru a prelua
import authRedux from './Controllers/Redux/authRedux';
//info din input 

import Bugs from './View/Bugs'

function App() {
  const {auth}=useSelector(state=>state)
  return (
   <>
   {!auth.LoggedIn ? //verificam daca este logat 
    <Login />:
    <h1>Logat cu succes</h1> //va afisa un mesaj la conectare 
    }
   </>
    
  );
}

export default App;
