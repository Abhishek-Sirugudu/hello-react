// src/components/UserList.jsx
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch'; // 1. Import the hook

function UserList() {
  // 2. Use the hook! All the logic is now in one line.
  const { data: users, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  // 3. Handle the loading state
  if (loading) {
    return <p>Loading users...</p>;
  }

  // 4. Handle the error state
  if (error) {
    return <p>Error: {error}</p>;
  }

  // 5. Render the data (if it exists)
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users && users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;