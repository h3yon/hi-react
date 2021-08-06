import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./styles/writepage.scss";
import { createHandeler } from "../modules/post";
function Wrtiepage({ history }) {
  const dispatch = useDispatch();
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
  const onUpload = (e) => {
    e.preventDefault();
    dispatch(createHandeler(writer, title, mainText)); // 업로드 요청 read 중복되는 것 같다.
    history.push("/"); //메인페이지로 경로변경
  };
  return (
    <div className="write-container">
      <div className="write-title">글쓰기</div>
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
        <button type="submit" onClick={onUpload}>
          업로드
        </button>
      </form>
    </div>
  );
}

export default Wrtiepage;
