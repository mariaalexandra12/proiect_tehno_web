import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {sigIn} from  '../../Controllers/Redux/authRedux'
import '../LogIn/login.css'


// eslint-disable-next-line import/no-anonymous-default-export
export default ()=>{
   const dispatch=useDispatch();
   const [formInput,setformInput]=useState({
     name:"",
     password:""
   }) 

   function inputChange(event){
    setformInput({
        ...formInput,
        [event.target.name]:event.target.value
    })
   }

    function submit(event){
        dispatch(sigIn(formInput));
        event.preventDefault();//pagina nu se va reload
    }

    return(
        <div className="loginBG">
            <form className="log">
                <h1>LOG IN</h1>
                <input name="name" placeholder="Name" onChange={inputChange} 
                value={formInput.name}></input>
                <input name="password" placeholder="Password" onChange={inputChange} 
                value={formInput.password}></input>
                <button type="submit" onClick={submit}>LogIN</button>
            </form>
        </div>
    )
}

