import React from 'react';
import './bug.css';

export default (props)=>{
    const {name,priority} = props.bug;
    function Clicked(){
        props.clicked(props.name);
    }
    return (
        <div className="bug" onClick={Clicked}>
           <h1 className="name">{props.name}</h1>
           <h2 className="priority">{props.priority}</h2>
           <h3 className="version">{props.version}</h3>
        </div>
    )
}