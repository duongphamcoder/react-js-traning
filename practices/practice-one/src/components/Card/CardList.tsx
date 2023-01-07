import { ReactNode } from 'react';
import './card-list.css';

type CardListProps = {
    children?: ReactNode;
    customStyles?: {
        [key: string]: string;
    };
};

const CardList = (props: CardListProps) => {
    return (
        <section className="card-list" style={props.customStyles || {}}>
            {props.children}
        </section>
    );
};

export default CardList;
