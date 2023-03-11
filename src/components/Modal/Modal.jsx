import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalContainer } from './Modal.styled';

const modalRoot = document.querySelector('#modalRoot');

export default function Modal({ onClose, pic, id }) {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        return onClose();
      }
    };

    const handleClickAway = event => {
      if (event.target.className.includes('Modal_overlay')) {
        return onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleClickAway);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleClickAway);
    };
  });

  return createPortal(
    <Overlay>
      <ModalContainer>
        <img src={pic} alt={id} />
      </ModalContainer>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  pic: PropTypes.string.isRequired,
};
