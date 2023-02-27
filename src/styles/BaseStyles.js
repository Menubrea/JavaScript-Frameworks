import styled from 'styled-components';
import * as colors from './Colors';

export const BaseUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const BaseImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;

export const Box = styled.div`
  padding: 1em;
`;

export const ItemList = styled(BaseUl)`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;

  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.li`
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
  background-color: ${colors.light};
  position: relative;

  a {
    text-decoration: none;
    color: ${colors.dark};
  }

  img {
    display: block;
    height: 200px;
    width: 100%;
    object-fit: cover;
  }

  .cardBody {
    padding: 0.8em 1em;
  }

  h2,
  p {
    padding: 0;
    margin: 0;
    line-height: 1.5;
  }

  p {
    font-size: 1.1rem;
    line-height: 1;
  }

  :hover {
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);
  }
`;

export const SearchBar = styled.div`
  margin: 1em auto;
  width: fit-content;
  align-items: center;
  display: flex;
  cursor: pointer;
  input {
    all: unset;
    margin: 0 auto;
    max-width: 300px;
    border-radius: 100vw;
    background-color: ${colors.primary};
    color: ${colors.light};
    padding: 0.5em 1em;
  }
  button {
    all: unset;
    border-radius: 100vw;
    height: 20px;
    width: 20px;
    margin-left: 0.2em;
    color: white;
    background-color: black;
    padding: 0.2em;
    cursor: pointer;
    :hover {
      opacity: 0.7;
    }
  }
`;

export const SearchContainer = styled(Container)`
  position: absolute;
  background-color: ${colors.light};
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
  width: 100%;
  z-index: 100;
  p,
  h2 {
    color: ${colors.dark};
    text-align: left;
  }

  div {
    padding: 0.5em;
    width: fit-content;
    margin: 0 auto;
  }

  button {
    all: unset;
    display: block;
    width: 100%;
    background-color: ${colors.dark};
    text-align: center;
    color: ${colors.light};
    cursor: pointer;
    :hover {
      opacity: 0.7;
    }
  }
`;

export const ThumbnailCard = styled.li`
  background-color: ${colors.light};
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
  div {
    padding: 0.5em;
  }

  a {
    display: flex;
    text-decoration: none;
  }

  img {
    display: block;
    width: 100px;
    height: 100px;
    object-fit: cover;
  }

  h2 {
    font-size: 1.1rem;
    margin: 0;
  }

  p {
    font-size: 1rem;
    margin: 0;
  }
`;
