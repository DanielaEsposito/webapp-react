import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
export default function MovieIndexPage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL;
    fetch(`${url}/movies`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.movies);
      });
  }, []);
  console.log(movies);
  return (
    <main className="movies-content">
      <div className="container">
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={"/movie/" + movie.id}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
