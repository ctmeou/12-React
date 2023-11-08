import Header from "../components/commons/Header";
import {Outlet} from "react-router-dom";
import Navbar from "../components/commons/Navbar";

function Layout() {

    //Layout 생성 시 추가하고 싶은 부분 추가 후 Outlet 추가
    return (
        <div>
            <Header/>
            <Navbar/>
            <Outlet/>
        </div>
    );

}

export default Layout;