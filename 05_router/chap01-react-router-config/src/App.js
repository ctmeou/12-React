import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Menu from "./pages/Menu";

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Main/> }/>
                <Route path="/about" element={ <About/> }/>
                <Route path="/menu" element={ <Menu/> }/>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
