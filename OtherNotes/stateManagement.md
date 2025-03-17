# State vs Props in React

## 1. State

- **Definition**: The state is an internal data store (an object) maintained within a component.
- **Mutable**: It can be updated within the component using the `useState` hook in functional components or `this.setState()` in class components.
- **Component-Specific**: Each component manages its own state, and it is not accessible by other components unless passed as props.
- **Triggers Re-render**: Updating the state causes the component to re-render.

### Example of State in a Functional Component:

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // state variable

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

---

## 2. Props (Properties)

- **Definition**: Props are short for "properties" and are used to pass data from a parent component to a child component.
- **Immutable**: Props are read-only inside the child component.
- **Passed from Parent to Child**: A parent component sends data to a child component as props.
- **No Direct Modification**: The child component cannot modify the props it receives.

### Example of Props:

```jsx
function Greeting({ name }) {
  // Receiving props
  return <h1>Hello, {name}!</h1>;
}

function App() {
  return <Greeting name="John" />; // Passing props
}

export default App;
```

---

## Key Differences Between State and Props

| Feature          | State                                              | Props                                                     |
| ---------------- | -------------------------------------------------- | --------------------------------------------------------- |
| **Definition**   | Internal data storage within a component           | Data passed from a parent component                       |
| **Mutability**   | Can be updated using `setState` or `useState`      | Immutable (cannot be changed by the child component)      |
| **Scope**        | Local to the component                             | Passed from parent to child                               |
| **Usage**        | Stores dynamic values (e.g., user input, API data) | Used for configuring and passing data to child components |
| **Re-rendering** | Changes in state trigger re-render                 | Changes in props trigger re-render of child components    |

---

# Props Drilling in React

## What is Props Drilling?

**Props drilling** is a situation in React where you pass data (props) from a parent component down to deeply nested child components, even when intermediate components don’t need that data. This can make the code harder to maintain and less efficient.

### Example of Props Drilling

```jsx
function App() {
  const user = { name: "John Doe", age: 25 };
  return <ParentComponent user={user} />;
}

function ParentComponent({ user }) {
  return <ChildComponent user={user} />;
}

function ChildComponent({ user }) {
  return <GrandChildComponent user={user} />;
}

function GrandChildComponent({ user }) {
  return (
    <h2>
      User: {user.name}, Age: {user.age}
    </h2>
  );
}

export default App;
```

👉 Here, `user` is passed down multiple levels unnecessarily, leading to **props drilling**.

---

## Problems with Props Drilling

1. **Harder to Maintain** – If multiple components need the data, modifying the props structure can be tedious.
2. **Unnecessary Prop Passing** – Intermediate components receive props they don’t need.
3. **Increased Complexity** – The deeper the component tree, the more difficult it becomes to manage props.

---

## Solutions to Avoid Props Drilling

### 1. Context API (Recommended)

React’s Context API allows you to store and access state globally without prop drilling.

```jsx
import { createContext, useContext } from "react";

const UserContext = createContext();

function App() {
  const user = { name: "John Doe", age: 25 };

  return (
    <UserContext.Provider value={user}>
      <ParentComponent />
    </UserContext.Provider>
  );
}

function ParentComponent() {
  return <ChildComponent />;
}

function ChildComponent() {
  return <GrandChildComponent />;
}

function GrandChildComponent() {
  const user = useContext(UserContext);
  return (
    <h2>
      User: {user.name}, Age: {user.age}
    </h2>
  );
}

export default App;
```

✅ **No more props drilling!** The `GrandChildComponent` can access `user` directly from the `UserContext`.

---

### 2. State Management Libraries (Redux, Zustand, Recoil)

For larger applications, libraries like **Redux** or **Zustand** help manage global state and avoid prop drilling.
