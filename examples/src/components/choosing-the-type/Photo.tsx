import { FunctionComponent } from 'react';

const Photo: FunctionComponent<{ [key: string]: string }> = (props) => {
  return (
    <section {...props}>
      <h2>Photo component</h2>
    </section>
  );
};

export default Photo;
