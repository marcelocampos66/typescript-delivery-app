import React from 'react';

interface Props {
  buttonText: string;
  isDisabled: boolean;
  onClick: () => void;
}

const LargeButton: React.FC<Props> = ({
  buttonText,
  isDisabled,
  onClick,
}) => {
  return (
    <button
      type="button"
      disabled={ isDisabled }
      onClick={ onClick }
    >
      { buttonText }
    </button>
  );
}

export default LargeButton;
