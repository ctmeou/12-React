import itemStyle from './MenuItem.module.css';
import {Link} from "react-router-dom";

//한 개의 메뉴를 표현
function MenuItem({ menu }) {

    /* PathVariable 형태로 메뉴 코드 값을 전달 */ //경로에 변수를 담아서 처리한다.(PathVariable 형태)
    //이벤트를 주기 위해서 div 태그를 Link 태그로 감싸서 처리한다.(각 메뉴를 클릭하면 메뉴에 관련된 화면으로 이동하게 설정)
    return (
        <Link to={ `/menu/${ menu.menuCode }` }>
            <div className={ itemStyle.MenuItem }>
                <h3>이름 : { menu.menuName }</h3>
                <h3>가격 : { menu.menuPrice }</h3>
                <h3>종류 : { menu.categoryName }</h3>
            </div>
        </Link>
    );

}

export default MenuItem;