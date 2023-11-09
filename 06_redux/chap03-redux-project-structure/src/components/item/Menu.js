//컴포넌트 분리를 위해 메뉴에 대한 상세 정보 페이지 생성
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {callGetMenuAPI} from "../../api/MenuAPICalls";

function Menu({ id }) { //MenuDetail의 id props를 받아온다.

    const dispatch = useDispatch(); //담을 변수를 넘겨줘야 한다.

    useEffect(() => {
        /* Menu 1개의 정보 호출하는 API 함수를 action으로 전달 */
        //store에서 값을 가져와서 담는 건데 dispatch를 호출해서 API 함수를 전달하면 된다.
        dispatch(callGetMenuAPI(id));
    }, []);

    return (
        <>
        </>
    );

}

export default Menu;