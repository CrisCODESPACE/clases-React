import { useState } from "react";

const AddReviewComponent = ({ addReview }) => {
  const [newReview, setNewReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.trim()) {
      addReview(newReview);
      setNewReview("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Añade una nueva reseña:</h3>
      <textarea
        placeholder="Escribe aquí tu reseña"
        value={newReview}
        onChange={(e) => setNewReview(e.target.value)}
      ></textarea>
      <button type="submit">Agregar reseña</button>
    </form>
  );
};

export default AddReviewComponent;
