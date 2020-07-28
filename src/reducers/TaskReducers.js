
export const taskReducers = (state, action) => {
    let newState = { ...state };
    let newServe = [];
    switch (action.type) {
        case 'ADD_TASK':
            newState.tasks = [...newState.tasks, { taskId: Date.now(), taskRun: 0, taskCompletion: false, deleteRequest: false, serverId: 0 }]
            break;
        case 'REMOVE_TASK':
            console.log(action.id)
            console.log(newState.tasks.filter(t => t.taskId !== action.id))
            newState.tasks = newState.tasks.filter(t => t.taskId !== action.id);
            break;
        case 'ADD_SERVER':
            if (newState.servers.length < 10) {
                newState.servers = [...newState.servers, { serverId: Date.now(), activeTask: 0, deleteRequest: false }]
            }
            break;
        case 'REMOVE_SERVER':
            newServe = [];
            newState.servers.forEach(s => {
                if (s.serverId !== action.id) {
                    newServe.push(s)
                } else if (s.serverId === action.id && s.activeTask) {
                    s.deleteRequest = true;
                    newServe.push(s)
                }
            });
            newState.servers = newServe;
            break;
        case 'UPDATE_TASK_START':
            newState.servers = newState.servers.map(s => {
                if (s.serverId === action.data.server.serverId) {
                    return action.data.server
                } else return s
            })
            newState.tasks = newState.tasks.map(t => {
                if (t.taskId === action.data.dueTask.taskId) {
                    return action.data.dueTask
                } else return t;
            })
            break;
        case 'UPDATE_TASK_PROGRESS':
            newServe = [];
            newState.tasks = newState.tasks.map(t => {
                if (t.taskId === action.data.runningTask.taskId) {
                    return action.data.runningTask
                } else return t;
            });
            break;
        case 'UPDATE_TASK_COMPLETE':
            newState.tasks = newState.tasks.map(t => {
                if (t.taskId === action.data.runningTask.taskId) {
                    return action.data.runningTask
                } else return t;
            });
            // eslint-disable-next-line array-callback-return
            newState.servers = newState.servers.filter(s => {
                if (!s.deleteRequest) {
                    if (s.serverId === action.data.s.serverId) {
                        return action.data.s
                    } else {
                        return s;
                    }
                }
            });
            break;
        default:
            break;
    }
    return newState;

}