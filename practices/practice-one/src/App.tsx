import BlogsPage from "pages/Blogs";
import LoginPage from "pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogsPage />} />
        <Route path="/:param" element={<BlogsPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
