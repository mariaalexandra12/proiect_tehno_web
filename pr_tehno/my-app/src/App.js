
import React from 'react';
import Login from './View/LogIn/login';
import {useSelector} from 'react-redux'; //am folosit hookul useSelector pentru a prelua
import authRedux from './Controllers/Redux/authRedux';
import PagBug from './View/Bugs/pagBug';


const va=[];
function App() {
  const {auth}=useSelector(state=>state)
  return (
   <>
   {!auth.LoggedIn ? //verificam daca este logat 
    <Login />:
    <PagBug /> //va afisa un mesaj la conectare 
    }
   </>
    
  );
}

export default App;
