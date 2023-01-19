import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {sigIn, singIn} from  '../../Controllers/Redux/authRedux'


// eslint-disable-next-line import/no-anonymous-default-export
export default ()=>{
    const dispatch = useDispatch();
    const [formInput,setFormInput]=useState({
        name:"",
        password:"",
    })

    function inputChanged(event){
        setFormInput({
            ...formInput,
            [event.target.name]:event.target.value,
        })
    }

    function submit(event){
        dispatch(sigIn(formInput));
        event.preventDefault(); //pagina nu se va reload
    }
    
}


