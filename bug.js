```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an infinite loop because the state is updated in every render.
    setCount(count + 1);
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```