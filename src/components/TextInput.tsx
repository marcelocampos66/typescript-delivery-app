import React from 'react';

interface Props {
  type: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelText: string;
  placeholderText: string;
}


const TextInput: React.FC<Props> = ({
  type,
  name,
  onChange,
  labelText,
  placeholderText
}) => {
  return (
    <label htmlFor={ name } >
      { labelText }
      <input
        type={ type }
        id={ name }
        name={ name }
        onChange={ onChange }
        placeholder={ placeholderText }
      />
    </label>
  );
}

export default TextInput;
