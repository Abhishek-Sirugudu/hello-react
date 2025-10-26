// src/pages/UserDetailsPage.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function UserDetailsPage() {
  // 1. Get the URL parameters. 'useParams' returns an object like { id: "1" }
  const { id } = useParams(); 
  
  // 2. Set up state for this page
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 3. Set up an effect to fetch data *when the component mounts*
  useEffect(() => {
    // Define the async function to fetch data
    async function fetchUser() {
      try {
        setLoading(true);
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchUser();
    
  }, [id]); // 4. The dependency array: re-run this effect if the 'id' param ever changes

  // 5. Render a loading state
  if (loading) {
    return <p>Loading user details...</p>;
  }

  // 6. Render a not-found state
  if (!user) {
    return <p>User not found.</p>;
  }

  // 7. Render the user's details
  return (
    <div>
      <h1>{user.name}</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <br />
      <Link to="/">← Back to Home</Link>
    </div>
  );
}

export default UserDetailsPage;