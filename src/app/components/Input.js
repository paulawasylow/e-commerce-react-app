import React from 'react';

export default function Input({
  inputType,
  inputName,
  inputId,
  inputValue,
  inputClassName,
  inputMin,
  inputMax,
  inputStep,
  onChange,
  onClick,
  checked,
  placeholder
}) {
  return (
      <input type={inputType}
             name={inputName}
             id={inputId}
             value={inputValue}
             min={inputMin}
             max={inputMax}
             step={inputStep}
             className={inputClassName}
             onChange={onChange}
             onClick={onClick}
             checked={checked}
             placeholder={placeholder}
             />
  );
}
