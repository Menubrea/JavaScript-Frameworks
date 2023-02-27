import { Nav } from './Nav';
import styled from 'styled-components';
import * as colors from '../../styles/Colors';

const BaseHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;

  div {
    background-color: ${colors.primary};
    height: fit-content;
    width: fit-content;
    padding: 0.2em 0.5em;
    border-radius: 5px;
    color: ${colors.light};
    font-size: 20px;
  }
`;

export function Header() {
  return (
    <BaseHeader>
      <div>&#8476;</div>
      <Nav />
    </BaseHeader>
  );
}
