import styled from 'styled-components';
import * as colors from '../../styles/Colors';

const BaseFooter = styled.footer`
  background-color: ${colors.primary};
  color: ${colors.light};
  padding: 0.5em;
  text-align: center;
`;

export function Footer() {
  return (
    <BaseFooter>
      <div>All rights reserved | Menubrea &#174;</div>
    </BaseFooter>
  );
}
