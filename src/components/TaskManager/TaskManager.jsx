import React, { useState, useEffect } from 'react';
import Servers from '../Servers/Servers'
import Tasks from "../Tasks/Tasks";
const TaskManager = () => {
    const [servers, setServers] = useState([{ serverId: Date.now(), activeTask: 0, deleteRequest: false }])
    const [tasks, setTask] = useState([])
    // add server
    const addServer = () => {
        if (servers.length < 10) {
            const newServer = {
                serverId: Date.now(),
                activeTask: 0, deleteRequest: false
            }
            setServers([...servers, newServer]);
        }
    }
    //  add task
    const addTask = () => {
        setTask([...tasks, { taskId: Date.now(), taskCompletion: false, deleteRequest: false, serverId: 0 }])
    }
    //  remove server if server has no task running on it
    const removeServer = (serverId) => {
        let newServers = servers.find(s => s.serverId === serverId && s.activeTask);
        if (newServers) {
            setServers(servers.map(s => {
                if (s.serverId === serverId) {
                    s.deleteRequest = true;
                    return s;
                } else
                    return s;
            }))
        } else
            setServers(servers.filter(s => s.serverId !== serverId));
    }
    // remove task 
    const removeTask = (taskId) => {
        setTask(tasks.filter(t => t.taskId !== taskId));
    }
    //  task gets updated once the it gets compelted 
    const updateTask = (id) => {
        let updatedTask = tasks.map(t => {
            if (t.taskId === id) {
                t.taskCompletion = true;
                t.serverId = 0;
                return t
            } else return t;
        });
        setTask(updatedTask)
        setServers(servers.map(s => {
            if (s.activeTask === id) {
                s.activeTask = 0;
                return s;
            }
            else
                return s
        }))
        // return only the non deleted servers
        // eslint-disable-next-line array-callback-return
        setServers(servers.filter(s => {
            if (s.deleteRequest !== true ) {
                return s
            }
        }))

    }

    useEffect(() => {
        if (tasks.length) {
            // get/find the free server 
            let freeServer = servers.find(s => !s.deleteRequest && s.activeTask === 0);
            // get/find the free task waiting to get completed
            let dueTask = tasks.find(t => !t.serverId && !t.taskCompletion);
            if (freeServer && dueTask) {
                let newTasks = tasks.map(t => {
                    if (t.taskId === dueTask.taskId) {
                        dueTask.serverId = freeServer.serverId
                        return dueTask;
                    } else
                        return t;
                })
                let newServer = servers.map(s => {
                    if (s.serverId === freeServer.serverId) {
                        s.activeTask = dueTask.taskId
                        return s;
                    } else
                        return s;
                })
                setTask(newTasks);
                setServers(newServer);
                if (JSON.stringify(tasks) !== (JSON.stringify(newTasks)))
                    setTask(newTasks)
            }
        }
    }, [tasks, servers])

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
                        <Tasks
                            addTask={addTask}
                            tasks={tasks}
                            removeTask={removeTask}
                            updateTask={updateTask} />
                    </span></div>
                    <div className="grid-example col s12 m5"><span className="flow-text">
                        {/* renders List of server Component */}
                        <Servers
                            servers={servers}
                            addServer={addServer}
                            removeServer={removeServer}
                        />
                    </span></div>
                </div></div></>
    )
}

export default TaskManager;