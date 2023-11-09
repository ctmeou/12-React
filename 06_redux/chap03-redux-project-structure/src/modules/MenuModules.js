import {createActions, handleActions} from "redux-actions";

/* 초기 값 */
const initialState = {};

/* 액션 타입 */
const GET_MENULIST = 'menu/GET_MENULIST';
const GET_MENU = 'menu/GET_MENU'; //다른 동작이기 때문에 구분해서 작성

/* 액션 함수 */
//액션 객체를 만들어서 반환하는 일을 한다.
//{ menu : { getMenulist } }는 액션타입 'menu/GET_MENULIST'에서 가져온 것이다.
//[GET_MENULIST] : type, () => {} : payload를 반환하는 것이 액션 함수의 역할
                                 //getMenu : 호출할 때 반환하는 함수
export const { menu : { getMenulist, getMenu } } = createActions({
    //[GET_MENULIST] : () => {}
    //   key
    [GET_MENULIST] : (result) => ({ menulist : result }), //MenuAPICalls에서 payload에서 넘긴 값이 여기로 넘어온다.
    [GET_MENU] : (result) => ({ menu : result }) //menu라는 key 값을 붙여 저장, { menu : result } : payload
});

/* 리듀서 함수 */
const menuReducer = handleActions({
    //[GET_MENULIST] : (state, action) => {}
    [GET_MENULIST] : (state, { payload }) => payload, //({ menuList : result }) 값이 payload에 들어간다.
    [GET_MENU] : (state, { payload }) => payload //디스패치 호출이 여기로 넘어옴(MenuAPICalls), 보존하면서 추가로 state를 작성할 때는 ...state로 작성해야 덮어쓰지 않는다.(현재는 덮어씀)
}, initialState);

export default menuReducer;