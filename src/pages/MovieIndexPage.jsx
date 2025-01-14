import { useEffect, useState } from "react";
import Card from "../components/Card";
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
      <div className="container d-flex">
        <div className="row row-cols-4">
          {movies.map((movie) => (
            <Card key={movie.id} title={movie.title} img={movie.image} />
          ))}
        </div>
      </div>
    </main>
    //<Link to={"/movie/" + movie.id}></Link>
  );
}
