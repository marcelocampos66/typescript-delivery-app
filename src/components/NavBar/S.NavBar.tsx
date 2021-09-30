import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Styled {

  Navbar = styled.nav`
    color: white;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 8vh;

    background-color: #000000;
  `;

  DivOptions = styled.div`
    display: flex;
    height: 100%;
    width: 75%;
  `;

  DivLogout = styled.div`
    display: flex;
    height: 100%;
    width: 25%;
    justify-content: space-between;
  `;

  DivName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50%;
  `;

  Link = styled(Link)`
    height: 100%;
  `;

  Button = styled.button`
    border: none;
    height: 100%;
    background-color: black;
    color: white;
    width: 150px;

    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
  `;

}

export default new Styled();
