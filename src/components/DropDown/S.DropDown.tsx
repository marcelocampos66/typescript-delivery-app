import styled from 'styled-components';

class Styled {

  Label = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
    height: 5vh;
    margin: 1%;
    color: ${(props) => props.theme.colors.text}
  `;

  Select = styled.select`
    height: 5vh;
    border-radius: 5px;
    padding: 1%;
    backgroud-color: ${(props) => props.theme.colors.oposite}
    color: ${(props) => props.theme.colors.text}
  `;

}

export default new Styled();
