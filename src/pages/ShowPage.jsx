import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function ShowPage() {
  const [movie, setMovie] = useState(null);
  const id = useParams().id;
  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL;
    fetch(`${url}/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.movie);
      });
  }, []);

  console.log(movie);
  return (
    <main className="single-movie-content">
      <div className="container">{movie && <h1>{movie.title}</h1>}</div>
    </main>
  );
}
