import React, { createContext, useReducer } from 'react';
import {taskReducers} from  '../reducers/TaskReducers'
export const TaskContext = createContext();

const initialState = {
    tasks:[],
    servers:[{ serverId: Date.now(), activeTask: 0, deleteRequest: false }]
}

const TaskContextProvider = (props) => {
    const [state, dispatch] = useReducer(taskReducers, initialState);  
    return (
        <TaskContext.Provider value={{ state, dispatch  }}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskContextProvider;