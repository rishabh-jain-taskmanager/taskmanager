import React, { useContext } from 'react';
import Task from "./Task";
import { TaskContext } from '../../context/TaskContext';

const Tasks = () => {
    const { state, dispatch } = useContext(TaskContext);
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
                                onClick={() => dispatch({type: 'ADD_TASK'})}
                            >
                                Add A Task
                        </button>
                        </span>
                        {state.tasks && state.tasks.length ? state.tasks.map((t, i) => {
                            return <span key={i}><Task
                                task={t}
                                dispatch={dispatch}
                            /></span>
                        }) : ''
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Tasks