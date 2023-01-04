import './notification.css';

export type Notofication = {
    message: string;
    variant: 'success' | 'error';
};

const Notofication = (props: Notofication) => {
    const { message, variant } = props;
    return (
        <section className={`notification-wrapper ${variant}`}>
            <p className="title">{message}</p>
            <span className="icon">&#10539;</span>
        </section>
    );
};

export default Notofication;
