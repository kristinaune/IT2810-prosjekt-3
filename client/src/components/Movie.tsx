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

        {!show && (
          <button onClick={openModal} className='button2'>
            {' '}
            More information
          </button>
        )}
        <Modal closeModal={closeModal} show={show} {...props} />
      </div>
    </div>
  );
};

export default Movie;
