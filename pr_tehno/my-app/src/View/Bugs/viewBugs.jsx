import React,{useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {getBugs} from '../../Controllers/Redux/bugRedux'

export default()=>{
    const dispatch=useDispatch();
    const {bugs}=useSelector(state=>state);

    useEffect(()=>{
        dispatch(getBugs());
    },[bugs.length<1])

    return (
        <div className="pag">
           bugs.map((bug,key)=> ({
            
           }))
        </div>
    )
}