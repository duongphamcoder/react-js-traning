import { FunctionComponent, useContext } from 'react';
import { Background } from '.';

const Box: FunctionComponent = () => {
  const color = useContext(Background);
  console.log(color);
  const styles = {
    width: '300px',
    height: '200px',
    backgroundColor: color,
  };
  return <section style={styles}></section>;
};

export default Box;
