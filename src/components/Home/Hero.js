import styled from 'styled-components';
import * as colors from '../../styles/Colors';

const banner =
  'https://images.rawpixel.com/image_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvdHAyMjktdHdpdHRlcmhlYWRlci0wNi1wZi1iZzEyLmpwZw.jpg';

const HeroContainer = styled.div`
  display: block;
  position: relative;

  img {
    display: block;
    width: 100%;
    min-height: 300px;
    object-fit: cover;
  }
  div {
    position: absolute;
    bottom: 2em;
    right: 0;
    background-color: ${colors.light};
    color: ${colors.dark};
    padding: 0.5em 1em;
    border-bottom: 0.5em solid ${colors.secondary};
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
    h1,
    p {
      margin: 0;
      padding: 0;
      font-weight: 900;
      text-align: left;
      line-height: 1;
    }
    h1 {
      font-size: clamp(2rem, 5vw, 3rem);
      font-weight: 700;
    }
    p {
      font-size: clamp(1rem, 1vw, 1.5rem);
    }
  }
`;

export function Hero() {
  return (
    <HeroContainer>
      <img src={banner} alt="Hero banner" />
      <div>
        <h1>REMOTE</h1>
        <p>All of your shopping needs - online</p>
      </div>
    </HeroContainer>
  );
}
