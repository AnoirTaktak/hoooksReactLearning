import React from 'react'

const Stars = ({x,handleRating}) => {
    function stars (y){
        let arr =[];
        for (let i = 1; i <= 5; i++) {
            if (i<=y){
                arr.push(<span onClick={()=>handleRating(i)} style={{color:'gold' ,cursor:'pointer'}}>&#9733;</span>);
            }else
                arr.push(<span onClick={()=>handleRating(i)} style={{color:'white' ,cursor:'pointer'}}>&#9733;</span>);  
            
        }
        return arr
    }
  return (
    <div>{stars(x)}</div>
  )

}
Stars.defaultProps = {
  handleRating : () => {} 
}

export default Stars