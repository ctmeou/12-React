import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMenuDetail} from "../api/MenuAPI";

//최초 렌더링 시점에는 undefined
function MenuDetails() {

    /* react router dom의 useParams라는 hook을 이용해서 jpath variable을 읽어올 수 있다.
    * 이 때 구조 분해 할당하는 이름은 route에 설정한 ":menuCode"로 설정되어야 한다. */
    //state로 선언해서 useEffect로 뿌려준다.
    const { menuCode} = useParams(); //꺼낼 때 useParams를 이용한다.

    /* menuCode를 이용해서 menu 하나에 대한 정보를 요청하는 API를 호출한다. */
    const [menu, setMenu] = useState(); //메뉴에 대한 state

    //useEffect를 통한 호출
    useEffect(() => { //getMenuDetail 함수를 menuCode를 전달하면서 찾는다.
        setMenu(getMenuDetail(menuCode)); //로드해서 가져온 데이터가 담겨있어야 한다. => menuAPI에서 일괄적으로 처리
    }, []);

    console.log(menu)

    return (
        <>
        {/*조건부 렌더링*/}
            { menu &&
                <>
                    <h2>메뉴 상세 페이지</h2>
                    <h2>메뉴 이름 : {menu.menuName}</h2>
                    <h2>메뉴 가격 : {menu.menuPrice}</h2>
                    <h2>메뉴 종류 : {menu.categoryName}</h2>
                    <h2>메뉴 설명 : {menu.detail.description}</h2>
                    <img src={ menu.detail.image } style={ { maxWidth:500 } } alt={ menu.menuName }/>
                </>
            }
        </>
    );

}

export default MenuDetails;