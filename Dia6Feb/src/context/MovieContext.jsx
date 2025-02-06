// importaciones
import { createContext, useState } from "react";

// creacion de contexto

export const MovieContext = createContext();

// creamos el provider

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]); // creamos un useState para que nos almacene una lista(array) de peliculas favoritas. Al usar useState no solo tenemos favorites como lista de pelis si no que tenemos setFavorites para actualizar esa lista.

  const addFavorites = (movie) => {
    setFavorites((prev) =>
      prev.some((fav) => fav.id === movie.id) ? prev : [...prev, movie]
    );
  }; // creamos una función manejadora del setFavorites comprobando si la pelicula que quiero añadir a mi lista de favoritos ya está en dicha lista. Por el contrario, si la pelicula no se encuentra en la lista de favoritos, se añadirá al final de la lista que ya teníamos.

  return (
    <>
      <MovieContext.Provider value={{ favorites, addFavorites }}>
        {children}
      </MovieContext.Provider>
      {/* Creamos el contexto que proveerá a los children(componentes hijos o anidados) los datos necesarios para mostrar esos datos, modificarlos, usar una función creada en el contexto, o lo que sea. */}
    </>
  );
};
