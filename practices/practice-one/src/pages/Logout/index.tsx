import { useEffect } from 'react';
import { auth } from 'databases/firebase-config';
import { Navigate } from 'react-router-dom';

const LoginOut = () => {
    useEffect(() => {
        auth.signOut();
    }, []);
    return <Navigate to="/login" replace={true} />;
};

export default LoginOut;
