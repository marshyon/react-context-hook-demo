import './App.css';
import TaskList from './components/TaskList.js';
import { TasksProvider } from './store/TasksContext.js';
import AddTask from './components/AddTask.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">


        <TasksProvider>
          <code>Day off in Kyoto</code>
          <AddTask />
          <TaskList />
        </TasksProvider>



      </header>
    </div>
  );
}

export default App;
