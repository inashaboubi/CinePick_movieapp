import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TMDB_API_KEY } from '../api';
import {
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from 'react-icons/bs';
import './Movie.css';

const API_URL = 'https://api.themoviedb.org/3/movie/';

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async () => {
    try {
      if (!TMDB_API_KEY) {
        throw new Error("Configurez VITE_TMDB_API_KEY dans le fichier .env.local.");
      }
      const res = await fetch(`${API_URL}${id}?api_key=${TMDB_API_KEY}`);
      if (!res.ok) {
        throw new Error(`Erreur réseau : ${res.status}`);
      }
      const data = await res.json();
      setMovie(data);
    } catch (error) {
      console.error('Erreur lors de la récupération du film :', error);
    }
  };

  useEffect(() => {
    if (id) {
      getMovie();
    }
  }, [id]);

  return (
    <section className="movie-page">
      {movie ? (
        <>
          <div className="movie-hero-poster">
            {movie.poster_path && (
              <img
                src={movie.poster_path.startsWith('http')
                  ? movie.poster_path
                  : `https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`Affiche de ${movie.title}`}
              />
            )}
          </div>

          <div className="movie-details">
            <header className="movie-detail-heading">
              <p className="eyebrow">Fiche du film</p>
              <h1>{movie.title}</h1>
              {movie.tagline && <p className="tagline">{movie.tagline}</p>}
            </header>
            <div className="movie-facts">
              <div className="info movie-runtime">
                <h2><BsHourglassSplit aria-hidden="true" /> Durée</h2>
                <p>{movie.runtime} minutes</p>
              </div>
            </div>
            <div className="description">
              <h2><BsFillFileEarmarkTextFill aria-hidden="true" /> L&apos;histoire du film</h2>
              <p className="synopsis-intro">Synopsis</p>
              <p>{movie.overview || 'Aucun synopsis détaillé n’est disponible pour ce film.'}</p>
            </div>
          </div>
        </>
      ) : (
        <p className="status-message" role="status">Chargement des détails…</p>
      )}
    </section>
  );
};

export default Movie;
