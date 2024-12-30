```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: Only the return function is executed when the component unmounts
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval); // This only clears the interval on unmount
  }, []); // Empty dependency array means this runs only once on mount

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```