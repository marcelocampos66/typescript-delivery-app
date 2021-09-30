import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  status: string;
}

class Styled {

  Link = styled(Link)`
    width: 45%;
    height: 18vh;
    text-decoration: none;
    margin: 1%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid #B1C2BE;
  `; 

  DivCard = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.text};
  `;

  DivOrderNumber = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 25%;
    background-color: ${(props) => props.theme.colors.primary};
  `;

  DivStatus = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 100%;
  `;

  DivInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  `;

  DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 75%;
  `;

  DivAddress = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 90%;
  `;

  DivDatePrice = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 100%;
  `;

  P = styled.p`
    width: 90%;
    border-radius: 5px;
    height: 40%;
    margin: 5% 0;
    background-color: ${(props) => props.theme.colors.primary};

    display: flex;
    justify-content: center;
    align-items: center;
  `;

  PStatus = styled.p<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.status === 'Delivered' ? 'rgba(102, 204, 0, 0.75)' : 'rgba(204, 184, 0, 0.75)'};
    width: 90%;
    height: 90%;
    border-radius: 5px;
    font-size: 22px;
  `;

}

export default new Styled();
