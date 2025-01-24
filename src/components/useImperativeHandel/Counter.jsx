// Import necessary libraries (React, styled-components, etc.)
import React, { forwardRef, useImperativeHandle, useState } from 'react';
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
const Counter = (
    { },
    ref
) => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);


    const reset = () => setCount(0);

    // With this any parent component that is used this components will be provide a ref
    // By using this we will have accessed all the exposed function
    // parent will can have access to the counter components by providing the ref and parent also call the function using ref.current.reset()
    useImperativeHandle(ref, () => ({
        reset,
    }))

    return (
        <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
            <CounterContainer>
                <CountDisplay>{count}</CountDisplay>
                <ButtonGroup>
                    <Button onClick={decrement}>
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
export default forwardRef(Counter)
