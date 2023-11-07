import Header from "../components/Header";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";

//Outlet : 때마다 원하는 것을 표시해준다.
function Layout() {

    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );

}

export default Layout;