import React from "react";

function FormInput({ placeholder, onChange }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      className="bg-bg-1 mt-2 my-4 py-4 px-2 max-w-full rounded-lg grid"
    />
  );
}

export default FormInput;
