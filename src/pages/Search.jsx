import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { TMDB_API_KEY } from '../api';
import './MoviesGrid.css';

// Définir directement les valeurs ici
const searchURL = "https://api.themoviedb.org/3/search/movie";  // L'URL de recherche de l'API

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async () => {
    try {
      if (!query) return;  // S'assurer qu'il y a une recherche
      if (!TMDB_API_KEY) {
        throw new Error("Configurez VITE_TMDB_API_KEY dans le fichier .env.local.");
      }
      const res = await fetch(`${searchURL}?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`);
      if (!res.ok) {
        throw new Error("Erreur réseau: " + res.status);
      }
      const data = await res.json();
      if (data.results) {
        setMovies(data.results);
      } else {
        console.error("Aucun résultat trouvé");
        setMovies([]);  // Réinitialiser les films si aucun résultat
      }
    } catch (error) {
      console.error("Erreur lors de la recherche des films:", error);
    }
  };

  useEffect(() => {
    if (query) {
      getSearchedMovies();  // Lancer la recherche si une query est présente
    }
  }, [query]);  // Lancer la recherche chaque fois que la query change

  return (
    <div className='container'>
      <header className="page-heading">
        <p className="eyebrow">Recherche</p>
        <h1 className="title">
          Résultats pour : <span className="query-text">{query}</span>
        </h1>
      </header>
      {movies.length === 0 && <p className="status-message">Aucun film trouvé pour cette recherche.</p>}
      <div className='movies-container'>
        {movies.length > 0 && movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Search;
