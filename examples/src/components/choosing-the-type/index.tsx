import { FunctionComponent } from 'react';
import Photo from './Photo';
import Video from './Video';

const Choosing: FunctionComponent<{ component: string }> = ({ component }) => {
  const components: {
    [key: string]: FunctionComponent<{ [key: string]: string }>;
  } = {
    photo: Photo,
    video: Video,
  };

  const Component = components[component];
  return <Component></Component>;
};

export default Choosing;
