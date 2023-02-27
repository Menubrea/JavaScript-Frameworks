import styled from 'styled-components';
import * as colors from '../../styles/Colors';

const StyledButton = styled.button`
  all: unset;
  text-decoration: none;
  background-color: ${(props) => (props.primary ? colors.dark : colors.light)};
  color: ${(props) => (props.primary ? colors.light : colors.dark)};
  padding: 0.2em 1em;
  font-size: 1.5rem;
  display: block;
  width: fit-content;
  margin: 1em auto;
  border-radius: 1em;
  cursor: pointer;
  :hover {
    outline: 3px solid ${colors.secondary};
  }
`;

export function CustomButton(props) {
  return (
    <StyledButton primary={props.primary} onClick={props.onClick}>
      {props.name}
    </StyledButton>
  );
}
