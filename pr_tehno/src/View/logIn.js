import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import {signIn} from 'authReducer.js';

const dispatch=useDispatch();
const [formInput,setformInput] = useState({
    name:"",
    password:""
})

function inputChange(event) {
    setFormInput({
        ...formInput,
        [event.target.name]: event.target.value
    })
}

function submit(event) {
        dispatch(signIn(formInput));
}