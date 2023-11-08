import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {callGetMenuListAPI} from "../../api/MenuAPICalls";
import MenuItem from "../item/MenuItem";

function MenuList() {

    //리덕스로 관리되어 있는 데이터를 불러오기 위해 index에 state를 어떻게 관리할 것인지에 대해 작성하지 않았기 때문에 MenuModules에 작성 후 불러온다.
    //메뉴 정보를 렌더링 하고 싶고 하려면 api 호출을 해야 하고 호출을 하기 위해 ~~가 담겨야 한다.
    const dispath = useDispatch();
    const { menulist } = useSelector(state => state.menuReducer); //useSelector는 state에서 어떤 값을 사용할지, 배열로 된 menulist를 가져온다.

    //처음 데이터가 불러와졌을 때 사용하는 useEffect
    useEffect(() => {
        /* menuList 호출 API 로직을 담은 함수를 전달한다. */
        dispath(callGetMenuListAPI()); //function을 넘기면 호출을 해줬다.
    }, []);

    return (
        <div className="menuBox">
            { menulist && menulist.map(menu => <MenuItem key={ menu.id } menu={ menu }/>) }
        </div>
    );

}

export default MenuList;