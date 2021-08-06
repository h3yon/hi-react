/**
 * 루트 리듀서
 * 리듀서는 변화를 일으키는 함수
 */
import { combineReducers } from "redux";
import post from "../modules/post";

const rootReducer = combineReducers({
  post,
});

export default rootReducer;
