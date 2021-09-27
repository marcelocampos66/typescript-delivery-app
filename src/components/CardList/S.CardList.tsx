import styled from 'styled-components';

class Styled {

  Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
    flex-wrap: wrap;
    width: 100%;

    background-color: ${(props) => props.theme.colors.background};
  `;

}

export default new Styled();
