import {useEffect, useState} from "react";
import {getMenuList} from "../api/MenuAPI"; //해당 파일에서 getMenuList를 import한다.(여러 가지 중 하나이기 때문에 {getMenuList}로 작성해야 한다.
import boxStyle from './Menu.module.css';
import MenuItem from "../components/MenuItem"; //파일 내에 있는 것을 import할 것이고 boxStyle, ./을 작성해서 현재 디렉토링을 나타내줘야 한다.

/* 일반 CSS 파일을 이용하면 작업물을 합쳤을 때 class name conflic로 인해 디자인이 변경되는 일이 있다.
* module.css 파일은 class명에 랜덤한 문자를 붙여서 이름을 지어주어 class name confilct를 방지한다. */
/*menu list에 하위 list가 뜨게 설정한다.*/
function Menu() {

    const [menuList, setMenuList] = useState();

    useEffect(() => {
        /* MenuAPI.js 파일을 만들어서 API 호출 함수를 모아둔다. */ //기능적으로 분리해서 작성한다.
        setMenuList(getMenuList());
    }, []);

    return (
        <div>
            <h1>메뉴 목록</h1>
            <div className={ boxStyle.MenuBox }>
                { menuList && menuList.map(menu => <MenuItem key={ menu.menuCode } menu={ menu }/>) }
            </div>
        </div>
    );

}

export default Menu;