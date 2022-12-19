import { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./card.css";
type CardProps = {
  path: string;
  children?: ReactNode;
};

function Card(props: CardProps) {
  const { path, children } = props;
  return (
    <Link to={path} className="card">
      {children}
    </Link>
  );
}

export default Card;
