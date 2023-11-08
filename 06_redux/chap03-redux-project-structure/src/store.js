import {applyMiddleware, legacy_createStore as createStore} from "redux";
import rootReducer from "./modules";
import ReduxThunk from 'redux-thunk'; //3, 4줄은 원하는 인수를 전달하기 위해 import를 작성한다.
import ReduxLogger from 'redux-logger';
import {composeWithDevTools} from "redux-devtools-extension";

//첫 번째 인자 리듀서, 두 번째 인자로는 미들웨어
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk, ReduxLogger)) //ReduxThunk 적용 후 ReduxLogger를 적용한다. ReduxLogger : 액션 객체를 넘길 때만 동작한다.
);

//다른 파일에서 사용하기 위해 export 작성
export default store;