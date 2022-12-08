import { MouseEvent, ReactElement } from 'react';
import { Children } from 'types';

type Variant = 'primary' | 'secondary';
type TypeButton = 'button' | 'submit' | 'reset';
interface PropButton extends Children {
  variant?: Variant;
  type?: TypeButton;
  disable?: boolean;
  onClick?: (event: MouseEvent) => void;
}

function Button(props: PropButton) {
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
}

export default Button;
