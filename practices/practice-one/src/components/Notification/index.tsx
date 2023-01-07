import './notification.css';

export type NotificationProps = {
    message: string;
    variant: 'success' | 'error';
};

const Notification = (props: NotificationProps) => {
    const { message, variant } = props;

    return (
        <section className={`notification-wrapper ${variant}`}>
            <p className="title">{message}</p>
            <span className="icon">&#10539;</span>
        </section>
    );
};

export default Notification;
