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

  const streamingPlatforms = [
    { name: "amazonprime", image: "/streaming_platforms_img/amazonprime.svg" },
    { name: "discovery", image: "/streaming_platforms_img/discovery.png" },
    { name: "netflix", image: "/streaming_platforms_img/netflix.png" },
    { name: "raiplay", image: "/streaming_platforms_img/raiplay.png" },
    { name: "youtube", image: "/streaming_platforms_img/youtube.png" },
    { name: "v", image: "/streaming_platforms_img/v.png" },
  ];
  return (
    <main className="single-movie-content">
      <section id="movie-description-section">
        <div className="container">
          <div className="container">
            {movie && (
              <div className="container d-flex my-4">
                <div className="poster-container">
                  <img src={movie.image} alt={movie.title} className="poster" />
                </div>
                <div className="movie-description col-8">
                  <div className="row">
                    <div className="col-12">
                      <h2 className="subtitle-section fw-bold">
                        {movie.title}
                      </h2>
                      <ul className="">
                        <li className="film-information-item">
                          Diretto da <br />{" "}
                          <span className="film-information">
                            {movie.director}
                          </span>{" "}
                        </li>
                        <li className="film-information-item">
                          Anno di uscita <br />
                          <span className="film-information">
                            {movie.release_year}
                          </span>
                        </li>
                        <li className="film-information-item">
                          Genere <br />
                          <span className="film-information">
                            {movie.genre}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 abstract ">
                      <h4 className="fw-bold">Riassunto:</h4>
                      <p>{movie.abstract}</p>
                    </div>
                    <div className="col-6">
                      <div className="generals">
                        <i className="fa-solid fa-thumbs-up"></i> 22k
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="generals">
                        <i className="fa-solid fa-thumbs-down"></i> 120k
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="generals">
                        <i className="fa-solid fa-bookmark"></i> Whatchlist
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="generals">
                        <i className="fa-solid fa-check"></i> Visto
                      </div>
                    </div>
                    <div className="col-12">
                      <h4 className="subtitle-section mt-5">
                        Disponibile sulle piattaforme di streaming:
                      </h4>

                      <div className="streaming-platforms d-flex">
                        {streamingPlatforms.map((platform) => (
                          <div
                            key={platform.name}
                            className="platform-container my-5 "
                          >
                            <img
                              src={platform.image}
                              alt={platform.name}
                              className="platform-img"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <section id="reviews">
        <div className="container">
          <h2 className="subtitle-section">Rcensioni</h2>
          <div className="reviews d-flex">
            {movie &&
              movie.reviews.map((review, index) => (
                <div key={index} className="review-container ">
                  <h4 className="fw-bold">{review.name}</h4>
                  <p>Voto: {review.vote}</p>
                  <p>{review.text}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
