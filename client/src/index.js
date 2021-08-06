import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import Reducer from "./reducer";

/**
 * 스토어 (Store)
 *
 * 리덕스에서는 한 애플리케이션당 하나의 스토어를 만들게 됩니다.
 * 스토어 안에는, 현재의 앱 상태와, 리듀서가 들어가있고, 추가적으로 몇가지 내장 함수들이 있습니다.
 * 리덕스: 리액트 생태계에서 가장 사용률이 높은 상태관리 라이브러리
 */
const store = createStore(Reducer, applyMiddleware(ReduxThunk));
console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
