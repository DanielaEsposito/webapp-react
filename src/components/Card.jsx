import { Link } from "react-router-dom";
export default function Card({ img, title, src }) {
  return (
    <div className="col">
      <div className="container-card  my-3">
        <div className="img-card-container">
          <img src={img} alt={title} className=" img-card " />
          <div className="overlay">
            <h3>{title}</h3>
            <Link to={src} className="btn btn-warning fw-semibold my-2">
              See more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
