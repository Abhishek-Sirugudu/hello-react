// src/pages/UserDetailsPage.jsx
import { useParams, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch'; // 1. Import the hook

function UserDetailsPage() {
  const { id } = useParams();
  
  // 2. Use the hook!
  const { data: user, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  // 3. Handle loading state
  if (loading) {
    return <p>Loading user details...</p>;
  }

  // 4. Handle error state
  if (error) {
    return <p>Error: {error}</p>;
  }

  // 5. Render the data (if it exists)
  return (
    <div>
      {user && (
        <>
          <h1>{user.name}</h1>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
          <Link to="/">← Back to Home</Link>
        </>
      )}
    </div>
  );
}

export default UserDetailsPage;