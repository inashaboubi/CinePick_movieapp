import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2, BiPlus } from 'react-icons/bi';  // Ajouter l'icône "+" de BiPlus
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    navigate(`/search?q=${encodeURIComponent(search.trim())}`);
    setSearch('');
  };

  return (
    <nav id="navbar" aria-label="Navigation principale">
      <h2 className="navbar-brand">
        <Link to="/">
          <span className="brand-icon"><BiCameraMovie aria-hidden="true" /></span>
          <span>CinePick</span>
        </Link>
      </h2>
      <form className="navbar-actions" onSubmit={handleSubmit} role="search">
        <input
          type="text"
          aria-label="Rechercher un film"
          placeholder="Chercher un film"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit" className="search-button" aria-label="Rechercher">
          <BiSearchAlt2 aria-hidden="true" />
        </button>
        <button type="button" id="plus-button" aria-label="Ajouter un film" onClick={() => navigate('/add-movie')}>
          <BiPlus aria-hidden="true" />
          <span className="add-button-label">Ajouter</span>
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
