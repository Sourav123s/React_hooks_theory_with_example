The `useCallback` hook in React is used to optimize performance by memoizing callback functions. It ensures that a function reference remains stable across renders unless its dependencies change. This is particularly useful when passing functions as props to child components, preventing unnecessary re-renders.

## Key Features of `useCallback`

1. **Memoization**: Returns a memoized version of the callback function.
2. **Dependencies**: Recomputes the function only when dependencies in the dependency array change.
3. **Performance Optimization**: Helps avoid re-creating functions during every render, reducing computation and improving performance in certain scenarios.

## Syntax

```jsx
const memoizedCallback = useCallback(() => {
  // Your callback logic here
}, [dependencies]);
```

- **`memoizedCallback`**: The memoized version of the function.
- **`dependencies`**: An array of values that the function depends on. The function is re-created only if one or more dependencies change.

## Example

### Without `useCallback`

```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <Button onClick={increment} />
    </div>
  );
};

const Button = ({ onClick }) => {
  console.log("Button rendered");
  return <button onClick={onClick}>Increment</button>;
};

export default Counter;
```

- The `Button` component re-renders every time the `Counter` component renders because the `increment` function gets re-created on every render.

### With `useCallback`

```jsx
import React, { useState, useCallback } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <Button onClick={increment} />
    </div>
  );
};

const Button = React.memo(({ onClick }) => {
  console.log("Button rendered");
  return <button onClick={onClick}>Increment</button>;
});

export default Counter;
```

- Here, `useCallback` ensures that the `increment` function reference remains stable across renders, and the `Button` component re-renders only when necessary.

## When to Use `useCallback`

- **Passing Functions as Props**: Prevents child components from re-rendering unnecessarily.
- **Performance Optimization**: In scenarios where creating functions is computationally expensive or causes performance bottlenecks.

## Points to Remember

1. **Avoid Premature Optimization**: Only use `useCallback` when performance issues arise or are likely.
2. **Stable Dependencies**: Ensure that dependencies passed to `useCallback` are accurate and stable.

### Pros
- Prevents unnecessary renders.
- Improves performance for expensive computations.

### Cons
- Adds complexity if used excessively.
- Dependency tracking can lead to bugs if not managed correctly.

---

**React Docs Reference**: [useCallback](https://react.dev/reference/react/useCallback)

