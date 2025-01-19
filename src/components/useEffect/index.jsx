// Import necessary libraries (React, styled-components, etc.)
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Styled Components for Counter with Increment and Decrement
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

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

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

// Counter Component with Increment and Decrement
const UseEffectIndex = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  useEffect(()=>{
    //Task to perform 
    console.log("The count is changed to :",count);
    //optional cleaned up functions that runs the any of the dependency are changed 

    return ()=>{
        console.log("Use Effect cleaned up!")
    }
  },[count]);

  // When the dependency array in not given every useEffect will run on every render ;

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
    <CounterContainer>
      <CountDisplay>{count}</CountDisplay>
      <ButtonGroup>
        <Button onClick={decrement} disabled={count === 0}>
          Decrement
        </Button>
        <Button onClick={increment}>
          Increment
        </Button>
      </ButtonGroup>
    </CounterContainer>
    </div>
  );
  
};
export default UseEffectIndex
