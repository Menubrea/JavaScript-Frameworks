import styled from 'styled-components';
import * as colors from './../styles/Colors';

export const ReviewContainer = styled.div`
  background-color: white;
  padding: 1em;
  margin: 0.5em 0;
  position: relative;

  h2,
  p {
    margin: 0;
  }

  h2 {
    font-size: 1.2rem;
  }

  strong {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.5em;
    background-color: ${colors.dark};
    color: ${colors.light};
  }
`;

export function Reviews({ data }) {
  return (
    <>
      {data.map((review) => {
        return (
          <ReviewContainer key={review.id}>
            <h2>{review.username}</h2>
            <p>{review.description}</p>
            <strong>{review.rating} / 5</strong>
          </ReviewContainer>
        );
      })}
    </>
  );
}
