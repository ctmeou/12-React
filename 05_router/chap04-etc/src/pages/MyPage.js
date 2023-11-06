import {Navigate} from "react-router-dom";

function MyPage() {

    //로그인이 되어진 상태에서 보여져야 한다.
    /* 로그인되지 않은 상태에서 MyPage를 볼 수 없으므로 상태 체크 후 로그인이 되어 있지 않다면 다른 페이지로 라우팅하도록 한다.*/
    const isLogin = false; //우선 로그인되어 있지 않다라고 가정

    //로그인이 되어있지 않다면 MyPage가 아닌 다른 페이지를 보여준다.
    if (!isLogin) {

        return <Navigate to="/login"/>
        //Navigate 컴포넌트를 가져와서 login 경로로 이동한다. 마이페이지로 렌더링되지 않고 무조건 로그인 페이지로 렌더링된다.

    }

    return (
        <div>
            <h1>마이페이지</h1>
        </div>
    );

}

export default MyPage;