import { FunctionComponent } from 'react';

const Video: FunctionComponent<{ [key: string]: any }> = (props) => {
  return (
    <section {...props}>
      <h2>Video components</h2>
    </section>
  );
};

export default Video;
