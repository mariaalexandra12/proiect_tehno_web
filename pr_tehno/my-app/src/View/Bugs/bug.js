import React from 'react';

export default (props)=>{
    return (
        <div className="bug">
           <h1 className="name">{props.name}</h1>
           <h2 className="priority">{props.priority}</h2>
           <h3 className="version">{props.version}</h3>
        </div>
    )
}