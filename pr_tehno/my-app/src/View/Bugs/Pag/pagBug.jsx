import React from 'react';
import './pagBugs.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default ()=> {
     return (
         <div className="pagBug">
           <form className="pb">
           <h1>Bug Details</h1>
            <div className="btn">
            <button id="view">View Bug</button>
            <button id="create">Create Bug</button>
            <button type="cancel" id="logo">Log Out</button>
            </div>
            </form>
         </div>
         
     )

}