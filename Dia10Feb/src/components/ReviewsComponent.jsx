const ReviewsComponent = ({ reviews }) => {
  return (
    <div
      style={{
        borderRadius: "5px",
        backgroundColor: "#CCCCFF",
        color: "#333",
        padding: "10px",
        width: "40%",
        margin: "0 auto",
      }}
    >
      <h3>Reseñas:</h3>
      <ul style={{ listStyleType: "none" }}>
        {reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsComponent;
