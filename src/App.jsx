import React, { useState } from 'react';
import MovieList from './components/movielist';;
import Filter from './components/filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'expendables',
      description: 'action movie1',
      posterURL: './exp.jpeg',
      rating: 4.5,
    },
    {
      id: 2,
      title: 'scream',
      description: 'horror movie',
      posterURL: './scream.jpeg',
      rating: 3.8,
    },
    // Add more movies as needed
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState('');

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= parseFloat(rateFilter)
  );

  return (
    <div className="app">
      <h1>Movie List</h1>
      <Filter
        title={titleFilter}
        rate={rateFilter}
        onTitleChange={setTitleFilter}
        onRateChange={setRateFilter}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
