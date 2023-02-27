import * as colors from './../styles/Colors';
import styled from 'styled-components';

const PriceContainer = styled.div`
  position: absolute;
  top: 2em;
  right: 0;
  background-color: ${colors.secondary};
  color: ${colors.light};
  text-align: right;
  padding: 0.5em;
  outline: 0.05em dashed ${colors.accent};
  s + strong {
    margin-left: 0.2em;
  }
`;

export function Price({ item }) {
  return (
    <PriceContainer>
      {item.discountedPrice !== item.price ? (
        <div>
          <s> {item.price} kr</s>
          <strong>{item.discountedPrice} kr</strong>
          <div>You save {item.price - item.discountedPrice} kr!</div>
        </div>
      ) : (
        <strong>{item.price} kr</strong>
      )}
    </PriceContainer>
  );
}
