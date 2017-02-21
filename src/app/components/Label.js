import React from 'react';

export default function Label({ children, labelFor, className }) {
  return (
      <label className={className} htmlFor={labelFor}>{ children }</label>
  );
}
