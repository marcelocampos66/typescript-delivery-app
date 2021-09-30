import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';

const zoomInEffect = keyframes`${zoomIn}`;

class Styled {

  Div = styled.div`
    border-radius: 10px;
    border: 1px solid #0000001A;
    box-shadow: 0px 10px 10px 0px #0000001A;
    margin: 1% 1%;
    width: 20%;
    height: 50vh;
    animation: 1s ${zoomInEffect};
  `;

  Img = styled.img`
    max-height: 357px;
    width: 100%;
  `;

  Input = styled.input`
    text-align: center;
    width: 30px;
    height: 50%;
  `;

  DivImgContainer = styled.div`
    display: flex;
    width: 100%;
    height: 70%;
  `;

  DivCardFooter = styled.div`
    align-items: center;
    background-color: ${(props) => props.theme.colors.secondary};
    display: flex;
    flex-direction: column;
    height: 30%;
  `;

  DivNameContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40%;
    width: 100%;
  `;

  DivButtonInputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60%;
    width: 100%;
  `;

  LButton = styled.button`
    background-color: black;
    border: 0;
    color: white;
    height: 35px;
    width: 35px;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    height: 50%;
  `;

  RButton = styled.button`
    background-color: black;
    border: 0;
    color: white;
    height: 35px;
    width: 35px;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    height: 50%;
  `;

  Price = styled.p`
    background: rgba( 242, 255, 252, 0.75 );
    border-radius: 10px;
    font-size: 1.5em;
    font-weight: 700;
    margin-left: 20px;
    margin-top: 8px;
    padding: 10px 15px;
    position: absolute;
  `;

}

export default new Styled();
