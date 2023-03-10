import styled from '@emotion/styled';

const SearchBar = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #f5f4fa;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font-size: 30px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &:placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

const SearchFormButton = styled.button`
  padding-top: 10px;
  padding-bottom: 10px;
  min-width: 200px;

  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: calc(30 / 16);
  letter-spacing: 0.06em;
  color: #ffffff;
  background-color: #2196f3;

  border-style: none;
  border-radius: 4px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus,
  &:active {
    background-color: #188ce8;
  }
`;

const ButtonSpan = styled.span``;

export { SearchBar, SearchForm, SearchFormInput, SearchFormButton, ButtonSpan };
