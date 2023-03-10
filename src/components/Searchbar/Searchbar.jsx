import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import {
  SearchBar,
  SearchForm,
  SearchFormInput,
  SearchFormButton,
  ButtonSpan,
} from './Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInputChange = e => {
    this.setState({ query: e.target.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      toast.error('Enter your search query');
      return;
    }

    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <SearchBar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormInput
            onInput={this.handleInputChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
          />
          <SearchFormButton type="submit">
            <ButtonSpan>Search</ButtonSpan>
          </SearchFormButton>
        </SearchForm>
      </SearchBar>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
