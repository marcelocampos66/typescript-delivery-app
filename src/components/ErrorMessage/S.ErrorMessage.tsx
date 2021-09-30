import styled, { keyframes } from 'styled-components';
import { shake } from 'react-animations';

const shakeEffect = keyframes`${shake}`;

class Styled {

  Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 25vh;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    background-color: ${(props) => props.theme.colors.secondary};
    animation: 0.5s ${shakeEffect};

    position: absolute;
  `;

  DivMessage = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  `;

  Img = styled.img`
    width: 20%;
  `;

  Button = styled.button`
    width: 30%;
    height: 5vh;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
    margin-top: 5%;

    &:hover {
      background-color: ${(props) => props.theme.colors.oposite};
      color: ${(props) => props.theme.colors.primary};
    }
  `;

}

export default new Styled();
