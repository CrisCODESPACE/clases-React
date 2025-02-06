//importaciones
import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const FavoritesComponent = () => {
  const { favorites } = useContext(MovieContext); // obtenemos las peliculas guardadas en favoritos desde el contexto. useContext(MovieContext) nos da acceso a la lista de pelis favoritas.

  return (
    <div>
      <h2>Favoritos</h2>
      <ul>
        {favorites.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
      {/* Mostrar/renderizar la lista de pelis favoritas */}
    </div>
  );
};

export default FavoritesComponent;
