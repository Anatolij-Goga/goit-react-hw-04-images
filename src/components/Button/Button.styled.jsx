import styled from '@emotion/styled';

const LoadMoreButton = styled.button`
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 35px auto;
  min-width: 200px;
  text-align: center;

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

export { LoadMoreButton };
