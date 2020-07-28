import React from 'react';

const Task = ({ task, dispatch }) => { 
 
    // eslint-disable-next-line array-callback-return
    const taskList = (<span style={{ display: 'flex' }} key={`t-${task.taskId}`}><div key={`div-${task.taskId}`} className="progress" style={{ border: '5px solid #8b8cc9', padding: '0.4rem', backgroundColor: '#fff' }}>
        <div
            key={`d-${task.taskId}`}
            className="determinate"
            style={{ flex: '1', width: `${task.taskRun * 5}%`, backgroundColor: '#8b8cc9', lineHeight: '0.8rem', fontSize: '1rem' }}>{task.taskRun || 'waiting...' }</div>
    </div>
        {(task.taskRun === 0 || task.taskRun >= 20) ? <i

            key={`i-${task.taskId}`}
            style={{ color: ' #8b8cc9', cursor: 'pointer', fontSize: '1.5rem', paddingTop: '0.5rem' }}
            className="small material-icons"
            onClick={() => dispatch({type:'REMOVE_TASK', id: task.taskId})}>
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