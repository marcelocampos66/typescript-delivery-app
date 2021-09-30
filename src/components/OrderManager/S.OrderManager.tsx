import styled from 'styled-components';

class Styled {

  Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10vh;
    margin: 1% 0;
    font-size: 18px;
    color: ${(props) => props.theme.colors.text};
  `;

  DivBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    border: 1px solid #ddd;
    padding: 8px;
    height: 5vh;

    background-color: ${(props) => props.theme.colors.background};
  `;

  Button = styled.button`
    height: 3vh;
    width: 40%;
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
