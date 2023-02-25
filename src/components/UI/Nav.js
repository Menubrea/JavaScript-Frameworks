import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 1em;
  align-items: center;
  li {
    padding: 0.2em 0.2em;
    border-radius: 0.2em;
    background-color: white;
    a {
      text-decoration: none;
      color: purple;
    }
    :nth-child(3) {
      border: 0.15em solid purple;
      color: white;
      :hover {
        background-color: purple;
        a {
          color: white;
        }
      }
      svg {
        display: flex;
        align-items: center;
      }
    }
  }
`;

export function Nav() {
  return (
    <nav>
      <NavList>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart">
            <ShoppingCartOutlinedIcon fontSize="small" />
          </Link>
        </li>
      </NavList>
    </nav>
  );
}
