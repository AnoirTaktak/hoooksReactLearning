//import logo from './logo.svg';
import { useState } from 'react';
import { Movies } from './Movies';
import './App.css';

//import MovieCard from './components/MovieCard';
import MovieList from './components/MovieList';
import Nav from './components/Nav';
import AddMovie from './components/AddMovie';

function App() {
  const [movie, setMovie] = useState(Movies)
  const [inp, setInp] = useState('')
  const [etoile, setEtoile] = useState(1)
  const handleRating = (z) => setEtoile(z);
  const changement = (y) => setInp(y);
  const handleMovie = (newMovie) => setMovie([...movie,newMovie]);
  return (
    <div className="App">
      <div className="top">   
        <Nav ch={changement} x={etoile} handleRating={handleRating} />
        <div className="column is-full featured_wrapper p-0">
        <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/banner.jpg" alt='hi' className="featured" />
       </div>
  </div>
  <div className="container">
    <div className="columns is-multiline p-0 pt-6 last">
      <MovieList movie={movie.filter(el => (el.MovieName.toUpperCase().includes(inp.toUpperCase())) && (el.Rating>=etoile) )} />
      <AddMovie add={handleMovie} />
    </div>
  </div>


    </div>
  );
}

export default App;
