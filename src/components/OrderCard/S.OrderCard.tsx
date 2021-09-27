import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Styled {

  Link = styled(Link)`
    width: 30%;
    height: 50vh;
    border: 1px solid black;
  `; 

  DivCard = styled.div`
    display: flex;
    flex-direction: row;
  `;

}

export default new Styled();
