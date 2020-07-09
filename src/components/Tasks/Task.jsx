import React, { useState, useEffect } from 'react';

const Task = ({ task, removeTask, updateTask }) => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const sleep = () => {
            return new Promise(resolve => setTimeout(resolve, 1000))
        }
        const updateProgress = () => {
            return sleep().then(() => progress <= 19 ? setProgress(progress + 1) : '')
        }
        if (task.serverId && !task.taskCompletion) {
            updateProgress()
            if (progress === 20) {
                updateTask(task.taskId)
            }
        }

    }, [progress, task.serverId, task.taskCompletion, task.taskId, updateTask])
    // eslint-disable-next-line array-callback-return
    const taskList = (<span style={{ display: 'flex' }} key={`t-${task.taskId}`}><div key={`div-${task.taskId}`} className="progress" style={{ border: '5px solid #8b8cc9', padding: '0.4rem', backgroundColor: '#fff' }}>
        <div
            key={`d-${task.taskId}`}
            className="determinate"
            style={{ flex: '1', width: `${progress * 5}%`, backgroundColor: '#8b8cc9', lineHeight: '0.8rem', fontSize: '1rem' }}>{progress || 'waiting...' }</div>
    </div>
        {(progress === 0 || progress >= 20) ? <i

            key={`i-${task.taskId}`}
            style={{ color: ' #8b8cc9', cursor: 'pointer', fontSize: '1.5rem', paddingTop: '0.5rem' }}
            className="small material-icons"
            onClick={() => removeTask(task.taskId)}>
            delete
            </i> :
            <i

                key={`i-${task.taskId}`}
                style={{ color: ' #8b8cc9', cursor: 'not-allowed', fontSize: '1.5rem', paddingTop: '0.5rem' }}
                className="small material-icons"
            >
                delete
            </i>}
    </span>)


    return <>{taskList}</>

}
export default Task;