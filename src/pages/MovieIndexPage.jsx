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
  const streamingPlatforms = [
    { name: "amazonprime", image: "streaming_platforms_img/amazonprime.svg" },
    { name: "discovery", image: "streaming_platforms_img/discovery.png" },
    { name: "disney", image: "streaming_platforms_img/disney.svg" },
    { name: "googleplay", image: "streaming_platforms_img/googleplay.png" },
    { name: "infinity", image: "streaming_platforms_img/infinity.jpg" },
    { name: "netflix", image: "streaming_platforms_img/netflix.png" },
    { name: "now", image: "streaming_platforms_img/now.png" },
    { name: "raiplay", image: "streaming_platforms_img/raiplay.png" },
    { name: "v", image: "streaming_platforms_img/v.png" },
    { name: "youtube", image: "streaming_platforms_img/youtube.png" },
  ];
  return (
    <main className="movies-content">
      <section id="movie-list-section">
        <div className="container ">
          <h2 className="section-title my-3">Film disponibili</h2>
          <h3 className="subtitle-section my-2">
            Film e serie TV disponibili da vedere sulle diverse piattaforme di
            steaming
          </h3>
          <div className="streaming-platforms d-flex">
            {streamingPlatforms.map((platform) => (
              <div key={platform.id} className="platform-container my-5 ">
                <img
                  src={platform.image}
                  alt={platform.name}
                  className="platform-img"
                />
              </div>
            ))}
          </div>
          <h5 className="subtitle-section">
            {movies.length} titoli disponibili al momento{" "}
          </h5>
          <div className="row row-cols-4 ">
            {movies.map((movie) => (
              <>
                <Card
                  key={movie.id}
                  title={movie.title}
                  img={movie.image}
                  src={`/movie/${movie.id}`}
                />
              </>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
