/* 초기값 */
import {createActions, handleActions} from "redux-actions";

const initialState = {};

/* 액션 타입 */
const LOGIN = 'user/LOGIN';

/* 액션 함수 */
export const { user : { login } } = createActions({
    [LOGIN]: (res) => ({ res }) //넘겨준 결과를 그대로 payload에 담겠다.
});

/* 리듀서 함수 */
//action이 발생했을 때 무슨 값을 저장할지(초기값 설정 포함)
//리듀서 함수는 반드시 사용하고 있는 rootReducer에 combine이 되어야 한다.
const userReducer = handleActions({
    [LOGIN] : (state, { payload : { res } }) => { //로그인되면 객체가 넘어오고 안되면 Undefined, 로그인이 되었는지 안되었는지는 store에서 관리되고 있는 것으로 사용하면 안되고(새로고침만 해도 사라지기 때문, 지속적으로 유지되지 않음) 로컬 스테이지 안에 저장되어 있어야 한다.

        /* res 값이 있을 경우 id, password 일치로 user 객체가 반환된 상황이므로 localStorage에 로그인 상태를 저장한다. */
        if (res) {
            localStorage.setItem('isLogin', true);
        } else { //undefined의 상태일 경우
            res = { message : 'LOGIN_FAIL' }
        }

        return res;

    }
}, initialState);

export default userReducer;