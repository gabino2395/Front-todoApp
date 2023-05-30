import "./App.css";

//importamos los componentes
import CompShowBlogs from "./components/ShowBlogs";
import CompCreateBlog from "./components/CreateBlog";
import CompEditBlog from "./components/EditBlog";

//importamos el router
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CompShowBlogs />} />
          <Route path="/create" element={<CompCreateBlog />} />
          <Route path="/edit/:id" element={<CompEditBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
