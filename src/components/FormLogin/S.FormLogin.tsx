import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { slideInDown } from 'react-animations';

const slideInDownEffect = keyframes`${slideInDown}`;

class Styled {

  Section = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80%;
  `;

  Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 80%;
  `;

  Label = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    color: ${(props) => props.theme.colors.oposite};
  `;

  Input = styled.input`
    width: 100%;
    margin-bottom: 2%;
    height: 5vh;
    padding: 1%;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.25);

    &:focus {
      background-color: lightblue;
    }
  `;

  Img = styled.img`
    width: 80%;
    height: 100%;
    animation: 1s ${slideInDownEffect};
  `;

  DivButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 20%;
  `;

  Button = styled.button`
    border: 1px solid black;
    border-radius: 5px;
    color: ${(props) => props.theme.colors.primary};
    height: 40%;
    width: 50%;
    margin-right: 1%;
    background-color: ${(props) => props.disabled ? 'gray' : props.theme.colors.oposite};
    color: ${(props) => props.disabled ? 'lighgray' : props.theme.colors.primary};

    &:hover {
      background-color: ${(props) => props.disabled ? 'gray' : props.theme.colors.primary};
      color: ${(props) => props.disabled ? 'lighgray' : props.theme.colors.oposite};
    }
  `;

  Link = styled(Link)`
    height: 40%;
    width: 50%;
    margin-left: 1%;
  `;

  ButtonRegister = styled.button`
    border: 1px solid black;
    border-radius: 5px;
    color: ${(props) => props.theme.colors.primary};
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.theme.colors.oposite};

    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.text};
    }
  `;

  Line = styled.div`
    height: 80%;
    border-right: 1px solid black;
  `;

}

export default new Styled();
