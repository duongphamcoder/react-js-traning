import { ReactNode, useReducer } from 'react';
import NotificationContext, { stateDefault } from './notificationContext';
import notificationReducer from './reducer';
import { useEffect } from 'react';
import { hide } from 'reduxs/notificationAction';

type NotificationProviderProps = {
    children?: ReactNode;
};

const NotificationProvider = (props: NotificationProviderProps) => {
    const [state, dispatch] = useReducer(notificationReducer, stateDefault);
    const { children } = props;
    const { isShow } = state;

    useEffect(() => {
        if (isShow) {
            setTimeout(() => {
                dispatch(hide());
            }, 2500);
        }
    }, [state]);

    return (
        <NotificationContext.Provider value={[state, dispatch]}>
            {children}
        </NotificationContext.Provider>
    );
};

export default NotificationProvider;
