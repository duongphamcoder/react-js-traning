import NotificationContext from 'contexts/Notification/notificationContext';
import { useContext } from 'react';


const useNotification = () => {
    const [state, dispatch] = useContext(NotificationContext);

    return [state, dispatch];
};

export default useNotification;
