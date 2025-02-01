```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted.current) {
      // Increment count only once on initial render
      setCount(count + 1);
      isMounted.current = false;
    }
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <div>Count: {count}</div>
  );
}

export default MyComponent;
```