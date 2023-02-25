import styled from 'styled-components';

const BaseFooter = styled.footer`
  background-color: purple;
  color: white;
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
