# React useEffect Infinite Loop Bug
This repository demonstrates a common bug in React applications involving infinite loops within the useEffect hook.  The bug arises from updating state variables within the useEffect without proper dependency management, leading to a continuous re-rendering cycle.

## Bug Description
The `MyComponent` function uses the `useState` hook to manage a count variable. The `useEffect` hook attempts to increment the count on every render. This creates an infinite loop because the state change triggers a re-render, which in turn triggers another state update, and so on.  The browser's JavaScript engine will likely warn about this, and possibly crash.

## Solution
The solution is to correctly manage dependencies within the useEffect's dependency array. Adding the `count` variable to the array ensures the effect only runs when the `count` changes.  In this specific case, this isn't ideal, because a conditional check is needed to ensure that the count is only incremented once upon initial render. Using a ref is more robust solution that prevents unexpected infinite loops.
