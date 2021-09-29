import styled from 'styled-components';

class Styled {

  Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    // height: 90vh;
    // margin-top: 10vh;

    background-color: ${(props) => props.theme.colors.background};
  `;

}

export default new Styled();
