//각각의 메뉴에 대해 라우팅할 페이지
import {useParams} from "react-router-dom";
import Menu from "../components/item/Menu";

function MenuDetail() {

    //특정 상세 정보를 작성하기 위해 API 호출하기 위해 ID 값 가져오는데 URL에서부터 가져온다. -> Detail에서 파라미터를 뽑아 props로 전달한다.
    const { id } = useParams();

    return (
        <div>
            <h1>메뉴 상세</h1>
            <Menu id={ id }/>
        </div>
    );

}

export default MenuDetail;