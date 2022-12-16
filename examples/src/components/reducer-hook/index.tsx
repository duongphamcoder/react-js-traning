import { ChangeEvent, MouseEvent, useReducer, useRef } from 'react';

enum Type {
  SET_JOD = 'set',
  ADD_JOD = 'add',
}

type InitType = {
  jod: string;
  jods: string[];
};

type ActionType = {
  type: string;
  payload: string;
};

const initState: InitType = {
  jod: '',
  jods: [],
};

const callbak = (prevState: InitType, action: ActionType) => {
  let newState: InitType = prevState;
  switch (action.type) {
    case Type.SET_JOD: {
      newState = {
        ...prevState,
        jod: action.payload,
      };
      break;
    }
    case Type.ADD_JOD: {
      newState = {
        ...prevState,
        jods: [...prevState.jods, action.payload],
      };
      break;
    }
    default:
      break;
  }
  return newState;
};

const ReducerHook: React.FC = () => {
  const [state, dispath] = useReducer(callbak, initState);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (event: ChangeEvent) => {
    const value = (event.target as HTMLInputElement).value;
    dispath({
      type: Type.SET_JOD,
      payload: value,
    });
  };

  const handleAdd = (event: MouseEvent) => {
    dispath({
      type: Type.ADD_JOD,
      payload: state.jod,
    });
    dispath({
      type: Type.SET_JOD,
      payload: '',
    });
    inputRef.current?.focus();
  };

  return (
    <section>
      <input
        ref={inputRef}
        type="text"
        value={state.jod}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>add</button>
      {state.jods.map((jod, index) => (
        <li key={index}>{jod}</li>
      ))}
    </section>
  );
};

export default ReducerHook;
