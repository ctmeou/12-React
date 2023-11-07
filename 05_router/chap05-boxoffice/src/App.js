import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Layout from "./layouts/Layout";
import MovieList from "./pages/MovieList";

//라우터 설정은 최상위 컴포넌트인 App에서 한다.
function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Layout/> }/>
            <Route index element={ <Main/> }/>
            <Route path="movie" element={ <MovieList/> }/>
        </Routes>
      </BrowserRouter>
  );

}

export default App;
