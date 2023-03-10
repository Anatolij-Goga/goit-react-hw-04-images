import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalContainer } from './Modal.styled';

const modalRoot = document.querySelector('#modalRoot');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      return this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay>
        <ModalContainer>
          <img src={this.props.pic} alt={this.props.id} />
        </ModalContainer>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  pic: PropTypes.string.isRequired,
};
