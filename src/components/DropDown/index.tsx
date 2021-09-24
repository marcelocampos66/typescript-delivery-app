import React from 'react';

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
    <label htmlFor={ name }>
      { labelText }
      <select
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
      </select>
    </label>
  );
}


export default DropDown;
