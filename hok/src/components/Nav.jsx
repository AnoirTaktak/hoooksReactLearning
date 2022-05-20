import React from 'react'
import Stars from './Stars'

const Nav = ({ch,x,handleRating}) => {
  return (
    <div>
       <h3 style={{color:'white'}}>Filter</h3>  
       <Stars x={x} handleRating={handleRating}  />
       <input type='text' onChange={(e)=>ch(e.target.value)}></input> 
    </div>
  )
}

export default Nav