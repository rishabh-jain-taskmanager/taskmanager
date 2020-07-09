import React from 'react';
import Task from "./Task";


const Tasks = ({ tasks, addTask, removeTask, updateTask }) => {
    return (
        <div className="row">
            <div className="col s12 m12">
                <div className="card  ">
                    <div className="card-content ">
                        <span style={{
                            display: 'flex'
                        }}> <blockquote style={{ flex: '1' }}>
                                Tasks
                </blockquote>
                            <button style={{
                                margin: '20px 0',
                                paddingLeft: '1.5rem',
                                display: 'flex',
                                marginLeft: '4rem',
                                background: '#8b8cc9'
                            }}
                                className="btn waves-effect waves-light"
                                type="button"
                                name="action"
                                onClick={() => addTask()}
                            >
                                Add A Task
                        </button>
                        </span>
                        {tasks && tasks.length ? tasks.map((t, i) => {
                            return <span key={i}><Task
                                task={t}
                                removeTask={removeTask}
                                updateTask={updateTask} /></span>
                        }) : ''
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Tasks