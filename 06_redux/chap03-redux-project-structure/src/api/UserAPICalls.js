import {request} from "./Api";
import login from "../pages/Login";

export function callLoginAPI(loginInfo) { //전달 loginInfo

    //비동기 방식으로 어떤 동작을 할 것인지 정의
    return async (dispatch, getState) => {

        //요청할 주소에는 뒤에 user가 붙어야 한다. userList는 배열이고,
        const userList = await request('GET', '/user');

        /* id, password 일치 여부 확인
        * 서버에서 이루어져야 하는 로직이지만 여기서는 간단하게 확인 */
        //배열 안에 있는 user와 사용자 양식으로 입력했던 것과 일치한지 확인
        const result = await userList.find(
            user => user.id === loginInfo.id && user.password === loginInfo.password
        );

        console.log('login result : ', result); //일치하면 반환 값이 나와야 하고 틀리면 반환 값이 없어야 한다.(undifined)

    }

}