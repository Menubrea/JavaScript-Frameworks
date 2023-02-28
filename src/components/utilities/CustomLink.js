import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from './../../styles/Colors';

const StyledLink = styled(Link)`
  text-decoration: none;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  color: ${colors.dark};
  padding: 0.2em 1em;
  font-size: 1.5rem;
  display: block;
  width: fit-content;
  margin: 1em auto;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
  :hover {
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);
  }
`;

export function CustomLink(props) {
  return <StyledLink to={props.to}>{props.name}</StyledLink>;
}
