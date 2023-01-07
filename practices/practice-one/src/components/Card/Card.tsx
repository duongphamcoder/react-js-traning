import Button from 'components/Button';
import Heading from 'components/Heading';
import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import './card.css';
import bntDelete from 'assets/icons/delete-icon.svg';
import bntEdit from 'assets/icons/update-icon.svg';

export type CardProps = {
    id: string;
    path: string;
    image: string;
    category?: string;
    title: string;
    timeStamp: string;
    isUser?: boolean;
    onDelete?: (event: MouseEvent) => void;
    onEdit?: (event: MouseEvent) => void;
};

const Card = (props: CardProps) => {
    const {
        id,
        category = '',
        title = '',
        path,
        image,
        timeStamp,
        isUser,
        onDelete,
        onEdit,
        ...rest
    } = props;

    return (
        <section className="card-wrapper">
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
        </section>
    );
};

export default Card;
