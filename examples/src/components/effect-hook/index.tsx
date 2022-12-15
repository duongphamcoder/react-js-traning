import { useEffect, useState } from 'react';

const EffectHook: React.FC = () => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((prevState) => prevState - 1);
    }, 1000);
    console.log('effect');

    return () => clearInterval(timerId);
  }, []);
  return <p>Current count {count}</p>;
};

export default EffectHook;
