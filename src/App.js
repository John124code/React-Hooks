import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';

const initialMovies = [
  {
    title: 'Inception',
    description: 'A thief who steals corporate secrets through dream-sharing technology.',
    posterURL: 'https://m.media-amazon.com/images/I/51s+z8FQFNL._AC_.jpg',
    rating: 8.8,
  },
  {
    title: 'Breaking Bad',
    description: 'A high school chemistry teacher turned methamphetamine producer.',
    posterURL: 'https://m.media-amazon.com/images/I/81k8A6+KJdL._AC_SY679_.jpg',
    rating: 9.5,
  },
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const handleAddMovie = (movie) => {
    setMovies([...movies, { ...movie, rating: Number(movie.rating) }]);
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title.toLowerCase().includes(filterTitle.toLowerCase());
    const matchesRating = filterRating === '' || movie.rating >= Number(filterRating);
    return matchesTitle && matchesRating;
  });

  return (
    <div className="App">
      <h1>My Favorite Movies & TV Shows</h1>
      <Filter
        title={filterTitle}
        setTitle={setFilterTitle}
        rating={filterRating}
        setRating={setFilterRating}
      />
      <AddMovie onAdd={handleAddMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
