import React, { useRef } from 'react'
import Counter from "./Counter"
import styled from 'styled-components';
import InputFiled from './InputFiled';
const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ced4da;
    cursor: not-allowed;
  }
`;

const DemoOnCounter = () => {
    const counterRef = useRef();
    const inputRef = useRef();

    return (
        <div className={{
            width: "300px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            backgroundColor: " #fff",
            transition: "transform 0.3s, boxShadow 0.3s",
        }}>
            <div style={{
                padding: "15px"
            }}>
                <Counter ref={counterRef} />
                <Button onClick={() => counterRef.current?.reset()}>Reset From parent </Button>
                <InputFiled ref={inputRef} />
                <Button onClick={() => inputRef.current?.reset()}>Reset input From parent </Button>
            </div>


        </div>
    )
}

export default DemoOnCounter
