/* eslint-disable import/no-anonymous-default-export */
import React, { version } from 'react';
import './bug.css';

export default (props)=>{
    const {name,priority,version} = props.bug;
    function Clicked(){
        props.clicked(props.name);
    }
    return (
        <div className="bug" onClick={Clicked}>
           <h2 className="name">{name}</h2>
           <h3 className="priority">{priority}</h3>
           <h4 className="version">{version}</h4>
        </div>
    )
}