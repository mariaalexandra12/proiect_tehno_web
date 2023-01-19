import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {singIn} from  '../../Controllers/Redux/authRedux'


// eslint-disable-next-line import/no-anonymous-default-export
export default ()=>{
    const dispatch = useDispatch();
    const [formInput,setFormInput]=useState({
        name:"",
        password:"",
    })
}
