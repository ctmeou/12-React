/* 일별 박스오피스 정보 조회 */
//API로 어떻게 요청되어야 하는지

//함수를 설정해 호출해서 사용한다.
const BASE_URL = 'https://www.kobis.or.kr/kobisopenapi/webservice/rest/';
const API_KEY = '908bc7d66a20e9c2a6fa2705ab349f39';

const getDateFormat = () => {

}
export function getMovieList() {

    const url = `${ BASE_URL }boxoffice/searchDailyBoxOfficeList.json?key=${ API_KEY }&targetDt=${ getDateFormat() }`;

}