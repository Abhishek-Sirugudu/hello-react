// src/App.jsx
import TodoList from './components/TodoList';
import UserList from './components/UserList'; // 1. Import new component
import './App.css';

function App() {
  return (
    <>
      <h1>Day 15: useEffect Hook</h1>
      <TodoList />
      <hr /> {/* A horizontal line to separate the components */}
      <UserList /> {/* 2. Use new component */}
    </>
  );
}

export default App;