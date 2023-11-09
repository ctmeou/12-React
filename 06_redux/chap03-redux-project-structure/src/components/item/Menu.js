//컴포넌트 분리를 위해 메뉴에 대한 상세 정보 페이지 생성
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {callGetMenuAPI} from "../../api/MenuAPICalls";

function Menu({ id }) { //MenuDetail의 id props를 받아온다.

    const dispatch = useDispatch(); //담을 변수를 넘겨줘야 한다.
    const { menu } = useSelector(state => state.menuReducer);//메뉴라는 객체를 key 값으로 꺼내오겠다. state 공간이 쪼개져있고 저장되어 있는 값이 menu 객체이고 API 객체를 통해 얻어온 값이고 화면에 렌더링해준다.

    useEffect(() => {
        /* Menu 1개의 정보 호출하는 API 함수를 action으로 전달 */
        //store에서 값을 가져와서 담는 건데 dispatch를 호출해서 API 함수를 전달하면 된다.
        dispatch(callGetMenuAPI(id));
    }, []);

    //menu가 존재하지 않을 때는 표현하지 않게 렌더링 작성
    return (
        <>
            { menu &&
                <>
                    <h3>메뉴 이름 : { menu.menuName }</h3>
                    <h3>메뉴 가격 : { menu.menuPrice }</h3>
                    <h3>메뉴 종류 : { menu.categoryName }</h3>
                    <h3>메뉴 상세 : { menu.detail.description }</h3>
                    <img src={ menu.detail.image } style={ { maxWidth : 500 } } alt={ menu.menuName }/>
                </>
            }
        </>
    );

}

export default Menu;