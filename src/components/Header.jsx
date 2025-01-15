import { Link, NavLink } from "react-router-dom";
export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg " data-bs-theme="dark">
      <div className="container-fluid">
        <h1 className="navbar-title">MOVIES REACT</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movie">
                Movies
              </Link>
            </li>
          </ul>
        </div>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Cerca film e serie tv"
            aria-label="Search"
          />
          <button className="btn btn-outline-warning" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
