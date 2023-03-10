import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <GalleryItem>
        <GalleryImage src={this.props.smallImgURL} alt={this.props.id} />
      </GalleryItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  smallImgURL: PropTypes.string.isRequired,
};
