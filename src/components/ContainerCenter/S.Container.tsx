import styled from 'styled-components';

class Styled {

  Main = styled.main`
    background-color: ${(props) => props.theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
  `;

}

export default new Styled();
