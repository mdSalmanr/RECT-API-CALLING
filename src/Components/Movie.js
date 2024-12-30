import React from "react";



const Movie = ({title,year,poster}) => {
  return (
    <li>
        <h2>{title}</h2>
        <img src={poster}  />
        <p> {year}  </p>
    </li>
  )
}

export default Movie