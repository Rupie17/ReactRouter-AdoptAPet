import React from 'react';
// import useNavigate here.
import { useNavigate } from 'react-router-dom';

const PetDetailsNotFound = () => {

  // get the navigate function from useNavigate
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/')
  }
  
  return (
    <main className="page">
      <h3>404: Who let the dogs out?</h3>
      <h4><center>Sorry, but the details for this pet have not been uploaded by the shelter yet. Check back later!</center></h4>
      <img
        src="https://i.chzbgr.com/full/8362031616/h9EB970C5/weve-lost-our-corgination"
        alt=""
      />
      <div className="actions-container">
        <button className="button" onClick={goHome}>
          Go Home
        </button>
      </div>
    </main>
  );
};

export default PetDetailsNotFound;
