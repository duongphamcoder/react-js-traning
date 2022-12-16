import { useRef, MouseEvent, useState, ChangeEvent } from 'react';

const RefHook: React.FC = () => {
  const [name, setName] = useState<string>('');
  const ref = useRef<HTMLInputElement>(null);
  const clearInput = (event: MouseEvent) => {
    ref.current?.focus();
    setName('');
  };
  const changeName = (event: ChangeEvent) => {
    const value = (event.target as HTMLInputElement).value;
    setName(value);
  };
  return (
    <section>
      <input type="text" ref={ref} value={name} onChange={changeName} />
      <button onClick={clearInput}>clear</button>
      <p>Hello {name}</p>
    </section>
  );
};

export default RefHook;
