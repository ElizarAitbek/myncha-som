import React from "react";
import styled from "styled-components";

export default function Input({ type, placeholder, onChange }) {
  return (
    <MainInput
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    ></MainInput>
  );
}

const MainInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  font-size: 20px;
  font-weight: 300;
`;
