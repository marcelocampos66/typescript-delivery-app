import React from 'react';
import Styled from './S.DropDown';

interface Props {
  name: string;
  options: Array<ISeller>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  labelText: string;
  value: string;
}

const DropDown: React.FC<Props> = ({
  name,
  options,
  onChange,
  labelText,
  value,
}) => {
  return (
    <Styled.Label htmlFor={ name }>
      { labelText }
      <Styled.Select
        name={ name }
        id={ name }
        onChange={ onChange }
        value={ value }
      >
        <option value="">
          Select Seller
        </option>
        {options.map((option: ISeller, key) => (
          <option key={ key } value={ option.id }>
            { option.name }
          </option>
        ))}
      </Styled.Select>
    </Styled.Label>
  );
}


export default DropDown;
