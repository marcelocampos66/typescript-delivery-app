import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import Helpers from "../../helpers/Helpers";
import Styled from './S.SwitchButton';

const SwitchButton: React.FC = () => {
  const { theme, setTheme } = useContext(AppContext);
  
  const onClick = () => {
    const data = Helpers.getDataFromStorage();
    data!.theme = !theme;
    localStorage.setItem('user', JSON.stringify(data));
    setTheme(!theme);
  }

  return (
    <Styled.DivContainer>
      <Styled.CheckBoxWrapper>
        <Styled.CheckBox
          id="checkbox"
          type="checkbox"
          onClick={ () => onClick() }
        />
        <Styled.CheckBoxLabel htmlFor="checkbox" />
      </Styled.CheckBoxWrapper>
    </Styled.DivContainer>
  );
};

export default SwitchButton;
