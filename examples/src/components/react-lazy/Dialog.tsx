import { FunctionComponent, ReactNode } from 'react';

type DialogProps = {
  children: ReactNode;
};

const Dialog: FunctionComponent<DialogProps> = (props) => {
  return <section>{props.children}</section>;
};

export default Dialog;
