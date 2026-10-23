import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { BiCameraMovie } from 'react-icons/bi';
import PropTypes from 'prop-types'; // Pour la validation des props

const imageUrl = "https://image.tmdb.org/t/p/w500"; // Correction de l'URL d'image

const MovieCard = ({ movie, showLink = true }) => {
  const posterPath = movie.poster_path
    ? movie.poster_path.startsWith('http')
      ? movie.poster_path
      : `${imageUrl}${movie.poster_path}`
    : null;

  return (
    <article className="movie-card">
      <div className="movie-poster">
        {posterPath
          ? <img src={posterPath} alt={`Affiche de ${movie.title}`} loading="lazy" />
          : <div className="movie-poster-placeholder" aria-label="Affiche non disponible"><BiCameraMovie aria-hidden="true" /></div>}
      </div>
      <div className="movie-card-content">
        <h2>{movie.title}</h2>
        <p className="movie-rating" aria-label={`Note : ${movie.vote_average ?? 'non disponible'}`}>
          <FaStar aria-hidden="true" /> {movie.vote_average ?? '—'}
        </p>
        {showLink && <Link className="movie-details-link" to={`/movie/${movie.id}`}>Détails</Link>}
      </div>
    </article>
  );
};

// Validation des props avec PropTypes
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  showLink: PropTypes.bool,
};

export default MovieCard;
