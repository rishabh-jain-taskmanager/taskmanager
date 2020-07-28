import React, { useContext, useEffect } from "react";
import { TaskContext } from '../../context/TaskContext';

const Server = ({ s }) => {
    const { state, dispatch } = useContext(TaskContext);


    useEffect(() => {
        let interval = setInterval(() => {
            if (state.tasks.length) {
                // get/find the free server 
                let freeServer = (!s.deleteRequest && s.activeTask === 0);

                // get/find the free task waiting to get completed
                let dueTask = state.tasks.find(t => !t.serverId && !t.taskCompletion);
                if (freeServer && dueTask) {
                    let server = { ...s };
                    console.log(s.serverId, 'id in start')
                    server.activeTask = dueTask.taskId;
                    dueTask.serverId = server.serverId
                    dispatch({ type: 'UPDATE_TASK_START', data: { server, dueTask } });
                } else {
                    if (s.activeTask) {
                        let runningTask = state.tasks.find(t => t.taskId === s.activeTask);
                        if (runningTask && runningTask.taskRun < 20) {
                            runningTask.taskRun++;
                            dispatch({ type: 'UPDATE_TASK_PROGRESS', data: { runningTask } });
                        } else {
                            runningTask.taskCompletion = true;
                            runningTask.serverId = 0;
                            s.activeTask = 0
                            dispatch({ type: 'UPDATE_TASK_COMPLETE', data: { s, runningTask } });
                        }
                    }
                }
            }
        }, 1000);
        return () => clearInterval(interval)
    }, [dispatch, s, state.tasks]);

    const renderServer = s &&
        <span style={{ display: 'flex', marginBottom: '0.5rem' }} key={s.serverId}>
            <i key={`s-${s.serverId}`} style={{ flex: '1', color: s.activeTask ? 'green' : '' }} className="small material-icons">dns</i>
            <span style={{ flex: '1 1 25%', fontSize: '14px', paddingTop: '0.5rem' }}>Task Id {s.activeTask ? s.activeTask : 'none'}</span>
            {<button style={{
                flex: '1',
                background: `${s.deleteRequest ? 'red' : '#8b8cc9'}`,
            }}
                className="btn waves-effect waves-light btn-small"
                type="button" name="action"
                onClick={() => dispatch({ type: 'REMOVE_SERVER', id: s.serverId })}>
                Remove
                </button>}
        </span>

    return (
        <>{renderServer}</>
    )

}
export default Server;