// src/pages/HomePage.jsx
import TodoList from '../components/TodoList';
import UserList from '../components/UserList';

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to my application!</p>
      <hr />
      <TodoList />
      <hr />
      <UserList />
    </div>
  );
}

export default HomePage;