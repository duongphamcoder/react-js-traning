import { NotificationProps } from 'components/Notification';
import { ContextAction } from 'constants/contextAction';
import { ActionParam } from 'contexts/Notification/reducer';


export const show = (payload: NotificationProps): ActionParam => {
    return {
        type: ContextAction.SHOW_NOTIFICATION,
        payload
    };
};

export const hide = (): ActionParam => {
    return {
        type: ContextAction.HIDE_NOTIFICATION,
        payload: {
            message: '',
            variant: 'success'
        }
    };
};
