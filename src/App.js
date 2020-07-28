import React from 'react';
import TaskManager from './components/TaskManager/TaskManager'
import TaskContext from './context/TaskContext'
function App() {
  return (
    <div className="App">
      <TaskContext>
        <TaskManager />
      </TaskContext>
    </div>
  );
}

export default App;
