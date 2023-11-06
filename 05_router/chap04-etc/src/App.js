import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";
import Login from "./pages/Login";
import Error from "./pages/Error";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Layout/> }>
            <Route index element={ <Main/> }/>
            <Route path="mypage" element={ <MyPage/> }/>
            <Route path="login" element={ <Login/> }/>
          </Route>
          <Route path="*" element={ <Error/> }/> {/*정해진 외의 요청은 Error 컴포넌트를 통해 처리가 된다.*/}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
