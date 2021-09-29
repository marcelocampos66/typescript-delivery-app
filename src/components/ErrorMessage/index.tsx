import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

const ErrorMessage: React.FC = () => {
  const { errorMessage, setErrorMessage } = useContext(AppContext);
  
  return (
    <div>
      <p>{ errorMessage }</p>
      <button
        type="button"
        onClick={ () => setErrorMessage('') }
      >
        Sair
      </button>
    </div>
  );
}

export default ErrorMessage;
