import styled from 'styled-components';

class Styled {

  Div = styled.div`
    border-radius: 10px;
    border: 1px solid #0000001A;
    box-shadow: 0px 10px 10px 0px #0000001A;
    flex-basis: 20%;
    margin: 1% 1%;
    width: 25%;
    height: 50vh;
  `;

  Img = styled.img`
    max-height: 357px;
    width: 100%;
  `;

  Input = styled.input`
    display: initial;
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
    background-color: #EAF1EF;
    display: flex;
    flex-direction: column;
    height: 30%;
    bottom: 0;
  `;

  DivButtonInputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
  `;

  LButton = styled.button`
    background-color: black;
    border: 0;
    color: white;
    height: 35px;
    width: 35px;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    height: 60%;
  `;

  RButton = styled.button`
    background-color: black;
    border: 0;
    color: white;
    height: 35px;
    width: 35px;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    height: 60%;
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
