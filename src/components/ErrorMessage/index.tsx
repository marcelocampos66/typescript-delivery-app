import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import attention from '../../images/attention.jpg';
import Styled from './S.ErrorMessage';

const ErrorMessage: React.FC = () => {
  const { errorMessage, setErrorMessage } = useContext(AppContext);
  
  return (
    <Styled.Div>
      <Styled.DivMessage>
        <Styled.Img
          src={ attention }
          alt="Attention!"
        />
        <p>{ errorMessage }</p>
        <Styled.Img
          src={ attention }
          alt="Attention!"
        />
      </Styled.DivMessage>
      <Styled.Button
        type="button"
        onClick={ () => setErrorMessage('') }
      >
        Sair
      </Styled.Button>
    </Styled.Div>
  );
}

export default ErrorMessage;
