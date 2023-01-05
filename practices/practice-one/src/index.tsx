import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import 'styles/main.css';
import AppProvider from 'contexts/App/AppProvider';
import NotificationProvider from 'contexts/Notification/NotificationProvider';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <AppProvider>
            <NotificationProvider>
                <App />
            </NotificationProvider>
        </AppProvider>
    </React.StrictMode>
);
