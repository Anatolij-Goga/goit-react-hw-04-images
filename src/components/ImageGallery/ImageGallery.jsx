import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/Modal/Modal';
import { nanoid } from 'nanoid';
import { Gallery } from './ImageGallery.styled';

export default class ImageGallery extends Component {
  state = {
    showModal: false,
    bigPicture: null,
  };

  componentDidMount() {
    document.addEventListener('click', event => {
      if (event.target.nodeName !== 'IMG') {
        this.setState({ showModal: false });
        return;
      } else {
        let picture = this.props.images.filter(object => {
          return object.id === parseInt(event.target.alt);
        });
        this.setState({ bigPicture: picture[0].largeImageURL });
      }
    });
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal, bigPicture } = this.state;
    return (
      <>
        <Gallery onClick={this.toggleModal}>
          {this.props.images.map(img => {
            return (
              <ImageGalleryItem
                key={nanoid()}
                smallImgURL={img.webformatURL}
                id={img.id}
              />
            );
          })}
        </Gallery>
        {showModal && bigPicture && (
          <Modal onClose={this.toggleModal} pic={bigPicture} />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
};
