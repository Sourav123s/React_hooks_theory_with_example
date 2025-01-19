
# React `useEffect` Hook

## Introduction
The `useEffect` hook is a React Hook that allows you to perform side effects in functional components. It handles tasks such as data fetching, subscriptions, or manually manipulating the DOM.

---

## Key Features of `useEffect`

1. **Performs Side Effects**:
   - Used for tasks like data fetching, DOM manipulation, or event subscriptions.

2. **Runs After Render**:
   - By default, it runs after the initial render and after every update.

3. **Dependency Array**:
   - Specify dependencies to control when the effect should run.

4. **Cleanup**:
   - Optionally return a cleanup function to clean up resources (e.g., remove event listeners).

---

## Syntax

```jsx
useEffect(() => {
  // Effect logic here

  return () => {
    // Cleanup logic here (optional)
  };
}, [dependencies]);
```

- **Effect Function**: Executes after render or dependency changes.
- **Cleanup Function**: Executes before the effect re-runs or when the component unmounts.
- **Dependencies Array**: Controls when the effect runs. If empty (`[]`), it runs only once after the initial render.

---

## Examples of `useEffect`

### 1. Basic Example
Update the document title on every render:

```jsx
import React, { useEffect, useState } from "react";

const DocumentTitle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  });

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default DocumentTitle;
```

---

### 2. Effect with Dependencies
Run the effect only when the dependency changes:

```jsx
useEffect(() => {
  console.log("The count has changed to:", count);
}, [count]); // Runs only when `count` changes
```

---

### 3. Cleanup Function
Add and remove event listeners:

```jsx
import React, { useEffect, useState } from "react";

const WindowResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty array ensures this runs only once

  return <h1>Window Width: {width}</h1>;
};

export default WindowResize;
```

---

### 4. Fetching Data
Fetch data from an API when the component mounts:

```jsx
import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // Empty array to fetch data only once

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default FetchData;
```

---

## When to Use `useEffect`

- Fetching or updating data.
- Subscribing to events or APIs.
- Performing animations or logging.
- Cleaning up resources when components unmount.

---

## Dependency Array Behavior

1. **No Dependencies (`[]`)**:
   - Runs only once after the initial render.

2. **With Dependencies**:
   - Runs whenever the specified dependencies change.

3. **Without Array**:
   - Runs after every render (not recommended unless necessary).

---

## Common Mistakes

1. **Missing Dependencies**:
   - Always include dependencies in the array if they are used inside the effect.

2. **Overuse**:
   - Use `useEffect` only for side effects. Avoid running computational logic or rendering tasks.

---

## Cleanup Function Example

To understand cleanup more clearly, consider a subscription example:

```jsx
useEffect(() => {
  const subscribe = () => {
    console.log("Subscribed!");
  };

  const unsubscribe = () => {
    console.log("Unsubscribed!");
  };

  subscribe();

  return () => {
    unsubscribe(); // Called when the effect is cleaned up
  };
}, []); // Runs only once
```

---