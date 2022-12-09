import { MouseEvent, ReactElement } from 'react';
import { Children, PropButton } from 'types';

const Button: React.FC<PropButton> = (props) => {
  const variant = props.variant || 'primary';
  const type = props.type || 'button';
  const disable = props.disable || false;
  const className = `btn btn-${variant}`;
  return (
    <button
      type={type}
      className={className}
      onClick={props.onClick}
      disabled={disable}
    >
      {props.children}
    </button>
  );
};

export default Button;
