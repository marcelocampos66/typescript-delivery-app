import styled from 'styled-components';

class Styled {

  Table = styled.table`
    width: 100%;
    margin-top: 1%;

    background-color: ${(props) => props.theme.colors.background};
  `;

  Button = styled.button`
    width: 30%;
    background-color: ${(props) => props.theme.colors.oposite};
    color: ${(props) => props.theme.colors.primary};

    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.oposite};
    }
  `;

  Td = styled.td`
    border: 1px solid #ddd;
    font-size: 12px;
    padding: 8px;
    width: 100px;
  `;

  Th = styled.th`
    border: 1px solid #ddd;
    font-size: 12px;
    padding: 8px;
    width: 100px;

    background-color: black;
    color: white;
    padding-bottom: 12px;
    padding-top: 12px;
    text-align: left;
  `;

  Tr = styled.tr`
    &:nth-child( even ) {
      background-color: ${(props) => props.theme.colors.third};
    }
    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
    }
  `;

  Tbody = styled.tbody`
    text-align: center;
  `;

}

export default new Styled();
