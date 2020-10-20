import React from 'react';

const Modal = (props: any) => {
  return (
    <div className={'modal-wrapper'}>
      <div className={'modal-backdrop'} />
      {props.children}
      <div className={'modal-box'}></div>
    </div>
  );
};
