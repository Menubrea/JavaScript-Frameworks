import { Nav } from './Nav';
import styled from 'styled-components';

const BaseHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;

  div {
    background-color: purple;
    height: fit-content;
    width: fit-content;
    padding: 0.2em 0.5em;
    border-radius: 5px;
    color: white;
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
