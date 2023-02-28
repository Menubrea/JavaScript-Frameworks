import { Nav } from './Nav';
import styled from 'styled-components';
import * as colors from '../../styles/Colors';
import { Link } from 'react-router-dom';

const BaseHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  height: 3.5em;
  border-bottom: 1px dashed ${colors.primary};

  a {
    text-decoration: none;
  }
`;

const Logo = styled.div`
  background-color: ${colors.accent};
  height: fit-content;
  width: fit-content;
  padding: 0.2em 0.5em;
  border-radius: 5px;
  color: ${colors.light};
  font-size: 18px;
`;

export function Header({ state, dispatch }) {
  return (
    <BaseHeader>
      <Link to="/">
        <Logo>
          <span>&#8476;</span>emote
        </Logo>
      </Link>
      <Nav state={state} dispatch={dispatch} />
    </BaseHeader>
  );
}
