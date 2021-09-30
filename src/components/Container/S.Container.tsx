import styled from 'styled-components';

class Styled {

  Main = styled.main`
    background-color: ${(props) => props.theme.colors.primary};
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 100vh;
  `;

}

export default new Styled();
