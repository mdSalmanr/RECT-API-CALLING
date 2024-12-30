import React, { useEffect } from 'react';
import './App.css';
import { Fragment } from 'react';
import { useState } from 'react';
import MoviesList from './Components/MoviesList';


function App() {
  const[movies,setMovies] = useState([]);
  const[loading,setLoading] = useState(false);
  const[error,setError] = useState(null);
   useEffect(()=>{
    try{
      setLoading(true);
    fetch('https://www.omdbapi.com/?apikey=21a79ebe&s=titanic').then((res)=>{
      return res.json();
    }).then((data)=>{
      const update = data.Search.map(item =>{
        return{
          id:item.imdbID,
          title:item.Title,
          poster:item.Poster,
          year:item.Year,
        }

      })
      setMovies(update);

    })

  }catch(error){

  }
   },[])
    
 
    
   

   
  /*function FetchMovies (){
    fetch("https://swapi.dev/api/films/").then((response)=>{
     return response.json();
    }).then((data)=>{
      const res = data.results.map(MovieData =>{
        return{
          id:MovieData.episode.id,
          title:MovieData.title,
          openingText:MovieData.opening_crawl,
          releaseDate:MovieData.release_date
      }

      })
      setMovies(res);
      setLoading(true);
    })
  }*/
  
  return (
    <Fragment>
      
      <section>
        
        {loading  && <MoviesList movies={movies}/>}
        {loading  && <p>loading..</p>  }
      </section>
    </Fragment>


  );
}

export default App;
