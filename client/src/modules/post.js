import axios from "axios";

const READ_POSTS = "post/READ_POSTS";

export const readHandler = () => async (dispatch) => {
  const data = await axios
    .get("/api/posts")
    .then((res) => res.data)
    .catch((err) => console.log(err));
  /**
   * 액션: { type: READ_POSTS }
   * 디스패치: 액션을 발생시킵니다.
   */
  dispatch({
    type: READ_POSTS,
    payload: data,
  });
};

export const createHandeler = (writer, title, content) => (dispatch) => {
  axios
    .post("/api/posts", {
      writer: writer,
      title: title,
      content: content,
    })
    .then((res) => dispatch(readHandler()))
    .catch((err) => console.log(err));
};

export const deleteHandler = (id, history) => (dispatch) => {
  axios
    .delete(`/api/posts/${id}`)
    .then((res) => history.push("/"))
    .catch((err) => console.log(err));
};

export const editHandler = (id, writer, title, content, history) => (dispatch) => {
  axios
    .post(`/api/posts/${id}/edit`, {
      writer: writer,
      title: title,
      content: content,
    })
    .then((res) => history.goBack())
    .catch((err) => console.log(err));
};

const initialState = {
  posts: [],
};

export default function post(state = initialState, action) {
  const { posts } = state;
  switch (action.type) {
    case READ_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
}
