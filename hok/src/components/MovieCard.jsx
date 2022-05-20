import React from 'react'
import Stars from './Stars';


const MovieCard = ({el}) => {
  return (
        <div>
            <h3 style={{color:'white'}}>{el.MovieName}</h3>
             <Stars x={el.Rating} />
             <img src={el.ImageSrc} alt='hi' style={{height:'200px', width:'200px'}}/>
        </div>

  );
}

export default MovieCard