import {useEffect, useState} from "react";
import {getMovieList} from "../api/MovieAPI";
import MovieItem from "../components/MovieItem";

function MovieList() {

    const [movieList, setMovieList] = useState();

    useEffect(() => {
        //setMovieList(getMovieList()); 함수를 호출해서 반환받는 것도 then으로 처리해야 한다.(함수를 처리하고 반환받는 것도 기다렸다가 반환 받아야 한다.) -> 비동기적 호출
        getMovieList().then(data => setMovieList(data));
    }, []);

    console.log(movieList);

    //movieList 처음에는 undifined, 배열로 돌아왔을 때 하나하나 MovieItem로 표현하고 props로 moive로 준다.
    return (
        <div className="content-row">
            { movieList && movieList.map(movie => <MovieItem key={ movie.movieCd } movie={ movie }/>)}
        </div>
    );

}

export default MovieList;