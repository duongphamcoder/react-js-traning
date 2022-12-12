import { createContext, FunctionComponent } from 'react';
import Box from './Box';

export const Background = createContext('black');

const Context: FunctionComponent = () => {
  return (
    <section className="context-demo">
      <Background.Provider value={'red'}>
        <Box />
      </Background.Provider>
      <Box />
    </section>
  );
};

export default Context;
