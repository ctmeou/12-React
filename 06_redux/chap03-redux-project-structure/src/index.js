import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import store from "./store"; //추가

//App이 store를 구독할 수 있도록 Provider로 감싸준다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={ store }>
        <App />
    </Provider>
);