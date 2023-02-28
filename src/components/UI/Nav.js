import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import * as colors from '../../styles/Colors';
import { useState } from 'react';
import { WideButton, IconButton } from '../../styles/BaseStyles';

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 0.5em;
  align-items: center;
  li {
    padding: 0.2em 0.5em;
    border-radius: 0.2em;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);

    a {
      text-decoration: none;
      color: ${colors.dark};
      font-size: 1.1rem;
    }
  }
  li:not(:last-child) {
    :hover {
      box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  display: flex;
  top: -0.5em;
  right: -0.5em;
  background-color: ${colors.light};
  color: ${colors.dark};
  border-radius: 100vw;
  height: 1em;
  width: 1em;
  justify-content: center;
  align-items: center;
  border: 2px solid ${colors.accent};
  font-size: 1rem;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  position: relative;
  background-color: ${colors.light};
  padding: 0;
  margin: 0;

  a {
    border: 2px solid ${colors.primary};
    padding: 0.2em 0.5em;
    border-radius: 0.1em;
    margin-right: 0.3em;
    :hover {
      background-color: ${colors.accent};
      color: ${colors.light};
    }
  }

  svg {
    display: flex;
    height: max-content;
    padding: 0.35em;
    background-color: ${colors.accent};
    color: white;
    border-radius: 0.2em;
  }
`;

const ShoppingCart = styled.li`
  position: fixed;
  bottom: 1em;
  right: 1em;
  background-color: ${colors.dark};
  z-index: 99;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0.2em;
`;

const CartWindow = styled.div`
  position: absolute;
  bottom: 2.6em;
  right: 0.1em;
  z-index: 1;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  width: calc(100% - 1em);
  text-align: right;
  padding: 0.5em;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 0.2em;
`;

const CartContent = styled.div`
  div {
    padding: 0.2em;
  }

  div:nth-child(2) {
    background-color: white;
  }
`;

export function Nav({ state, dispatch }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <nav>
      <NavList>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        {state.cart.length !== 0 && window.location.pathname !== '/cart' && (
          <ShoppingCart
            onMouseOver={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            <Content>
              {state.cart.reduce(
                (acc, product) => acc + product.quantity,
                0
              ) !== 0 && <Link to="/cart">Go to Checkout</Link>}
              <Overlay>
                {state.cart.reduce((acc, product) => acc + product.quantity, 0)}
              </Overlay>
              <ShoppingCartOutlinedIcon fontSize="small" />
            </Content>
            {isShown && state.cart.length !== 0 && (
              <CartWindow>
                <WideButton onClick={() => dispatch({ type: 'clearCart' })}>
                  Clear Cart
                </WideButton>
                {state.cart.map((product) => (
                  <CartContent key={product.id}>
                    <div>
                      <strong>{product.title}</strong>
                    </div>
                    <div>
                      <span>
                        <IconButton
                          onClick={() =>
                            dispatch({ type: 'addProduct', payload: product })
                          }
                        >
                          &#x2b;
                        </IconButton>
                        {product.quantity}{' '}
                        <IconButton
                          onClick={() =>
                            dispatch({
                              type: 'removeProduct',
                              payload: product,
                            })
                          }
                        >
                          &#x2212;
                        </IconButton>{' '}
                        x{' '}
                      </span>
                      {product.discountedPrice} kr
                    </div>
                  </CartContent>
                ))}

                <div>
                  <strong> Total:</strong>
                  <div>{state.total} kr</div>
                </div>
              </CartWindow>
            )}
          </ShoppingCart>
        )}
      </NavList>
    </nav>
  );
}
