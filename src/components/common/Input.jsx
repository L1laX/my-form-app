import React from 'react';

const Input = ({ type, name, onChange, value, className, max }) => {
  return (
    <input
      className={`w-full p-2 border rounded-xl border-gray-200 mx-1 focus:bg-slate-200 ${className}`}
      type={type}
      name={name}
      onChange={onChange}
      value={value}
      min={1}
      max={max}
      required
    />
  );
};

export default Input;
