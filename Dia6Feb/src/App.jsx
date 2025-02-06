import "./App.css";
import { useState } from "react";
import MovieSearchComponent from "./components/MovieSearchComponent";
import MovieListComponent from "./components/MovieListComponent";
import FavoritesComponent from "./components/FavoritesComponent";
import { MovieProvider } from "./context/MovieContext";

function App() {
  const [search, setSearch] = useState("");

  return (
    <MovieProvider>
      <div>
        <h1>Catálogo de Películas</h1>
        <MovieSearchComponent setSearch={setSearch} />
        <MovieListComponent search={search} />
        <FavoritesComponent />
      </div>
    </MovieProvider>
  );
}

export default App;
