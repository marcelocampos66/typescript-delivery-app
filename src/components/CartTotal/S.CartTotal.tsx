import styled from 'styled-components';

class Styled {

  Div = styled.div`
    width: 100%;
    border: 1px solid #ddd;
    padding: 8px;

    background-color: ${(props) => props.theme.colors.background};
  `;

  P = styled.p`
    font-size: 12px;
  `;

}

export default new Styled();
