import { useEffect, useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const MovieListComponent = ({ search }) => {
  const [movies, setMovies] = useState([]); // creamos un state que guarda la lista de pelis y su actualizador setMovies
  const { addFavorites } = useContext(MovieContext); // nos traemos del contexto la funcion que añade peliculas a favoritos

  useEffect(() => {
    setMovies([
      { id: 1, title: "Toy Story" },
      { id: 2, title: "Shrek" },
      { id: 3, title: "Sonic" },
      { id: 4, title: "Señor de los Anillos: Las Dos Torres" },
      { id: 5, title: "Titanic" },
      { id: 6, title: "Regreso al Futuro" },
    ]);
  }, []); // este useEffect cuando el componente se monta, carga una lista de peliculas simulando una petición a una API

  return (
    <div>
      {movies
        .filter((movie) =>
          movie.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <button onClick={() => addFavorites(movie)}>
              Añadir a favoritos
            </button>
          </div>
        ))}
      {/* Filtramos las peliculas por el nombre que el usuario haya introducido por el input a través de un useState que vendrá pasado desde el padre. También mostrará cada película con nombre y un botón para añadirlas a favoritos */}
    </div>
  );
};

export default MovieListComponent;
