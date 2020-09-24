import React, { useState } from "react";

// import { Container } from './styles';

const InputText: React.FC = () => {
  const [inputText, setInputText] = useState("");

  return (
    <>
      <input
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        placeholder="Enter Some Text"
      />
      {inputText}
    </>
  );
};

export default InputText;
