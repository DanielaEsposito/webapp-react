import { useState } from "react";

export default function FormReviews({ movieId }) {
  const initialDataForm = {
    name: "",
    vote: "",
    text: "",
  };
  const { reviewsForm, setReviewForm } = useState(initialDataForm);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const url = `http://localhost:3000/movies/${movieId}/reviews`;
    fetch(url, {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ reviewsForm }),
    })
      .then((res) => res.json)
      .then((data) => {});
  };
  const handleFormChange = (e) => {
    setReviewForm({
      ...reviewsForm,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form className="row align-items-end g-3" onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          aria-describedby="emailHelp"
          onChange={handleFormChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="vote" className="form-label">
          Vote
        </label>
        <input
          type="number"
          className="form-control"
          id="vote"
          aria-describedby="emailHelp"
          onChange={handleFormChange}
        />
      </div>
      <div className="mb-3 form-check">
        <label htmlFor="text" className="form-label">
          Text
        </label>
        <input
          type="text"
          className="form-control"
          id="text"
          aria-describedby="emailHelp"
          onChange={handleFormChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
