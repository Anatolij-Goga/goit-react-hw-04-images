import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from 'components/Modal/Modal';
import { nanoid } from 'nanoid';
import { Gallery } from './ImageGallery.styled';

export default function ImageGallery({ images }) {
  const [showModal, setShowModal] = useState(false);
  const [bigPicture, setBigPicture] = useState(null);

  useEffect(() => {
    document.addEventListener('click', event => {
      if (event.target.nodeName !== 'IMG') {
        return;
      }
      let picture = images.filter(object => {
        return object.id === parseInt(event.target.alt);
      });
      if (!picture.length) {
        return;
      }
      setBigPicture(picture[0].largeImageURL);
    });
  }, [bigPicture, images]);

  const toggleModal = () => {
    setShowModal(prevShow => !prevShow);
  };

  return (
    <>
      <Gallery onClick={toggleModal}>
        {images.map(image => {
          return (
            <ImageGalleryItem
              key={nanoid()}
              smallImgURL={image.webformatURL}
              id={image.id}
            />
          );
        })}
      </Gallery>
      {showModal && bigPicture && (
        <Modal onClose={toggleModal} pic={bigPicture} />
      )}
    </>
  );
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
