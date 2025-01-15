import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <h4 className="subtitle-section">
          Movie React il sito per la ricerca di film e serie TV
        </h4>
        <div className="break-line"></div>
        <div className="container d-flex">
          <div className="links col-6">
            <Link to="/">Home Page</Link>
            <br />
            <Link to="/movie">Movies</Link>
            <br />
            <Link to="/about">About us</Link>
          </div>
          <div className="web-informations col-6">
            <p>Created by Daniela Esposito Boolean 134</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
