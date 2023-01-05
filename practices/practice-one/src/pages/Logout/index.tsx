import { auth } from 'databases/firebase-config';
import { Navigate } from 'react-router-dom';

const LoginOut = () => {
    auth.signOut();
    return <Navigate to="/login" replace={true} />;
};

export default LoginOut;
