import { BaseImg, Container } from '../../styles/BaseStyles';
import styled from 'styled-components';
import * as colors from './../../styles/Colors';
import { CustomLink } from '../utilities';

const ButtonGroup = styled.div`
  display: flex;
  max-width: 500px;
  margin: 0 auto;
`;

const Message = styled.div`
  font-size: 1.5rem;
  text-align: center;
`;

const CartContainer = styled(Container)`
  background-color: #ebebeb;
  background-image: linear-gradient(120deg, #ebebeb 0%, #ffffff 100%);

  margin-top: 2em;
  min-height: 76.4vh;
  padding: 2em 1em 1em;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0.3em;

  h1 {
    padding: 0;
    margin: 0;
    text-align: center;
  }
`;

const SumContainer = styled.div`
  hr {
    margin: 0;
  }

  strong {
    display: block;
    width: 100%;
    text-align: right;
    margin: 0 0 0 auto;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  height: 5em;
  margin: 1em auto;
  max-width: 800px;
  outline: 2px solid ${colors.primary};

  img {
    --size: clamp(3em, 10vw, 5em);
    width: var(--size);
    height: 5em;
    object-fit: cover;
  }

  h2,
  p {
    font-size: clamp(1rem, 2vw, 1.2rem);
    margin: 0;
    padding: 0;
  }

  p {
    font-size: clamp(0.9rem, 2vw, 1.1rem);
  }
`;

const CartButton = styled.button`
  border: none;
  display: block;
  height: 100%;
  width: 1.5em;
  background-color: ${colors.accent};
  color: ${colors.light};
  font-size: 1.5rem;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 1em;
`;

export function CartPage({ state, dispatch }) {
  return (
    <CartContainer>
      {state.cart.length > 0 && <h1>Your Cart</h1>}
      {state.cart.length > 0 ? (
        state.cart.map((product) => {
          return (
            <ProductContainer key={product.id}>
              <CartButton
                onClick={() =>
                  dispatch({ type: 'addProduct', payload: product })
                }
              >
                +
              </CartButton>
              <BaseImg src={product.imageUrl} alt={product.title} />
              <FlexContainer>
                <div>
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                </div>
                <div>
                  <p>
                    {product.quantity} x {product.discountedPrice} kr
                  </p>
                </div>
              </FlexContainer>
              <CartButton
                onClick={() =>
                  dispatch({ type: 'removeProduct', payload: product })
                }
              >
                -
              </CartButton>
            </ProductContainer>
          );
        })
      ) : (
        <div>
          <Message>Your Cart is Empty. </Message>
          <CustomLink to="/" name="View Products" />
        </div>
      )}
      {state.cart.length > 0 && (
        <SumContainer>
          <strong>Total:</strong>
          <hr></hr>
          <strong>{state.total} kr</strong>
        </SumContainer>
      )}
      {state.cart.length > 0 && (
        <ButtonGroup>
          <CustomLink to="/checkout" name="Purchase" />
        </ButtonGroup>
      )}
    </CartContainer>
  );
}
