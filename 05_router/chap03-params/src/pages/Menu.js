import {useEffect, useState} from "react";
import {getMenuList} from "../api/MenuAPI"; //해당 파일에서 getMenuList를 import한다.(여러 가지 중 하나이기 때문에 {getMenuList}로 작성해야 한다.
import boxStyle from './Menu.module.css';
import MenuItem from "../components/MenuItem";
import {useNavigate} from "react-router-dom"; //파일 내에 있는 것을 import할 것이고 boxStyle, ./을 작성해서 현재 디렉토링을 나타내줘야 한다.

/* 일반 CSS 파일을 이용하면 작업물을 합쳤을 때 class name conflic로 인해 디자인이 변경되는 일이 있다.
* module.css 파일은 class명에 랜덤한 문자를 붙여서 이름을 지어주어 class name confilct를 방지한다. */
/*menu list에 하위 list가 뜨게 설정한다.*/
function Menu() {

    const [menuList, setMenuList] = useState();
    const [searchValue, setSearchValue] = useState(''); //console Warning이 뜨는 것을 사라지게 '' 빈문자열을 넣어 초기값을 설정한다.
    //react-dom.development.js:86 Warning: A component is changing an uncontrolled input to be controlled.

    /* react router dom의 useNavigate hook을 호출하면 하나의 함수가 반환된다.
    * 해당 함수에 router로 요청하는 주소를 전달하면서 호출하면 url이 변경된다. */
    //useNavigate에서 기능을 꺼내온다.
    const navigate = useNavigate();

    useEffect(() => {
        /* MenuAPI.js 파일을 만들어서 API 호출 함수를 모아둔다. */ //기능적으로 분리해서 작성한다.
        setMenuList(getMenuList());
    }, []);

    //선언된 onClickHandler에서 검사를 하겠다.
    //버튼 클릭 시 요청을 보낸다.(메뉴에서 기준을 가지고 검색을 할 수 있다.)
    //클릭 시 navigate을 요청해서
    const onClickHandler = () => navigate(`/menu/search?menuName=${ searchValue }`);

    return (
        <div>
            <h1>메뉴 목록</h1>

            <div>
                <input //사용자 입력 양식
                    type="search"
                    name="menuName"
                    value={ searchValue }
                    onChange={ e => setSearchValue(e.target.value) }
                />
                <button
                    onClick={ onClickHandler }
                >
                    검색
                </button>
            </div>

            <div className={ boxStyle.MenuBox }>
                { menuList && menuList.map(menu => <MenuItem key={ menu.menuCode } menu={ menu }/>) }
            </div>
        </div>
    );

}

export default Menu;