
# React `useContext` Hook

## Introduction
The `useContext` hook in React allows you to access the value of a Context directly in functional components. It eliminates the need to manually pass data down through props at each level of the component tree.

## When to Use `useContext`
Use `useContext` when you need to share global data across multiple components in your application, such as user information, themes, language preferences, etc.

## Steps to Use `useContext`

1. **Create a Context**: Use `React.createContext()` to create a new context.
2. **Provide the Context Value**: Wrap your component tree with a `Context.Provider` to pass the context value down the tree.
3. **Consume the Context Value**: Use the `useContext` hook in any functional component to access the value provided by the context.

## Example

### 1. Create Context
```jsx
const UserContext = React.createContext();
```

### 2. Provide Context
```jsx
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "John Doe", age: 30 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
```

### 3. Consume Context
```jsx
const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>{user.name}'s Profile</h1>
      <p>Age: {user.age}</p>
    </div>
  );
};
```

### Full Example:
```jsx
import React, { useState, useContext } from "react";

// Step 1: Create Context
const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "John Doe", age: 30 });

  return (
    // Step 2: Provide the context value
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const Profile = () => {
  // Step 3: Consume the context value using useContext
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>{user.name}'s Profile</h1>
      <p>Age: {user.age}</p>
    </div>
  );
};

const ChangeName = () => {
  const { user, setUser } = useContext(UserContext);

  const changeName = () => {
    setUser({ ...user, name: "Jane Doe" });
  };

  return <button onClick={changeName}>Change Name</button>;
};

const App = () => {
  return (
    <UserProvider>
      <Profile />
      <ChangeName />
    </UserProvider>
  );
};

export default App;
```

## Conclusion
The `useContext` hook is a powerful way to avoid prop-drilling and share state across your React components in a clean and efficient manner. It can simplify your component structure, especially in larger applications.