import { useState } from "react";

const Input = ({ defaultValue, name, placeholder, type, disabled }) => {
  const [invalid, setInvalid] = useState("");

  const onBlur = (e) => {
    if (!e.target.validity.valid) {
      setInvalid(`Please enter ${e.target.placeholder}`);
    } else {
      setInvalid("");
    }
  };

  return (
    <>
      <input
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        onBlur={onBlur}
        required
      />
      {invalid && <span className="text-red-500">{invalid}</span>}
    </>
  );
};

export default Input;
