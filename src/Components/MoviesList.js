import React from 'react'
import Movie from './Movie'

const MoviesList = (props) => {
  return (
    <ul>
        {props.movies.map((movie)=>{
            return(
            <Movie
            title={movie.title}
            year ={movie.year}
            poster={movie.poster}
            />
            )
        })}




    </ul>
  )
}

export default MoviesList