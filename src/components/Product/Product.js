import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { BaseImg, Container } from '../../styles/BaseStyles';
import * as colors from '../../styles/Colors';
import { Price, Tags, Reviews } from '../';
import { CustomButton } from '../utilities';
import { useState, useEffect } from 'react';

const ImgContainer = styled.div`
  position: relative;
  img {
    height: clamp(30em, 70.8vh, 50em);
    object-fit: cover;
  }
`;

const ContentContainer = styled.div`
  padding: 1.5em;

  h1,
  p {
    margin: 0;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 0.4em;
  }
  @media only screen and (max-width: 800px) {
    padding: 1em;
  }

  @media only screen and (max-width: 500px) {
    padding: 0;
  }
`;

const ProductContainer = styled.div`
  background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;
  padding: 1em;
  background-color: ${colors.light};
  color: ${colors.dark};

  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export function Product({ data, isLoading, isError, dispatch }) {
  const [product, setProduct] = useState({});
  let { id } = useParams();

  useEffect(() => {
    data.filter((element) => {
      if (element.id === id) {
        localStorage.setItem('id', element.id);
        return setProduct(element);
      }
    });
  }, [product, data]);

  if (isLoading || !data) {
    return <Container>Loading..</Container>;
  }

  if (isError) {
    return <Container>An error occurred</Container>;
  }

  if (data) {
    return (
      <ProductContainer key={product.id}>
        <ImgContainer>
          <BaseImg src={product.imageUrl} alt={product.title} />
          <Price item={product} />
        </ImgContainer>
        <ContentContainer>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          {product.tags && <Tags data={product.tags} />}
          {product.reviews && <Reviews data={product.reviews} />}
          <CustomButton
            key={product.id}
            onClick={() => dispatch({ type: 'addProduct', payload: product })}
            primary="primary"
            name="Add to Cart"
          />
        </ContentContainer>
      </ProductContainer>
    );
  }
}
