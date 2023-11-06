import menus from '../data/menu-detail.json'; //json 파일에 있는 데이터를 읽어와 menus에서 사용한다.(API호출 생략을 하고 읽어옴)

/* 전체 메뉴 리스트 조회용 API */
export function getMenuList() {

    return menus;

}

/* 메뉴 코드를 이용하여 메뉴 한 개의 상세 내용 조회 */
export function getMenuDetail(menuCode) {

    //하나의 객체를 반환하는 작업
    return menus.find(menu => menu.menuCode == menuCode); //find에서 돌아가는 하나하나의 메뉴는 메뉴 디테일의 객체

}