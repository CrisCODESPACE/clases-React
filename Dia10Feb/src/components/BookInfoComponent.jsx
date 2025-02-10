const BookInfoComponent = (props) => {
  //   const { title, author, description } = props;
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
      <h2>{props.title}</h2>
      <p>{props.author}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default BookInfoComponent;
