import React, { useReducer } from "react";
import styled from "styled-components";

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
const state = {
    count: 0,
    error: "",
};
const actions = {
    type: "",
};

function reducer(state, actions) {
    switch (actions.type) {
        case "Increment":
            {
                return { ...state, count: state.count + 1 };
            }
        case "Decrement":
            {
                return { ...state, count: state.count - 1 };
            }

        default:
            return state;
    }
}
function UseReducerIndex() {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        error: null,
    });
    return (
        <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
            <CounterContainer>
                <CountDisplay>Count:{state.count}</CountDisplay>
                {state.error && <div className="mb-2 text-red-500">{state.error}</div>}
                <ButtonGroup>
                    <Button onClick={() => dispatch({ type: "Decrement" })}>
                        Decrement
                    </Button>
                    <Button onClick={() => dispatch({ type: "Increment" })}>
                        Increment
                    </Button>
                </ButtonGroup>
            </CounterContainer>
        </div>
    );
}
export default UseReducerIndex;
