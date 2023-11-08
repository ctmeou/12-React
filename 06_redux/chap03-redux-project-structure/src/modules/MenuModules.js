import {createActions, handleActions} from "redux-actions";

/* 초기 값 */
const initialState = {};

/* 액션 타입 */
const GET_MENULIST = 'menu/GET_MENULIST';

/* 액션 함수 */
//액션 객체를 만들어서 반환하는 일을 한다.
//{ menu : { getMenulist } }는 액션타입 'menu/GET_MENULIST'에서 가져온 것이다.
//[GET_MENULIST] : type, () => {} : payload를 반환하는 것이 액션 함수의 역할
export const { menu : { getMenulist } } = createActions({
    //[GET_MENULIST] : () => {}
    [GET_MENULIST] : (result) => ({ menulist : result }) //MenuAPICalls에서 payload에서 넘긴 값이 여기로 넘어온다.
});

/* 리듀서 함수 */
const menuReducer = handleActions({
    //[GET_MENULIST] : (state, action) => {}
    [GET_MENULIST] : (state, { payload }) => payload //({ menuList : result }) 값이 payload에 들어간다.
}, initialState);

export default menuReducer;