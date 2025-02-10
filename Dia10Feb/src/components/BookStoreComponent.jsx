const BookStoreComponent = ({ stores }) => {
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
      <h3>Disponible en:</h3>
      <ul>
        {stores.map((store, index) => (
          <li key={index}>
            <a href={store.link}>{store.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookStoreComponent;
