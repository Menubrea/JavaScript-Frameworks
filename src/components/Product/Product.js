import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { GetApi } from '../../API/getData';
import { BaseImg, Container } from '../../styles/BaseStyles';
import * as colors from '../../styles/Colors';
import { Price, Tags, Reviews } from '../';
import { CustomLink } from '../utilities';

const url = 'https://api.noroff.dev/api/v1/online-shop/';

const ImgContainer = styled.div`
  position: relative;
  img {
    height: clamp(30em, 50vh, 50em);
    object-fit: cover;
  }
`;

const ContentContainer = styled.div`
  h1,
  p {
    margin: 0;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 0.4em;
  }
`;

const ProductContainer = styled.div`
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

export function Product() {
  let { id } = useParams();
  const { data, isLoading, isError } = GetApi(url + id);

  if (isLoading || !data) {
    return <Container>Loading..</Container>;
  }

  if (isError) {
    return <Container>An error occurred</Container>;
  }

  if (data) {
    return (
      <ProductContainer key={data.id}>
        {console.log(data)}
        <ImgContainer>
          <BaseImg src={data.imageUrl} alt={data.title} />
          <Price item={data} />
        </ImgContainer>
        <ContentContainer>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          {data.tags && <Tags data={data.tags} />}
          {data.reviews && <Reviews data={data.reviews} />}
          <CustomLink primary="primary" to="/" name="Add to Cart" />
        </ContentContainer>
      </ProductContainer>
    );
  }
}
