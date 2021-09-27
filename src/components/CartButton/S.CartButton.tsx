import styled from 'styled-components';

class Styled {

  Div = styled.div`
    background-color: ${(props) => props.theme.colors.oposite};
    color: ${(props) => props.theme.colors.text};
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
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
  `;

  Button = styled.button`
    background-color: transparent;
    color: ${(props) => props.theme.colors.primary};
    border-radius: 100%;
    border: 0;
    height: 100%;
    width: 100%;

    &:hover {
      background-color: white;
      color: ${(props) => props.theme.colors.oposite};
    }
  `;

}

export default new Styled();
