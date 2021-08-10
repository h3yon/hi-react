import axios from "axios";

const READ_COMMENTS = "comment/READ_COMMENTS";

export const readHandler = (id) => async (dispatch) => {
  const data = await axios
    .get(`/api/posts/${id}/comments`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
  /**
   * 액션: { type: READ_COMMENTS }
   * 디스패치: 액션을 발생시킵니다.
   */
  dispatch({
    type: READ_COMMENTS,
    payload: data,
  });
};

export const createHandler = (id, content) => (dispatch) => {
  axios
    .post(`/api/posts/${id}/comments`, {
      content: content,
    })
    .then((res) => dispatch(readHandler()))
    .catch((err) => console.log(err));
};

const initialState = {
  comments: [],
};

export default function comment(state = initialState, action) {
  const { comments } = state;
  switch (action.type) {
    case READ_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
}
