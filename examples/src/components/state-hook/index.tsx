import { ChangeEvent, FunctionComponent, useRef, useState } from 'react';

const StateHook: FunctionComponent = () => {
  const [myName, setMyName] = useState<string>('');
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const handleChange = (event: ChangeEvent) => {
    const value = (event.target as HTMLInputElement).value;
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      setMyName(value);
    }, 600);
  };

  return (
    <section>
      <input type="text" onChange={handleChange} />
      <p>Hello, my name is {myName || '...'}</p>
    </section>
  );
};

export default StateHook;
