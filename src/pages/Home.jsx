import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { TMDB_API_KEY } from "../api";
import "./MoviesGrid.css";

// Variables d'URL et clé API définies correctement
const API_URL = "https://api.themoviedb.org/3/movie/";

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [localMovies, setLocalMovies] = useState([]);  // Ajout de l'état pour les films locaux
  const [loading, setLoading] = useState(true);

  const getTopRatedMovies = async () => {
    try {
      if (!TMDB_API_KEY) {
        throw new Error("Configurez VITE_TMDB_API_KEY dans le fichier .env.local.");
      }

      const url = `${API_URL}top_rated?api_key=${TMDB_API_KEY}`;
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`Erreur réseau : ${res.status}`);
      }

      const data = await res.json();
      setTopMovies(data.results);
    } catch (error) {
      console.error("Erreur lors de la récupération des films :", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Charger les films locaux depuis localStorage
    const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
    setLocalMovies(storedMovies);

    getTopRatedMovies();
  }, []);

  return (
    <section className="movies-grid">
      <header className="page-heading">
        <p className="eyebrow">À l&apos;affiche</p>
        <h1>Films les mieux notés</h1>
        <p>Les films qui font l&apos;unanimité, sélectionnés pour vous.</p>
      </header>
      {loading && <p className="status-message" role="status">Chargement des films…</p>}
      {!loading && topMovies.length === 0 && localMovies.length === 0 && <p className="status-message">Aucun film trouvé.</p>}
      <div className="movies-container">
        {/* Afficher les films locaux en plus des films récupérés */}
        {[...topMovies, ...localMovies].map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default Home;
