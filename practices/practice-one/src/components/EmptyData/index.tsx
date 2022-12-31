import Paragraph from 'components/Paragraph';
import './empty-data.css';

const EmptyData = () => {
    return (
        <section className="empty-data">
            <Paragraph content="No data available" />
        </section>
    );
};

export default EmptyData;
