import {Link} from "react-router-dom";

function MenuItem({ menu }) { //menuList에서 props로 내린 menu를 받아온다.

    //하나의 메뉴 정보를 기반으로 해서 Item 정보를 분리
    return (
        <Link to={ `/menu/${ menu.id }` }> {/*메뉴 아이템을 클릭했을 때 이동하기 위해 추가*/}
            <div className="menuItem">
                <h3>이름 : { menu.menuName }</h3>
                <h3>가격 : { menu.menuPrice }</h3>
                <h3>종류 : { menu.categoryName }</h3>
            </div>
        </Link>
    );

}

export default MenuItem;