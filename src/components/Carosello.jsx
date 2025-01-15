export default function Carosello({ config }) {
  const { slides, name, hasArrows } = config;
  return (
    <>
      <div id={name} className="carousel slide">
        <div className="carousel-indicators">
          {slides.map((slide, index) => (
            <button
              key={index}
              type="button"
              data-bs-target={`#${name}`}
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "active" : ""}
              aria-label={slide.title}
            ></button>
          ))}
        </div>
        <div className="carousel-inner h-100">
          {slides.map((slide, index) => (
            <div key={index} className="carousel-item active">
              <div className="content d-flex">
                <div className="text-container col-8">
                  <h2 className="slide-title">{slide.title}</h2>
                  <h3>Info:</h3>
                  <p>{slide.text}</p>
                </div>
                <div className="img-container col-4">
                  <img
                    src={slide.image}
                    className="img-carosello img-fluid"
                    alt={slide.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#${name}`}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#${name}`}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
