import { useEffect, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from 'hooks/useStore';
import Button from 'components/Button';
import Heading from 'components/Heading';
import { auth } from 'databases/firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { fbProvider } from 'helpers';

const LoginPage = () => {
    const redirect = useNavigate();
    const [state, dispatch] = useStore();
    const { uid } = state;
    const handleRedirect = async () => {
        const { user } = await signInWithPopup(auth, fbProvider);
        redirect('/');
    };

    useLayoutEffect(() => {
        if (uid) {
            redirect('/', {
                replace: true,
            });
        }
    }, [state]);

    return (
        <section className="login">
            <Heading title="Wellcome to Website" />
            <section className="login-btn">
                <Button title="Login with Facebook" onClick={handleRedirect} />
                <Button title="Login with Google" />
            </section>
        </section>
    );
};

export default LoginPage;
