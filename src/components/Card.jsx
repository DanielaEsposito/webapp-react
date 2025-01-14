export default function Card({ img, title }) {
  return (
    <div className="col">
      <div className="conatiner-card">
        <div className="img">
          <img src={img} alt="img-movie" className="img-fluid" />
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}
