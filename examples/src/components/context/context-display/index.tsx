import { FunctionComponent, createContext, useContext } from 'react';

const MyContext = createContext('');
MyContext.displayName = 'MyDisplayName';

const ContextDisplay: FunctionComponent = () => {
  return <MyContext.Provider value={''}></MyContext.Provider>;
};

const ContextChildren: FunctionComponent = () => {
  const data = useContext(MyContext);

  return <></>;
};

export default ContextDisplay;
