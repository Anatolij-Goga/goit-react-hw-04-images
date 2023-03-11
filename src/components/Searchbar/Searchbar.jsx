import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import {
  SearchBar,
  SearchForm,
  SearchFormInput,
  SearchFormButton,
  ButtonSpan,
} from './Searchbar.styled';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.error('Enter your search query');
      return;
    }

    onSubmit(query);
  };

  return (
    <SearchBar>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          onInput={handleInputChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
        />
        <SearchFormButton type="submit">
          <ButtonSpan>Search</ButtonSpan>
        </SearchFormButton>
      </SearchForm>
    </SearchBar>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
