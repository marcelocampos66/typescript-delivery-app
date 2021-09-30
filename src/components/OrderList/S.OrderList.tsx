import styled from 'styled-components';

class Styled {

  Section = styled.section`
    display: flex;
    width: 80%;
    justify-content: center;
    margin-top: 2%;
    flex-wrap: wrap;
  `;

  DivFlex = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    // align-items: center;
  `;

}

export default new Styled();
