/* 일별 박스오피스 정보 조회 */
//API로 어떻게 요청되어야 하는지

//함수를 설정해 호출해서 사용한다.
const BASE_URL = 'https://www.kobis.or.kr/kobisopenapi/webservice/rest/';
const API_KEY = '908bc7d66a20e9c2a6fa2705ab349f39';

const getDateFormat = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1; //month 반환 값 : 0 ~ 11이기 때문에 가공해야 한다.
    const date = today.getDate() - 1 < 10 ? '0' + (today.getDate() - 1) : today.getDate() - 1; //어제 날짜이기 때문에 -1해준다.

    return `${ year }${ month }${ date }`; //사이간에 띄어쓰기 하면 안된다.
}

/* 일별 박스오피스 정보 조회(어제 기준 10개의 영화) */
//비동기 통신 시 async await를 작성해야 데이터를 받아오고 작성하지 않으면 promise만 받아온다.
export async function getMovieList() {

    const url = `${ BASE_URL }boxoffice/searchDailyBoxOfficeList.json?key=${ API_KEY }&targetDt=${ getDateFormat() }`;
    const response = await fetch(url);//get방식 요청이기 때문에 fetch해서 넘긴다.
    const data = await response.json(); //꺼내고 싶은 방식이 json

    console.log(data);

    return data.boxOfficeResult.dailyBoxOfficeList;

}

/* 영화 코드를 전달하여 영화 상세 정보 조회 */
export async function getMovieDetail(movieCd) {

    const url = `${ BASE_URL }movie/searchMovieInfo.json?key=${ API_KEY }&movieCd=${ movieCd }`;
    const response =await fetch(url);
    const data = await response.json();

    return data.movieInfoResult.movieInfo; //객체로 꺼내 원하는 값만 반환한다.

}