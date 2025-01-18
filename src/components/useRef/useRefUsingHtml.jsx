// Import necessary libraries (React, styled-components, etc.)
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
// Styled Components for Input Field
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffffff;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  padding: 20px;
  max-width: 400px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: #343a40;
  margin-bottom: 5px;
`;

const InputField = styled.input`
  padding: 10px;
  width: 100%;
  font-size: 1rem;
  color: #495057;
  border: 2px solid #ced4da;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
  }
`;

// Input Field Component
const TextInput = ({ label, placeholder }) => {
  const [value, setValue] = useState('');
  const useRefHtmlHolder = useRef();

  useEffect(()=>{
    useRefHtmlHolder.current?.focus()
  },[])

  return (
    <InputContainer >
      <Label>{"Enter Text"}</Label>
      <InputField
        ref={useRefHtmlHolder}
        type="text"
        value={value}
        placeholder={"Type something..."}
        onChange={(e) => setValue(e.target.value)}
      />
    </InputContainer>
  );
};
export default TextInput;
