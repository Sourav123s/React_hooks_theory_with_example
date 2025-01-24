# Higher-Order Components (HOCs) in React

## **What is a Higher-Order Component (HOC)?**

A **Higher-Order Component (HOC)** is a pattern in React that allows you to reuse component logic. It is a function that takes a component as an argument and returns a new component with additional props or behaviors.

### **Syntax of an HOC:**

```javascript
const withExtraLogic = (WrappedComponent) => {
  return (props) => {
    // Add additional logic or props here
    return <WrappedComponent {...props} additionalProp="value" />;
  };
};
```

## **Why Use Higher-Order Components?**

1. **Reusability**: Encapsulate logic that can be shared across multiple components.
2. **Separation of Concerns**: Keep your components focused on rendering UI and abstract logic into reusable HOCs.
3. **Composability**: Combine multiple HOCs to add different sets of functionalities to a component.
4. **Avoid Repetition**: Reduce code duplication by wrapping components with shared functionality.

---

## **When to Use HOCs**

HOCs are useful in situations where you need to:

1. **Abstract Reusable Logic**: Example: Fetching data, authentication checks, or managing subscriptions.
2. **Conditional Rendering**: Render different components or modify component behavior based on certain conditions.
3. **Enhance Props**: Add or modify props passed to a component.
4. **Code Composition**: Dynamically modify a component's behavior without modifying its source code.

---

## **How to Use HOCs**

### **1. Basic Example: Adding Extra Props**

```javascript
const withUser = (WrappedComponent) => {
  return (props) => {
    const user = { name: "Alice", age: 25 }; // Example logic
    return <WrappedComponent {...props} user={user} />;
  };
};

const DisplayUser = (props) => {
  return <div>User: {props.user.name}</div>;
};

const EnhancedComponent = withUser(DisplayUser);
```

### **2. Example: Authentication Check**

```javascript
const withAuth = (WrappedComponent) => {
  return (props) => {
    const isLoggedIn = true; // Mock authentication check
    if (!isLoggedIn) {
      return <div>Please log in</div>;
    }
    return <WrappedComponent {...props} />;
  };
};

const Dashboard = () => {
  return <div>Welcome to the Dashboard</div>;
};

const ProtectedDashboard = withAuth(Dashboard);
```

### **3. Combining Multiple HOCs**

```javascript
const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log("Props:", props);
    return <WrappedComponent {...props} />;
  };
};

const EnhancedComponent = withLogger(withAuth(Dashboard));
```

---

## **Advantages of HOCs**

1. **Code Reusability**: Share logic without duplicating code.
2. **Composition**: Apply multiple layers of functionality to components.
3. **Decoupling**: Keep UI components clean and focused on rendering.

---

## **Drawbacks of HOCs**

1. **Complex Debugging**: Can lead to nested HOCs, making debugging harder.
2. **Prop Conflicts**: Be cautious when overriding props passed down to the wrapped component.
3. **Performance Overhead**: Wrapping components in multiple HOCs might slightly increase rendering time.

---

## **Modern Alternatives**

While HOCs are still valid, modern React patterns like **custom hooks** often replace them due to better readability and flexibility. For example:

### **Custom Hook Alternative:**

```javascript
const useUser = () => {
  return { name: "Alice", age: 25 };
};

const DisplayUser = () => {
  const user = useUser();
  return <div>User: {user.name}</div>;
};
```

---

## **When to Choose HOCs Over Custom Hooks**

- When dealing with **class components** (hooks cannot be used in class components).
- For enhancing component behavior without modifying the component itself.
