import { ChangeEvent, useMemo, useRef, useState } from 'react';

type StateType = {
  name: string;
  price: string;
};
const MemoHook: React.FC = () => {
  const [state, setState] = useState<StateType>({
    name: '',
    price: '0',
  });
  const [list, setList] = useState<StateType[]>([]);
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const total = useMemo(() => {
    const value = list.reduce((prev, current) => {
      return prev + parseInt(current.price);
    }, 0);
    return value;
  }, [list]);
  const handleChange = (key: string, value: string) => {
    setState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <section>
      <input
        type="text"
        ref={nameRef}
        placeholder="name"
        onChange={(event: ChangeEvent) => {
          const value = (event.target as HTMLInputElement).value;
          handleChange('name', value);
        }}
      />
      <input
        ref={priceRef}
        type="number"
        placeholder="price"
        onChange={(event: ChangeEvent) => {
          const value = (event.target as HTMLInputElement).value;
          handleChange('price', value);
        }}
      />
      <button
        onClick={() => {
          (nameRef.current as HTMLInputElement).value = '';
          (priceRef.current as HTMLInputElement).value = '';
          (nameRef.current as HTMLInputElement).focus();
          setList((prev) => [...prev, state]);
        }}
      >
        add
      </button>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>
              name: {item.name} - price: {item.price}
            </li>
          );
        })}
      </ul>
      <span>Total: {total}</span>
    </section>
  );
};

export default MemoHook;
