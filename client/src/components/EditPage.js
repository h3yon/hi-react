import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import "./styles/editpage.scss";
import { editHandler } from "../modules/post";
import { useEffect } from "react";
import Axios from "axios";

function EditPage({ match, history }) {
  const dispatch = useDispatch();

  useEffect(() => {
    Axios.get(`/api/posts/${match.params.id}`).then(({ data }) =>
      setInputfield({
        writer: data[0].writer,
        title: data[0].title,
        mainText: data[0].maintext,
      })
    );
  }, []);

  const [inputfield, setInputfield] = useState({
    writer: "",
    title: "",
    mainText: "",
  });
  const { writer, title, mainText } = inputfield;
  const onChangeHandler = (e) => {
    console.log(inputfield);
    setInputfield({
      ...inputfield,
      [e.target.name]: e.target.value,
    });
  };
  const onEdit = (e) => {
    e.preventDefault();
    dispatch(editHandler(match.params.id, writer, title, mainText, history));
  };
  return (
    <div className="edit-container">
      <div className="edit-title">글 수정</div>
      <form type="submit">
        <label>
          작성자{" "}
          <input
            type="text"
            name="writer"
            value={writer}
            onChange={onChangeHandler}
          />
        </label>
        <label>
          글제목{" "}
          <input
            type="text"
            name="title"
            value={title}
            onChange={onChangeHandler}
          />
        </label>
        <label>
          글 내용
          <textarea
            type="text"
            name="mainText"
            value={mainText}
            onChange={onChangeHandler}
          />
        </label>
        <button type="submit" onClick={onEdit}>
          수정
        </button>
      </form>
    </div>
  );
}

export default EditPage;
