// src/hooks/useFetch.js
import { useState, useEffect } from 'react';

function useFetch(url) {
  // We'll add state for error handling as well
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define an async function to fetch data
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    
  }, [url]); // Re-run the effect if the URL changes

  // Return the state for the component to use
  return { data, loading, error };
}

export default useFetch;