
import React from 'react';
import Login from './View/LogIn/login';
import {useSelector} from 'react-redux'; //am folosit hookul useSelector pentru a prelua
import authRedux from './Controllers/Redux/authRedux';
//info din input 


function App() {
  const {}=useSelector(state=>state)
  return (
   <>
   {!authRedux.Login ? 
    <Login />:
    <h1>Logat cu succes</h1>}
   </>
    
  );
}

export default App;
