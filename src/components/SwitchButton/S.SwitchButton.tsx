import styled from "styled-components";

class Styled {

  DivContainer = styled.div``;

  CheckBoxWrapper = styled.div`
    position: relative;
  `;

  CheckBoxLabel = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    width: 42px;
    height: 26px;
    border-radius: 15px;
    background: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin: 3px;
      background: #ffffff;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
      transition: 0.2s;
    }
  `;

  CheckBox = styled.input`
    opacity: 0;
    z-index: 1;
    border-radius: 15px;
    width: 42px;
    height: 26px;
    &:checked + ${this.CheckBoxLabel} {
      background: ${(props) => props.theme.colors.secondary};
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        margin-left: 21px;
        transition: 0.2s;
      }
    }
  `;

}

export default new Styled();
