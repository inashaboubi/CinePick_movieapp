import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Pour récupérer les paramètres de l'URL

const MovieDetail = () => {
  const { movieId } = useParams(); // Récupérer l'ID du film depuis l'URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Charger le film depuis sessionStorage
    const storedMovies = JSON.parse(sessionStorage.getItem("movies")) || [];
    const foundMovie = storedMovies.find((movie) => movie.id.toString() === movieId);
    setMovie(foundMovie);
  }, [movieId]);

  if (!movie) {
    return <p>Film non trouvé.</p>;
  }

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <img src={movie.poster_path} alt={movie.title} />
      <p><strong>Tagline:</strong> {movie.tagline}</p>
      <p><strong>Description:</strong> {movie.overview}</p>
      <p><strong>Durée:</strong> {movie.runtime} minutes</p>
    </div>
  );
};

export default MovieDetail;
