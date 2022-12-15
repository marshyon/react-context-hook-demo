import './App.css';
import TaskList from './components/TaskList.js';
import { TasksProvider } from './state/TasksContext.js';
import AddTask from './components/AddTask.js';
import UserStatus from './components/UserStatus.js';
import { UserProvider } from './state/UserContext';
import Auth from './components/Auth';
import { PostsProvider } from './state/PostsContext';
import LoadPosts from './components/LoadPosts';
import PostsStatus from './components/PostsStatus';

function App() {
  return (
    <div className="App">
      <header className="App-header">


        <TasksProvider>
          <UserProvider>
            <PostsProvider>

              <UserStatus />
              <code>Day off in Kyoto</code>
              <AddTask />
              <TaskList />
              <Auth />
              <LoadPosts />
              <PostsStatus />

            </PostsProvider>
          </UserProvider>
        </TasksProvider>



      </header>
    </div>
  );
}

export default App;
