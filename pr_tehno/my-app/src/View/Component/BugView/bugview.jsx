import React from 'react';
import ViewSection from './Component/bugSect';
import './bugview.css'
import BugModel from '../../Modules/BugModel';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props)=>{
    const bug=new BugModel(props.bug);
    return (
        <div className="bugview">
          <h1>{bug.name}</h1>
          <ViewSection title="Details" info={bug.details}></ViewSection>
          <ViewSection title="Priority" info={bug.priority}></ViewSection>
          <ViewSection title="Severity" info={bug.severity}></ViewSection>
          <ViewSection title="Creator" info={bug.creator}></ViewSection>

        </div>
    )
}