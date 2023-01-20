import React,{useEffect,useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {getBugs} from '../../Controllers/Redux/bugRedux'
import Bugs from '../../View/Bugs/bug'

// eslint-disable-next-line import/no-anonymous-default-export
export default()=>{
    const [DISPLAY_BUG,SET_DISPLAY_BUG]=useState({
        name:"",
        isDisplayed:false
    }) 
    const dispatch=useDispatch();
    const {bugs}=useSelector(state=>state);

    useEffect(()=>{dispatch(getBugs());},[bugs.length<1])


   function BugClicked(name) {
      SET_DISPLAY_BUG({
        isDisplayed:!DISPLAY_BUG.isDisplayed,
        name:name,
      })
   }


    return (
        <div className="pag">
           {bugs.map((bug,key)=> {
               <Bugs key={key} bug={bug} clicked={BugClicked}/>
           })}
        </div>
    )
}

