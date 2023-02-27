import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import * as colors from '../../styles/Colors';

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 1em;
  align-items: center;
  li {
    padding: 0.2em 0.2em;
    border-radius: 0.2em;
    background-color: ${colors.light};
    a {
      text-decoration: none;
      color: ${colors.primary};
    }
    :nth-child(3) {
      border: 0.15em solid purple;
      color: ${colors.light};
      :hover {
        background-color: ${colors.primary};
        a {
          color: ${colors.light};
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
