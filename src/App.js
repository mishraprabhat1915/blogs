import './App.css';
import { Route, Routes } from "react-router-dom"
import LandingPage from "./Pages/LandingPage"
import BlogsPage from './Pages/BlogsPage';
import UploadBlog from './Pages/UploadBlog';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" exact element={ <LandingPage/> } />
      <Route path="/blog/:Id" exact element={ <BlogsPage/> } />
      <Route path="/upload-blog" exact element={ <UploadBlog/> } />
      
      </Routes>
    </div>
  );
}

export default App;
