import { Link } from "react-router-dom";
import Carosello from "../components/Carosello";
export default function HomePage() {
  const slaiderConfig = {
    slides: [
      {
        image: "/film_relased_img/better.jpg",
        text: `Un film di Michael Gracey con Robbie Williams, Jonno Davies e Steve Pemberton distribuito da Lucky Red`,
        title: "BETTER MAN",
      },
      {
        image: "/film_relased_img/here-2024.jpg",
        text: `Un film di Robert ZemeckiS con Kelly Reilly, Tom Hanks e Robin Wright distribuito da Eagle Pictures`,
        title: "HERE",
      },
      {
        image: "/film_relased_img/nosferatu-2.jpg",
        text: `Un film di Robert Eggers con Lily-Rose Depp, Nicholas Hoult e Bill Skarsgård distribuito da Universal Pictures`,
        title: "NOSFERATU",
      },
    ],
    name: "homePageSlide",
    hasArrows: true,
  };
  return (
    <main className="home-content">
      <div className="conatiner">
        <section id="jumbo">
          <img
            src="bg-homepage.jpg"
            alt="homepage-bg"
            className="homepage-bg"
          />
          <div className="tilte-container">
            <h1 className="home-page-title">MOVIES REACT</h1>
            <h2>La tua guida allo streaming per serie Tv e Film</h2>
            <h3>Scopri di più</h3>
            <Link to="/movie" className="btn btn-warning fw-semibold my-4 ">
              Scopri tutti i film
            </Link>
          </div>
        </section>
        <section id="new-relases">
          <div className="container">
            <h2 className="section-title fw-bold">Novità</h2>
            <Carosello config={slaiderConfig} />
          </div>
        </section>
      </div>
    </main>
  );
}
