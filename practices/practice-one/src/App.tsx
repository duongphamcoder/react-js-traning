import Authorization from 'components/Authorization';
import BlogsPage from 'pages/Blogs';
import LoginPage from 'pages/Login';
import LoginOut from 'pages/Logout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Authorization>
                            <BlogsPage />
                        </Authorization>
                    }
                />
                <Route
                    path="/blog"
                    element={
                        <Authorization>
                            <BlogsPage />
                        </Authorization>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <Authorization>
                            <LoginPage />
                        </Authorization>
                    }
                />
                <Route
                    path="/logout"
                    element={
                        <Authorization>
                            <LoginOut />
                        </Authorization>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
