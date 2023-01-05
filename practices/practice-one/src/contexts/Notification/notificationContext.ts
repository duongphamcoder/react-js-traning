import { NotificationProps } from 'components/Notification';
import { createContext, useReducer } from 'react';

export type StateParam = NotificationProps & {
    isShow: boolean
}

export const stateDefault: StateParam = {
    isShow: false,
    message: '',
    variant: 'success'
};

const dispatchDefault = () => { return; };

const NotificationContext = createContext<ReturnType<typeof useReducer>>([stateDefault, dispatchDefault]);

export default NotificationContext;
