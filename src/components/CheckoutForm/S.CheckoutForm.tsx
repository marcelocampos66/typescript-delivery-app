import styled from 'styled-components';

class Styled {

  Section = styled.section`
    display: flex;
    width: 100%;
    height: 8vh;
    justify-content: space-around;
    align-items: center;
    border: 2px solid #ddd;
    font-size: 12px;
    padding: 8px;
  `;

  Label = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
    height: 5vh;
    margin: 1%;
    color: ${(props) => props.theme.colors.oposite}
  `;

  Input = styled.input`
    height: 5vh;
    border-radius: 5px;
    color: ${(props) => props.theme.colors.oposite}
    background-color: ${(props) => props.theme.colors.primary};
  `;

  Button = styled.button`
    height: 3vh;
    width: 10%;
    border-radius: 5px;
    background-color: ${(props) => props.disabled ? 'lighgray' : props.theme.colors.oposite};
    color: ${(props) => props.disabled ? 'gray' : props.theme.colors.primary};

    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.disabled ? 'gray' : props.theme.colors.oposite};
    }
  `;

}

export default new Styled();
