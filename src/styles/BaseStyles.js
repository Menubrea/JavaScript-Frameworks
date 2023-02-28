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

export const IconButton = styled.button`
  all: unset;
  background-color: ${colors.accent};
  color: ${colors.light};
  outline: 2px solid ${colors.accent};
  width: 10px;
  height: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.3em;
  border-radius: 100vw;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const WideButton = styled.button`
  all: unset;
  display: block;
  background-color: ${colors.light};
  color: ${colors.dark};
  outline: 2px solid ${colors.dark};

  width: 100%;
  text-align: center;
  cursor: pointer;
  margin-bottom: 0.2em;

  :hover {
    background-color: ${colors.dark};
    color: ${colors.light};
  }
`;

export const Card = styled.li`
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
  background-color: #ebebeb;
  background-image: linear-gradient(120deg, #ebebeb 0%, #ffffff 100%);
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
    margin: 0.2em 0 0.4em;
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
    border: 3px solid ${colors.primary};
    color: ${colors.dark};
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
