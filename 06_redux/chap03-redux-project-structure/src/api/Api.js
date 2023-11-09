import axios from "axios";

const DOMAIN = 'http://localhost:4000'; //4000은 지금 동작하고 있는 json 서버의 주소 공통 주소이기 때문에 domain으로 변경

//요청을 할 때마다 받아오는 값이 있고, 보내야 하는 값이 있다.
//request을 정의해서 항상 사용한다.(method, url, data 세 가지 인자를 전달하면서 호출하는 함수)
//axios 라이브러리르 통해 http 통신이 일어난다.
export const request = async (method, url, data) => {

    //axios 안의 객체를 보낸다(GET, POST, PUT, DELETE)
    //장점 : 자동으로 JSON 파싱
    return await axios({
        method, //get방식인지 post방식인지
        url : `${ DOMAIN }${ url }`,
        data
    })
        .then(res => res.data)
        .catch(error => console.log(error));

}