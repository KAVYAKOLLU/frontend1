
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
    axios.get('http://localhost:5000/api/posts')
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

  const filterMostLiked = () => {
    const filtered = [...data].sort((a, b) => b.reactions.likes - a.reactions.likes);
    setFilteredData(filtered);
  };

  const filterMostViewed = () => {
    const filtered = [...data].sort((a, b) => b.views - a.views);
    setFilteredData(filtered);
  };

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
        <button onClick={filterMostLiked}>Most Liked</button>
        <button onClick={filterMostViewed}>Most Viewed</button>
        <button onClick={sortByTitle}>Sort by Title</button>
      </div>
      <ul>
        {filteredData.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>Likes: {post.reactions.likes} </p>
            <p>Views: {post.views}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ApiData;
