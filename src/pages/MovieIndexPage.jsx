import { useEffect, useState } from "react";
export default function MovieIndexPage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL;
    fetch(`${url}/movies`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.movies);
        console.log(movies);
      });
  }, []);
  return (
    <main className="movies-content">
      <div className="container">
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
