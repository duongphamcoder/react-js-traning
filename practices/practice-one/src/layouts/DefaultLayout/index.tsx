import Header from 'components/Header';
import { ReactNode } from 'react';
import './default-layout.css';
import useNotification from 'hooks/useNotification';
import Notification from 'components/Notification';
import Loading from 'components/Loading';
import useStore from 'hooks/useStore';

type DefaultLayoutProps = {
    children?: ReactNode;
};

const DefaultLayout = (props: DefaultLayoutProps) => {
    const [stateStore, dispatch] = useStore();
    const [stateNotify] = useNotification();
    const { isShow, ...rest } = stateNotify;
    const { loading } = stateStore;

    return (
        <>
            <Header />
            <main>
                <section className="container">{props.children}</section>
            </main>
            {isShow && <Notification {...rest} />}
            {loading && <Loading />}
        </>
    );
};

export default DefaultLayout;
