import Header from 'components/Header';
import { ReactNode } from 'react';
import './default-layout.css';
import useNotification from 'hooks/useNotification';
import Notification from 'components/Notification';

type DefaultLayoutProps = {
    children?: ReactNode;
};

const DefaultLayout = (props: DefaultLayoutProps) => {
    const [state] = useNotification();
    const { isShow, ...rest } = state;

    return (
        <>
            <Header />
            <main>
                <section className="container">{props.children}</section>
            </main>
            {isShow && <Notification {...rest} />}
        </>
    );
};

export default DefaultLayout;
