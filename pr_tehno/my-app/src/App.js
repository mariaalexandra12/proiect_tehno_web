
import React from 'react';
import Login from './View/LogIn/login';
import {useSelector} from 'react-redux'; //am folosit hookul useSelector pentru a prelua
import PagBug from './View/Bugs/Pag/pagBug';
import ViewBugs from './View/Bugs/viewBugs';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  const {auth}=useSelector(state=>state)
  return (
   <Router>
   {!auth.LoggedIn ?  <Login />:
    <>
       <PagBug />
      <ViewBugs />
    </>
    }
   </Router>
    
  );
}

export default App;
