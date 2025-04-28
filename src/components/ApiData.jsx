import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ApiData.css';

function ApiData() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the backend server
    axios.get('https://backend3k.vercel.app/todos')
      .then(response => {
        setData(response.data);
        setFilteredData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  // Filter completed tasks
  const filterCompleted = () => {
    const filtered = data.filter(post => post.completed);
    setFilteredData(filtered);
  };

  // Filter incomplete tasks
  const filterIncomplete = () => {
    const filtered = data.filter(post => !post.completed);
    setFilteredData(filtered);
  };

  // Sort by title
  const sortByTitle = () => {
    const sorted = [...filteredData].sort((a, b) => a.title.localeCompare(b.title));
    setFilteredData(sorted);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="api-data">
      <h1>Posts</h1>
      <div className="buttons">
        <button onClick={filterCompleted}>Completed</button>
        <button onClick={filterIncomplete}>Incomplete</button>
        <button onClick={sortByTitle}>Sort by Title</button>
      </div>
      <ul>
        {filteredData.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>Status: {post.completed ? 'Completed' : 'Incomplete'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ApiData;
