import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movie}) => {
  return (
    <div className="column is-one-quarter">
        {
            movie.map(el => 
                <MovieCard el={el} />
                )
        }
    </div>
  )
}

export default MovieList