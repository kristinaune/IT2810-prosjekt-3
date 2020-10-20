import React from 'react';

function Footer() {
  const openModal = () => {
    console.log('Open module');
  };
  return (
    <div className='footer'>
      <button
        className='buttons'
        onClick={() => console.log('Hi there, user!')}
      >
        {' '}
        Open module
      </button>
    </div>
  );
}

export default Footer;
