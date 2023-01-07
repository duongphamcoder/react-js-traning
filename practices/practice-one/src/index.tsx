import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import 'styles/main.css';
import AppProvider from 'contexts/App/AppProvider';
import NotificationProvider from 'contexts/Notification/NotificationProvider';
import FormProvider from 'contexts/Form/FormProvider';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <AppProvider>
            <NotificationProvider>
                <FormProvider>
                    <App />
                </FormProvider>
            </NotificationProvider>
        </AppProvider>
    </React.StrictMode>
);
