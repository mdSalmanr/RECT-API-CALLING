import React from 'react'
import Movie from './Movie'

const MoviesList = (props) => {
  return (
    <ul>
        {props.movies.map((movie)=>{
            return(
            <Movie
            title={movie.title}
            releaseDate={movie.releaseDate}
            opiningText={movie.opiningText}
            />
            )
        })}




    </ul>
  )
}

export default MoviesList