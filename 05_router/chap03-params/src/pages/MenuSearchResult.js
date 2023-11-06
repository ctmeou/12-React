import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getSearchMenu} from "../api/MenuAPI";
import boxStyle from './Menu.module.css';
import MenuItem from "../components/MenuItem";

function MenuSearchResult() {

    /* 쿼리스트링 형태로 전달된 값은 useSearchParam hook을 통해 꺼낼 수 있다. */
    const [searchParams] = useSearchParams();

    /* 쿼리스트링의 key 값을 get 함수에 전달하여 해당 파라미터 값을 읽어온다. */
    const menuName = searchParams.get('menuName');

    console.log(menuName);

    //1. 상태 관리
    const [menuList, setMenuList] = useState();

    //2. useEffect 구문을 이용해서 호출 선언
    //처음에는 undefined이지만 호출된 후에 값이 대입이 된다.
    useEffect(() => {
        setMenuList(getSearchMenu(menuName));
    }, []);

    return (
        <div>
            <h1>검색된 메뉴</h1>
            <div className={ boxStyle.MenuBox }>
                { menuList && menuList.map(menu => <MenuItem key={ menu.menuCode } menu={ menu } />)} {/*menuList가 있으면 menuList를 map으로 가공한다.*/}
            </div>
        </div>
    );

}

export default MenuSearchResult;