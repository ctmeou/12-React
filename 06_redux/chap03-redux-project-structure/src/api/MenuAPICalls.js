import {request} from "./Api";
import {getMenulist} from "../modules/MenuModules";

//메뉴 API와 관련된 것을 모아둠
export function callGetMenuListAPI() {

    /* 반환되는 비동기 처리 함수가 dispatch의 매개변수로 전달되면 redux-thunk 미들웨어에서 호출하게 된다. */
    //함수를 반환, 함수가 아닌 객체가 넘어갈 경우 미들웨어를 호출하여
    //여기서는 통신을 할 것이고, redux-thunk 미들웨어를 이용하여 통신을 한다.
    return async (dispatch, getState) => {

        /* GET /menu API 호출 */
        const result = await request('GET', '/menu');
        console.log('getMenuList result : ', result);

        /* API 호출을 통해 반환 받은 데이터를 Store에 저장하기 위해 다시 dispatch(action 객체)를 호출한다. */
        dispatch(getMenulist(result)); //payload인 result를 전달 { type :  , payload : { menulist : [] } }이런 액션 객체가 생성된다.

    }

}