import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMovieDetail} from "../api/MovieAPI";

function MovieDetail() {

    const { movieCd } = useParams();

    const [movie, setMovie] = useState();

    //비동기 통신이 끝난 후 반환 받을 때는 then 사용
    useEffect(() => {
        getMovieDetail(movieCd).then(data => setMovie(data));
    }, []);

    console.log(movie);

    //조건부 렌더링(movie에 대한 값이 있을 경우에만 출력)
    //하나하나 국가에 대해서, 배열이기 때문에 map을 통해 span을 여러 개 출력한다.
    return (
        <div className="content-col">
            { movie &&
                <>
                    <h1>{ movie.movieNm }({ movie.movieNmEn })</h1>
                    <div>러닝 타임 : { movie.showTm }분</div>
                    <div>
                        국가 : { movie.nations.map(nation => <span>{ nation.nationNm }</span>)}
                    </div>
                    <div>출연</div>
                    <div>
                        { movie.actors.map(actor => {
                            return (
                                <div>
                                    <span className='actor'>{ actor.peopleNm }</span>
                                    <span>{ actor.cast && `-${ actor.cast }역` }</span>
                                </div>
                            )
                        })}
                    </div>
                    <Link to="/movie">목록으로</Link>
                </>
            }
        </div>
    );

}

export default MovieDetail;