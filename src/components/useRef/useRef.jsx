// Import necessary libraries (React, styled-components, etc.)
import React, { useRef, useState } from 'react';
import styled from 'styled-components';

// Styled Components for Count Feature
const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f9fa;
  border: 2px solid #ced4da;
  border-radius: 10px;
  padding: 20px;
  max-width: 300px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const CountDisplay = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #495057;
  margin-bottom: 10px;
`;

const IncrementButton = styled.button`
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
`;

// Count Feature Component
const Counter = () => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(0);

  const handelIncrement = ()=>{
    // console.log("Is this function i called ?")
    setCount(count + 1);
    counterRef.current++;

    console.log("State Count:",count);
    console.log('Use ref count:',counterRef.current);
  }

  return (
    <CounterContainer>
      <CountDisplay>{count}</CountDisplay>
      <IncrementButton onClick={handelIncrement}>
        Increment
      </IncrementButton>
    </CounterContainer>
  );
};

export default Counter;