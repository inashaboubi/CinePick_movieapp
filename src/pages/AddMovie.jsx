import { useState } from 'react';
import './AddMovie.css';

const AddMovie = () => {
  const [movieData, setMovieData] = useState({
    title: '',
    tagline: '',
    budget: '',
    revenue: '',
    runtime: '',
    overview: '',
    poster_path: '',  // URL de l'affiche
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMovieData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sauvegarder le film dans le localStorage (en attendant l'intégration d'une base de données)
      const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
      storedMovies.push(movieData);
      localStorage.setItem('movies', JSON.stringify(storedMovies));

      setResponseMessage('Film ajouté avec succès !');
      setMovieData({
        title: '',
        tagline: '',
        budget: '',
        revenue: '',
        runtime: '',
        overview: '',
        poster_path: '', // Réinitialiser l'URL de l'affiche
      });
    } catch {
      setResponseMessage('Erreur lors de l\'ajout du film.');
    }
  };

  return (
    <section className="add-movie-container">
      <header className="page-heading">
        <p className="eyebrow">Votre collection</p>
        <h1>Ajouter un nouveau film</h1>
        <p>Renseignez les informations du film pour l&apos;ajouter à votre collection.</p>
      </header>
      <form onSubmit={handleSubmit} className="add-movie-form">
        <label htmlFor="title">
          Titre :
          <input
            type="text"
            name="title"
            id="title"
            value={movieData.title}
            onChange={handleInputChange}
            required
          />
        </label>
        <label htmlFor="tagline">
          Tagline :
          <input
            type="text"
            name="tagline"
            id="tagline"
            value={movieData.tagline}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="budget">
          Budget :
          <input
            type="number"
            name="budget"
            id="budget"
            value={movieData.budget}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="revenue">
          Revenue :
          <input
            type="number"
            name="revenue"
            id="revenue"
            value={movieData.revenue}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="runtime">
          Durée (en minutes) :
          <input
            type="number"
            name="runtime"
            id="runtime"
            value={movieData.runtime}
            onChange={handleInputChange}
          />
        </label>
        <label className="form-field-wide" htmlFor="overview">
          Description :
          <textarea
            name="overview"
            id="overview"
            value={movieData.overview}
            onChange={handleInputChange}
          />
        </label>
        <label className="form-field-wide" htmlFor="poster_path">
          URL de l&apos;affiche :
          <input
            type="text"
            name="poster_path"
            id="poster_path"
            value={movieData.poster_path}
            onChange={handleInputChange}
            placeholder="https://image.tmdb.org/t/p/w500/path_to_image.jpg"
          />
        </label>
        <button type="submit" className="submit-movie">Ajouter le film</button>
      </form>
      {responseMessage && <p className="response-message" role="status">{responseMessage}</p>}
    </section>
  );
};

export default AddMovie;