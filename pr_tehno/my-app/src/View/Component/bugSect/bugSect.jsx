import React from 'react';
import './bugSect.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default(props)=> {
    return(
        <div className="sect">
            <h1>{props.title}</h1>
            <p>{props.details}</p>
        </div>
    )
}