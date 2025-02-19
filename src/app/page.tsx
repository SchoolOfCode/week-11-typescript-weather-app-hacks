"use client";
import React, { useEffect, useState } from "react";
export default function Page() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://api.weatherapi.com/v1/forecast.json?key=b59bf0aa6d93440f8fc113152251902&q=London&days=5"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data.current || []);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);
  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
      </div>
    );
  }
  return (
    <ul>
      <li key={posts.last_updated}>
       <div>{posts.last_updated}: {posts.temp_c}°C </div> 
       WIND(mph) {posts.wind_mph}mph
      </li>
    </ul>
  );
}