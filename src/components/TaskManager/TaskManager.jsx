import React from 'react';
import Servers from '../Servers/Servers'
import Tasks from "../Tasks/Tasks";
const TaskManager = () => { 
    return (
        <><nav>
            <div style={{ background: '#8b8cc9' }} className="nav-wrapper">
                <span className="brand-logo">Task Manager</span>
            </div>
        </nav>
            <div className="container">
                <div className="row">

                    <div className="grid-example col s12 m7"><span className="flow-text">
                        {/* renders List of task Component */}
                        <Tasks />
                    </span></div>
                    <div className="grid-example col s12 m5"><span className="flow-text">
                        {/* renders List of server Component */}
                        <Servers
                        />
                    </span></div>
                </div></div></>
    )
}

export default TaskManager;