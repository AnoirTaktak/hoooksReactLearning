import React, { useState } from 'react'
//import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Stars from './Stars';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
const AddMovie = ({add}) => {

  //let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [MovieName, setName] = useState('');
  const [Rating, setRating] = useState(1);
  const [ImageSrc, setPoster] = useState('');


  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
  const newMovie={
     id : Math.random(),
     MovieName,
     Rating,
     ImageSrc
  }
  add(newMovie);
  closeModal();
  }
  const handleRating = (x) => setRating(x);
  return (
    <div>
      <button onClick={openModal}>Add Movie</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        
      >
        <form onSubmit={handleSubmit}>
          <label>Movie Name : </label>
          <input type='text' value={MovieName} onChange={(e)=>setName(e.target.value) } ></input>
          <label>Image Path : </label>
          <input type='url' value={ImageSrc} onChange={(e)=>setPoster(e.target.value) }></input>
          <label>Rating : </label>
          <Stars handleRating={handleRating} x={Rating}/>
          <button type='submit' style={{position:'center'}}>click To Add</button>
          
        </form>
        
      </Modal>

    </div>
  )
}

export default AddMovie