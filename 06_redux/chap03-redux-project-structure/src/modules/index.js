import {combineReducers} from "redux";
import menuReducer from "./MenuModules";
import userReducer from "./UserModules";

const rootReducer = combineReducers({
    menuReducer, userReducer //리듀서 함수 전달
});

export default rootReducer; //store에서 사용하고 있는 리듀서 함수