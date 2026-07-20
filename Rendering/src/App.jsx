import "./App.css";
import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import Menu from "./components/Menu";
import About from "./components/About"
import Home from "./components/Home"

function App() {
  return (
    <>
      <BrowserRouter>
      <Menu/>
        
        <Routes>
          <Route path="/" element={< Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/about/detail" element={<h1>Details about</h1>} />

           {/* dynamic url */}
          <Route path="/:id" element={<h1>this is dynamic url</h1>}/>
          <Route path="*" element={<h1>404 Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
