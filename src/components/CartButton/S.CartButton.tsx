import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';

const pulseEffect = keyframes`${pulse}`;

class Styled {

  Div = styled.div`
    border-radius: 100%;
    border: 0;
    cursor: pointer;
    font-size: small;
    font-weight: 700;
    position: fixed;
    right: 20px;
    top: 11%;
    height: 60px;
    width: 60px;
    z-index: 998;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
      animation: 0.5s ${pulseEffect};
    }
  `;

  Button = styled.button`
    border-radius: 100%;
    border: 0;
    height: 100%;
    width: 100%;
    margin-top: 5%;
    font-weight: 700;
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.text};

    &:hover {
      background-color: ${(props) => props.theme.colors.third};
      color: black;
      border: 1px solid ${(props) => props.theme.colors.third};
    }
  `;

  Img = styled.img`
    height: 100%;
    width: 100%;
    margin-bottom: 15%;
    position: static;
  `;

}

export default new Styled();
