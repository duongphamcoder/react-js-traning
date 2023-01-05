import { NotificationProps } from 'components/Notification';
import { StateParam } from './notificationContext';
import { ContextAction } from 'constants/contextAction';

export type ActionParam = {
    type: string,
    payload: NotificationProps
}

const notificationReducer = (state: StateParam, action: ActionParam): StateParam => {
    const { type, payload } = action;
    switch (type) {
        case ContextAction.SHOW_NOTIFICATION: {
            return {
                ...payload,
                isShow: true
            };
        }
        case ContextAction.HIDE_NOTIFICATION: {
            return {
                ...payload,
                isShow: false
            };
        }

        default: return state;
    }
};

export default notificationReducer; 
