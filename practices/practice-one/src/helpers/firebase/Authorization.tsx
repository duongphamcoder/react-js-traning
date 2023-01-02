import useStore from 'hooks/useStore';
import { ReactNode, useEffect } from 'react';
import { auth } from 'databases/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { setUid } from 'reduxs/actions';

type AuthorizationProps = {
    children?: ReactNode;
};

const Authorization = (props: AuthorizationProps) => {
    const [state, dispatch] = useStore();
    const { children } = props;

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid } = user;
                dispatch(setUid(uid));
                return;
            }
            dispatch(setUid(''));
        });
        return unsub;
    }, []);

    return <>{children}</>;
};

export default Authorization;
