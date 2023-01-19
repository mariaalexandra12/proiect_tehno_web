import React,{userState} from 'react';
import {useDispatch} from 'react-redux';
import {sigIn} from  '../../Controllers/Redux/authRedux'
import { useState } from 'react'
import './login.css'


export default ()=>{
   const dispatch=useDispatch();
   const [formInput,setformInput]=useState({
     name:"",
     password:""
   }) 

   function inputChange(event){
    setFormInput({
        ...formInput,
        [event.target.name]:event.target.value
    })
   }

    function submit(event){
        dispatch(sigIn(formInput));
    }

    return(
        <div className="loginBG">
            <form className="log">
                <h1>LOGIN</h1>
                <input name="username" placeholder="Username" onChange={} 
                value={}></input>
                <input name="password" placeholder="Password" onChange={} 
                value={}></input>
                <button type="submit" onClick={}>LogIN</button>
            </form>
        </div>
    )
}