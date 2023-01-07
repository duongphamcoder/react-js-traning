import { useLayoutEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import useStore from 'hooks/useStore';
import Button from 'components/Button';
import Heading from 'components/Heading';
import { auth } from 'databases/firebase-config';
import {
    FacebookAuthProvider,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth';
import { fbProvider, ggAuthProvider } from 'helpers';

type AuthProvider = FacebookAuthProvider | GoogleAuthProvider;

const LoginPage = () => {
    const redirect = useNavigate();
    const [state, dispatch] = useStore();
    const { uid } = state;

    const handleLogin = async (authProvider: AuthProvider) => {
        const { user } = await signInWithPopup(auth, authProvider);
        redirect('/');
    };

    return (
        <section className="login">
            {uid ? (
                <Navigate to="/" replace={true} />
            ) : (
                <>
                    <Heading title="Wellcome to Website" />
                    <section className="login-btn">
                        <Button
                            title="Login with Facebook"
                            onClick={() => {
                                handleLogin(fbProvider);
                            }}
                        />
                        <Button
                            title="Login with Google"
                            onClick={() => {
                                handleLogin(ggAuthProvider);
                            }}
                        />
                    </section>
                </>
            )}
        </section>
    );
};

export default LoginPage;
