import {combineReducers} from "redux";
import menuReducer from "./MenuModules";

const rootReducer = combineReducers({
    menuReducer //리듀서 함수 전달
});

export default rootReducer; //store에서 사용하고 있는 리듀서 함수