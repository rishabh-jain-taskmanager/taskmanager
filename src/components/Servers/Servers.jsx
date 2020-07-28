import React, { useContext } from "react";
import Server from './Server'
import { TaskContext } from '../../context/TaskContext';


const Servers = () => {
    const { state, dispatch  } = useContext(TaskContext);
    return (
        <div className="row">
            <div className="col s12 m12">
                <div className="card  ">
                    <div className="card-content ">
                        <span style={{
                            display: 'flex'
                        }}> <blockquote style={{ flex: '1' }}>
                                Servers
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
                                onClick={() => dispatch({type: 'ADD_SERVER'})}>
                                Add A Server
                            </button>
                        </span>
                        {state.servers && state.servers.map((s, i) =>
                            <span key={i}>
                                <Server
                                    s={s}
                                    dispatch={dispatch}
                                />
                            </span>)
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Servers;