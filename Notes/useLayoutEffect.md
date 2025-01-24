# `useLayoutEffect` in React

## **What is `useLayoutEffect`?**

`useLayoutEffect` is a React Hook that is similar to `useEffect`, but it is fired synchronously after all DOM mutations. This means that it blocks the browser's painting until the effect is executed. It is typically used when you need to perform DOM measurements or manipulate the DOM before the browser updates the screen.

### **Syntax:**

```javascript
useLayoutEffect(() => {
  // Effect logic here
  return () => {
    // Cleanup logic here (optional)
  };
}, [dependencies]);
```

---

## **Difference Between `useLayoutEffect` and `useEffect`**

| Feature                | `useEffect`                                             | `useLayoutEffect`                 |
| ---------------------- | ------------------------------------------------------- | --------------------------------- |
| **Execution Timing**   | Asynchronous, after painting                            | Synchronous, before painting      |
| **Use Case**           | Non-blocking side effects like data fetching or logging | DOM measurements or manipulations |
| **Performance Impact** | Does not block rendering                                | Blocks rendering until executed   |
| **Browser Painting**   | Occurs before the effect runs                           | Occurs after the effect runs      |

---

## **When to Use `useLayoutEffect`**

1. **Reading DOM Layout Information:**
   - Use it when you need to measure the DOM (e.g., element dimensions or positions).
2. **Synchronous DOM Updates:**

   - If you need to make updates to the DOM immediately after React has written to it but before the browser paints.

3. **Avoiding Visual Glitches:**
   - For cases where asynchronous updates can lead to noticeable flickering or incorrect initial renders.

---

## **Example Usage**

### **1. Measuring DOM Dimensions**

```javascript
import React, { useLayoutEffect, useRef, useState } from "react";

function Example() {
  const divRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (divRef.current) {
      setWidth(divRef.current.offsetWidth);
    }
  }, []);

  return (
    <div>
      <div ref={divRef} style={{ width: "50%", backgroundColor: "lightblue" }}>
        Resize me!
      </div>
      <p>Width: {width}px</p>
    </div>
  );
}

export default Example;
```

### **2. Avoiding Flicker in Animations**

```javascript
import React, { useLayoutEffect, useState } from "react";

function AnimatedComponent() {
  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 1s",
      }}
    >
      Fading in content!
    </div>
  );
}

export default AnimatedComponent;
```

---

## **Best Practices for `useLayoutEffect`**

1. **Use Sparingly:**

   - Only use `useLayoutEffect` when necessary. In most cases, `useEffect` is sufficient and better for performance.

2. **Avoid Blocking Rendering:**

   - Keep the logic inside `useLayoutEffect` minimal to reduce blocking the rendering process.

3. **Prefer `useEffect` for Non-DOM Logic:**

   - Use `useLayoutEffect` only when interacting directly with the DOM or handling layout-related tasks.

4. **Cleanup Effectively:**
   - Always include cleanup logic if your effect modifies the DOM to avoid memory leaks.

---

## **Common Pitfalls**

1. **Performance Issues:**

   - Overusing `useLayoutEffect` can lead to performance bottlenecks as it blocks the browser's rendering.

2. **Server-Side Rendering Warning:**

   - `useLayoutEffect` is not executed during server-side rendering (SSR). If used in SSR, you may encounter a warning. Use `useEffect` for SSR-compatible logic.

   Example Fix:

   ```javascript
   import { useEffect, useLayoutEffect } from "react";
   const useIsomorphicLayoutEffect =
     typeof window !== "undefined" ? useLayoutEffect : useEffect;
   ```

---

## **Conclusion**

- Use `useLayoutEffect` for tasks that require DOM measurements or manipulations before the browser paints.
- Default to `useEffect` for non-blocking side effects like data fetching.
- Be mindful of its performance impact and avoid overuse in critical paths.
