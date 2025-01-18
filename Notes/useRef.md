
# React `useRef` Hook

## Introduction
The `useRef` hook is a React Hook that provides a way to create a reference to a DOM element or persist a mutable value that does not cause a re-render when it changes. It is often used for direct DOM manipulation or for storing a value that doesn't need to trigger a UI update.

---

## Key Use Cases of `useRef`

1. **Accessing DOM Elements**:
   - Directly access and manipulate DOM elements (e.g., focus, scroll, animations).

2. **Persisting Mutable Values**:
   - Store mutable values that don't cause re-renders when updated.

3. **Tracking Previous State**:
   - Keep track of a previous state or value for comparisons.

4. **Avoiding Re-Renders**:
   - Hold values that don't need to trigger re-renders when updated.

---

## Syntax

```jsx
const ref = useRef(initialValue);
```

- `initialValue`: The initial value assigned to the `current` property of the `useRef` object.
- `ref.current`: The mutable property of the `ref` object, which can be read or updated.

---

## Examples of `useRef`

### 1. Accessing a DOM Element
Focus an input field on button click:

```jsx
import React, { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus(); // Directly access the input element
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me!" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default FocusInput;
```

---

### 2. Persisting a Mutable Value
Track how many times a component renders:

```jsx
import React, { useRef, useEffect } from "react";

const RenderCounter = () => {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1; // Update the mutable value
  });

  return <h1>Render Count: {renderCount.current}</h1>;
};

export default RenderCounter;
```

---

### 3. Tracking Previous State
Keep track of the previous state value:

```jsx
import React, { useState, useRef, useEffect } from "react";

const PreviousStateTracker = () => {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count; // Store the previous state
  }, [count]);

  return (
    <div>
      <h1>Current Count: {count}</h1>
      <h2>Previous Count: {prevCount.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default PreviousStateTracker;
```

---

### 4. Avoiding Re-Renders
Store a mutable value (e.g., timer) without causing re-renders:

```jsx
import React, { useRef, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef();

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  return (
    <div>
      <h1>Timer: {count}s</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};

export default Timer;
```

---

## When to Use `useRef`

- **Direct DOM Manipulation**: Focus, scroll, or animate DOM elements.
- **Storing Non-State Values**: Persist values across renders without triggering re-renders.
- **Accessing Previous Values**: Track the previous value of a prop or state.

---

## Limitations

- `useRef` updates do not trigger re-renders.
- Use `useState` instead if you need the value update to reflect in the UI.