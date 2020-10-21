import React, { useState } from 'react';

import './Movie.css';
import MovieInformation from './MovieInformation';
import Modal from './Modal';
import '../App.css';

const Movie = (props: any) => {
  let email = '';
  {
    props.user ? (email = props.user.user.email) : (email = '');
  }
  const imdbId = props.imdbId;
  // const handleClick = () => {
  //   addmovie(email, imdbId);
  // };

  const [show, setShow] = useState(false);

  const openModal = () => {
    console.log('Open module');
    setShow(true);
  };

  const closeModal = () => {
    console.log('close module');
    setShow(false);
  };

  return (
    <div className='movie'>
      <div className='poster'>
        <img alt='poster' src={props.poster} />
      </div>
      <div className='title'>
        <h5>
          {props.title} ({props.year})
        </h5>
        {console.log(props.user)}
        {props.user ? (
          <button
            className='button'
            type='submit'
            onClick={(e) => {
              console.log('Clicking');
              e.preventDefault();
              props.addmovietolist(imdbId, email);
            }}
          >
            {' '}
            {}+ movie list
          </button>
        ) : null}
      </div>
      {!show && <button onClick={openModal}> Show modal</button>}
      <Modal closeModal={closeModal} show={show} />
    </div>
  );
};

export default Movie;
