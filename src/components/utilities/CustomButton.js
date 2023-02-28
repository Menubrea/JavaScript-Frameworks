import styled from 'styled-components';
import * as colors from '../../styles/Colors';

const StyledButton = styled.button`
  all: unset;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  color: ${colors.dark}
  text-decoration: none;
  padding: 0.15em 1em;
  font-size: 1.3rem;
  display: block;
  width: fit-content;
  margin: 1em auto;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  :hover {
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);
  }
`;

export function CustomButton(props) {
  return <StyledButton onClick={props.onClick}>{props.name}</StyledButton>;
}
