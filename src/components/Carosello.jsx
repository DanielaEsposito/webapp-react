export default function Carosello({ config }) {
  const { slides, name, hasArrows } = config;
  return (
    <>
      <div id={name} className="carousel slide">
        <div className="carousel-indicators">
          {slides.map((slide, index) => {
            <button
              type="button"
              data-bs-target={`#${name}`}
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "active" : ""}
              aria-label={slide.title}
            ></button>;
          })}
        </div>
        <div className="carousel-inner h-100">
          {slides.map((slide, index) => {
            <div key={index} className="carousel-item active">
              <img
                src={slide.image}
                className="d-block w-100"
                alt={slide.title}
              />
            </div>;
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#${name}`}
          data-bs-slide="prev"
        >
          9
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#${name}`}
          data-bs-slide="next"
        >
          2
        </button>
      </div>
    </>
  );
}
