# How React Rendered UI Before Fiber

## 1. How React Rendered UI Before Fiber

Before React Fiber (React 15 and earlier), React used a **stack-based reconciliation algorithm** to render and update the UI. This approach had three key steps:

### **Step 1: Rendering (Building the Virtual DOM)**

- When you write JSX, React converts it into a **Virtual DOM tree**.
- This is an **in-memory representation** of the actual UI.

#### Example: React Component Tree

```jsx
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>Welcome to React!</p>
    </div>
  );
}
```

React **does not directly modify the real DOM**. Instead, it creates a **Virtual DOM** like this:

```
Virtual DOM (Initial Render)
App
 ├── <div>
 │     ├── <h1> Hello </h1>
 │     ├── <p> Welcome to React! </p>
```

This step is **fast** because it happens in memory.

---

### **Step 2: Diffing (Comparing New and Old Virtual DOMs)**

When **state or props change**, React **re-renders** the component and creates a new Virtual DOM.

#### Example: UI Update

```jsx
function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

👉 When you click the button, `count` changes, so React:

1. **Creates a new Virtual DOM** based on the updated state.
2. **Compares the new Virtual DOM with the previous Virtual DOM**.

---

### **Step 3: Updating (Applying Changes to the Real DOM)**

Once React knows what changed, it **updates the real DOM efficiently**:

1. React **does not re-render the whole UI**.
2. It **only updates the changed elements** (`<h1>` in this case).
3. This process is called **Reconciliation**.

#### Example: How React Updates the Real DOM

Instead of replacing the entire DOM:

```html
<div>
  <h1>Count: 0</h1>
  <!-- DELETE -->
  <button>Increase</button>
</div>
```

and replacing it with:

```html
<div>
  <h1>Count: 1</h1>
  <!-- INSERT -->
  <button>Increase</button>
</div>
```

React efficiently does:

```js
document.querySelector("h1").innerText = "Count: 1";
```

This makes updates **faster** and **more efficient**.

---

## 2. How React Handled Updates Before Fiber

React 15 (before Fiber) used a **recursive stack-based reconciliation** process to update the UI.

### **🔹 What is Stack-Based Reconciliation?**

Before Fiber, React used a **recursive call stack** approach for rendering and updating components. This process worked as follows:

1. When a component’s **state or props changed**, React triggered an update starting from the root component.
2. React used the **JavaScript call stack** to recursively traverse and render each component in depth-first order.
3. Each component’s **render method (class components) or function body (functional components)** executed, generating a new Virtual DOM.
4. React compared the new Virtual DOM with the previous one and applied only the necessary changes to the real DOM.
5. This process **was synchronous and could not be paused, interrupted, or prioritized**.

### **🔹 Example: Recursive Stack-Based Reconciliation (Class Components)**

```jsx
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return <h1>Welcome</h1>;
  }
}

class Content extends React.Component {
  render() {
    return <p>Some content here...</p>;
  }
}

class Footer extends React.Component {
  render() {
    return <p>Footer section</p>;
  }
}
```

🔹 **How React Processed This:**

1. Calls `App.render()` → returns JSX.
2. Calls `Header.render()` → returns JSX.
3. Calls `Content.render()` → returns JSX.
4. Calls `Footer.render()` → returns JSX.
5. React **compares the new Virtual DOM with the previous one** and updates only the necessary parts of the real DOM.

### **🔹 Why Stack-Based Reconciliation Was Inefficient**

- **Synchronous Execution:** The entire UI update had to complete in a single JavaScript tick, which could block the main thread.
- **No Interruption or Prioritization:** React could not pause work to handle urgent updates like animations or user interactions.
- **Slow Performance on Large Applications:** If the component tree was deep, updates took longer, causing UI lags.

---

## **🔴 Key Problems with React’s Update Process Before Fiber**

| Issue                     | Why It Was a Problem                                                           |
| ------------------------- | ------------------------------------------------------------------------------ |
| **Synchronous Rendering** | React could not pause updates, leading to UI freezes.                          |
| **Entire Tree Traversal** | Even if a small part of UI changed, React still traversed the whole tree.      |
| **No Prioritization**     | All updates were treated equally, even if some were urgent (e.g., user input). |
| **Performance Issues**    | Large apps experienced slow rendering and unresponsive UI.                     |

---

## **Final Confirmation: How React Handled Updates Before Fiber**

1. **React used a synchronous, recursive depth-first traversal** for updates.
2. **It could not pause or prioritize updates**, leading to performance issues.
3. **Even small changes required React to re-traverse and process the entire tree**.
4. **Only the necessary changes were applied to the real DOM, but the traversal was inefficient.**

---

## **🚀 What’s Next?**

Now that we understand how React 15 worked before Fiber, the next step is learning **how React Fiber solved these problems**. Would you like to continue? 😊
