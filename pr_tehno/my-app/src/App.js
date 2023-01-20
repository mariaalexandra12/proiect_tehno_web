
import React from 'react';
import Login from './View/LogIn/login';
import {useSelector} from 'react-redux'; //am folosit hookul useSelector pentru a prelua
import PagBug from './View/Bugs/Pag/pagBug';
import ViewBugs from './View/Bugs/viewBugs';


function App() {
  const {auth}=useSelector(state=>state)
  return (
   <>
   {!auth.LoggedIn ? //verificam daca este logat 
    <Login />:
    <>
    <PagBug /> //se va deschide alta pagina cu Bug Details
    <ViewBugs/>
    </>
    }
   </>
    
  );
}

export default App;
