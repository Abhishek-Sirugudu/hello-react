// src/components/UserList.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function UserList() {
  // 1. Create state for users and loading status
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. Define the side effect using useEffect
  useEffect(() => {
    // 3. Define an async function inside the effect because
    // the effect function itself cannot be async.
    async function fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        // 4. Update state with the fetched data
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        // 5. Set loading to false after the fetch is done (success or fail)
        setLoading(false);
      }
    }

    // 6. Call the async function immediately
    fetchUsers();

  }, []); // 7. IMPORTANT: Empty dependency array = run ONCE on mount

  // 8. Conditional Rendering: Show a loading message while waiting
  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {/* 2. Wrap the user's name in a Link */}
            {/* We use a template literal to build the dynamic URL */}
            <Link to={`/users/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;