import React from "react";



const Movie = ({title,releaseDate,openingText}) => {
  return (
    <li>
        <h2>{title}</h2>
        <h3>{releaseDate}</h3>
        <p>{openingText}</p>
    </li>
  )
}

export default Movie