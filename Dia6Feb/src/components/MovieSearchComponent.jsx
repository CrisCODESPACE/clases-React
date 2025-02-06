// importaciones
import { useEffect, useRef } from "react";

// creamos función componente que permite al user buscar una peli desde un input
const MovieSearchComponent = ({ setSearch }) => {
  const searchRef = useRef(null); // el input estará guardado en esta referencia que hemos creado a través de useRef

  useEffect(() => {
    searchRef.current.focus();
  }, []); // este useEffect, nada más que el componente es montado, hace focus en el input. Este useEffect solo se ejecuta una vez, ya que su array de dependencias está vacío.

  return (
    <>
      <input
        type="text"
        ref={searchRef}
        placeholder="Buscar películas..."
        onChange={(evento) => setSearch(evento.target.value)}
      />
      {/* este input es el referenciado desde useRef, por lo tanto, será al que se le aplique el focus en cuanto el componente se monte */}
    </>
  );
};

export default MovieSearchComponent;
