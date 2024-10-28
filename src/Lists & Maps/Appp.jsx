import { useEffect, useState } from 'react';
import axios from 'axios';

function Appp() {
  // State to store the API response data
  const [data, setData] = useState(null);
  // State to handle loading status
  const [loading, setLoading] = useState(true);

  // useEffect hook runs after component mounts
  // Empty dependency array [] means it only runs once
  useEffect(() => {
    // Making GET request to JSONPlaceholder API using axios
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        // Store API response in data state
        setData(response.data);
        // Set loading to false when data is received
        setLoading(false);
      })
      .catch((error) => {
        // Handle any errors during the request
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  // Show loading state while request is in progress
  if (loading) return <p>Loading...</p>;

  // Render the data once loaded
  return (
    <div>
      <h1>Data from API:</h1>
      <ul>
        {/* Map through the data array and render each item */}
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Appp;
