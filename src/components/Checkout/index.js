import styled from 'styled-components';
import { Container } from '../../styles/BaseStyles';
import * as colors from './../../styles/Colors';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useEffect } from 'react';
import { CustomLink } from '../utilities';

const CheckoutContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  min-height: 87.2vh;

  div:nth-child(1) {
    position: relative;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    padding: 1em;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);

    h1 {
      margin: 0.2em;
      text-align: center;
    }
    strong {
      display: block;
      color: ${colors.accent};
      text-align: center;
    }
  }

  svg {
    position: absolute;
    color: green;
    font-size: 3rem;
    top: -0.5em;
    right: -0.5em;
    background-color: ${colors.light};
    border-radius: 100vh;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }
`;

export function Checkout({ dispatch }) {
  // Clear Cart on Checkout
  useEffect(() => {
    return dispatch({ type: 'clearCart' });
  }, []);
  return (
    <CheckoutContainer>
      <div>
        <h1>Your order was successful</h1>
        <CheckCircleIcon />
        <div>
          <strong>Order number: 9291231823128</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            vitae dolor urna. Vivamus iaculis dictum elementum. Praesent
            interdum, urna vel.{' '}
          </p>
          <CustomLink to="/" name="Back to Products" />
        </div>
      </div>
    </CheckoutContainer>
  );
}
