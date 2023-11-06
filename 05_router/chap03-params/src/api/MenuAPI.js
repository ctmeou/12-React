import menus from '../data/menu-detail.json'; //json 파일에 있는 데이터를 읽어와 menus에서 사용한다.(API호출 생략을 하고 읽어옴)

/* 전체 메뉴 리스트 조회용 API */
export function getMenuList() {

    return menus;

}

/* 메뉴 코드를 이용하여 메뉴 한 개의 상세 내용 조회 */
//하나의 메뉴를 반환하기 때문에 find를 이용해 true를 반환
export function getMenuDetail(menuCode) {

    //하나의 객체를 반환하는 작업
    return menus.find(menu => menu.menuCode == menuCode); //find에서 돌아가는 하나하나의 메뉴는 메뉴 디테일의 객체

}

/* 메뉴명 전달 받아 메뉴 이름을 포함하고 있는 메뉴 목록 조회 */
//true인 값을 배열로 전달하기 위해 filter를 사용한다.
//하나의 메뉴 이름과 전달받은 menu에 매칭되는 것이 있는지 매칭이 되면 true이기 때문에 배열로 반환받는다.
export function getSearchMenu(menuName) {

    return menus.filter(menu => menu.menuName.match(menuName));

}