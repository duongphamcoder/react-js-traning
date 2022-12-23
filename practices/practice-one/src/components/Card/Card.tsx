import Button from "components/Button/Button";
import Heading from "components/Heading/Heading";
import { MouseEvent, ReactNode } from "react";
import { Link } from "react-router-dom";
import "./card.css";

import bntDelete from "assets/icons/delete-icon.svg";
import bntEdit from "assets/icons/update-icon.svg";

type CardProps = {
  path: string;
  image: string;
  category?: string;
  title: string;
  timeStamp: string;
  isUser?: boolean;
  onDelete?: (event: MouseEvent) => void;
  onEdit?: (event: MouseEvent) => void;
};

function Card(props: CardProps) {
  const {
    category = "",
    title = "",
    path,
    image,
    timeStamp,
    isUser,
    onDelete,
    onEdit,
    ...rest
  } = props;

  return (
    <Link to={path} className="card" {...rest}>
      <section className="card-image">
        <img src={image} alt={title} />
      </section>
      <section className="card-details">
        <Heading title={category} tag="h3" />
        <p className="card-details-time">{timeStamp}</p>
        <Heading title={title} />
        {isUser && (
          <section className="card-control">
            <Button onClick={onDelete}>
              <img src={bntDelete} alt="Button remove" />
            </Button>
            <Button onClick={onEdit}>
              <img src={bntEdit} alt="Button edit" />
            </Button>
          </section>
        )}
      </section>
    </Link>
  );
}

export default Card;
