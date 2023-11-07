import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Layout from "./layouts/Layout";
import MovieList from "./pages/MovieList";
import MovieItem from "./components/MovieItem";
import MovieDetail from "./pages/MovieDetail";

//라우터 설정은 최상위 컴포넌트인 App에서 한다.
function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Layout/> }>
            <Route index element={ <Main/> }/>
              <Route path="movie">
                <Route index element={ <MovieList/> }/>
                <Route path=":movieCd" element={ <MovieDetail/> }/>
              </Route>
          </Route>
        </Routes>
      </BrowserRouter>
  );

}

export default App;
