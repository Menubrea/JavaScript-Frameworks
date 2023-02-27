import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from './../../styles/Colors';

const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: ${(props) => (props.primary ? colors.dark : colors.light)};
  color: ${(props) => (props.primary ? colors.light : colors.dark)};
  padding: 0.2em 1em;
  font-size: 1.5rem;
  display: block;
  width: fit-content;
  margin: 1em auto;
  :hover {
    outline: 3px solid ${colors.secondary};
  }
`;

export function CustomLink(props) {
  return (
    <StyledLink primary={props.primary} to={props.to}>
      {props.name}
    </StyledLink>
  );
}
