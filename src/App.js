import React from 'react';
import './App.css';
import { Fragment } from 'react';
import { useState } from 'react';
import MoviesList from './Components/MoviesList';

function App() {
  const[movies,setMovies] = useState([]);
  function FetchMovies (){
    fetch('https://swapi.dev/api/films').then((response)=>{
     return response.json();
    }).then(data=>{
      const res = data.results.map(MovieData =>{
        return{
          id:MovieData.episode.id,
          title:MovieData.title,
          openingText:MovieData.opening_crawl,
          releaseDate:MovieData.release_date
      }

      })
      setMovies(res);
    })
  }
  
  return (
    <Fragment>
      <section>
        <button onClick={FetchMovies} >Fetch Movies</button>
      </section>
      <section>
        <MoviesList  movies={movies}  />
      </section>




    </Fragment>


  );
}

export default App;
