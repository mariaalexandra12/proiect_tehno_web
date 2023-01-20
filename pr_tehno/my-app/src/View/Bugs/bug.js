import React, { version } from 'react';
import './bug.css';

export default (props)=>{
    const {name,priority} = props.bug;
    function Clicked(){
        props.clicked(props.name);
    }
    return (
        <div className="bug" onClick={Clicked}>
           <h1 className="name">{name}</h1>
           <h2 className="priority">{priority}</h2>
           <h3 className="version">{version}</h3>
        </div>
    )
}