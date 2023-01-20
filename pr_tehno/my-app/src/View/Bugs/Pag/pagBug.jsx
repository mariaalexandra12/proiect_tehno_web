import React from 'react';
import './pagBugs.css'
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {SignOut, sigOut} from '../../../Controllers/Redux/authRedux'

// eslint-disable-next-line import/no-anonymous-default-export
export default ()=> {
  const dispatch = useDispatch();
  const{auth}=useSelector(state=>state);
  function SignOut(){
    dispatch(sigOut());
  }
     return (
         <div className="pagBug">
          <Link className="link" to="/"><h1>Bug Tracking</h1></Link>
           <ul>
            <li><Link to='/viewbugs' className="link">View bugs</Link></li>
            {auth.admin && <li><Link to='/create' className="link">Create Bug</Link></li>}
           </ul>
           <button className="logout" onClick={SignOut}>Logout</button>
         </div>
         
     )

}