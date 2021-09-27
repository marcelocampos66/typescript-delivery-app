import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  direction: boolean;
}

class Styled {

  Section = styled.main<Props>`
    display: flex;
    flex-direction: ${(props) => props.direction ? 'row' : 'column'};
    justify-content: center;
    align-items: center;
    width: ${(props) => props.direction ? '90%' : '50%'};
    height: 80%;
    border: ${(props) => props.direction ? 'none' : '1px solid black'};
    border-radius: 15px;
    box-shadow: ${(props) => props.direction ? 'none' : '0px 0px 10px rgba(0,0,0,0.25)'};

    background-color: ${(props) => props.theme.colors.primary};
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
    height: 8vh;
    margin: 1%;
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

  Select = styled.select`
    width: 100%;
    margin-bottom: 2%;
    height: 5vh;
    padding: 1%;

    &:focus {
      background-color: lightblue;
    }
  `;

  Img = styled.img`
    width: 80%;
    height: 100%;
  `;

  DivButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 20%;
  `;

  Button = styled.button<Props>`
    border: 1px solid black;
    border-radius: 5px;
    color: white;
    height: 5vh;
    width: ${(props) => props.direction ? '50%' : '20%'};
    background-color: ${(props) => props.disabled ? 'gray' : props.theme.colors.oposite};
    margin-right: ${(props) => props.direction ? '1%' : '0'};
    margin-top: ${(props) => props.direction ? '0' : '8%'};

    &:hover {
      background-color: ${(props) => props.disabled ? 'gray' : props.theme.colors.primary};
      color: ${(props) => props.theme.colors.text};
    }
  `;

  Link = styled(Link)`
    height: 60%;
    width: 50%;
    margin-left: 1%;
  `;

  Line = styled.div`
    height: 80%;
    border-right: 1px solid black;
  `;

}

export default new Styled();
