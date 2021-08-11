import React from "react";
import "./styles/boarddetailpage.scss";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteHandler } from "../modules/post";

import { readHandler, createHandler } from "../modules/comment";
import CommentItem from "./CommentItem";

function BoardDetailPage({ match, history }) {
  useEffect(() => {
    //라우터의 match를 사용하여 주소 값의 id 부분을 알아낸 다음 그 값으로 서버에 요청을 보낸다.
    axios.get(`/api/posts/${match.params.id}`).then(({ data }) =>
      setText({
        title: data[0].title,
        writer: data[0].writer,
        date: data[0].createdAt,
        content: data[0].content,
      })
    );
    dispatch(readHandler(`${match.params.id}`));
  }, [match.params.id, match.params.id]);
  const dispatch = useDispatch();
  const [text, setText] = useState({
    title: "",
    writer: "",
    date: "",
    content: "",
  });

  const { title, writer, date, content } = text;

  const { comments } = useSelector((state) => state.comment);
  const commentList = comments.map((item) => <CommentItem content={item.content} createdAt={item.createdAt} />);

  const [commentText, setCommentText] = useState({ commentContent: "" });
  const { commentContent } = commentText;
  const onChangeHandler = (e) => {
    console.log(commentText);
    /**
     * 스프레드 문법 같은 작업을, "불변성을 지킨다" 라고 부릅니다
     * e.target 은 이벤트가 발생한 DOM 인 input DOM
     */
    setCommentText({
      ...commentText,
      [e.target.name]: e.target.value,
    });
  };
  const onCreate = (e) => {
    /**
     * 이벤트를 취소하는 도중에 preventDefault를 호출하게되면,
     * 일반적으로는 브라우저의 구현에 의해 처리되는 기존의 액션이 동작하지 않게되고,
     * 그 결과 이벤트가 발생하지 않게됩니다.
     */
    e.preventDefault();

    dispatch(createHandler(match.params.id, commentContent, history));
  };

  return (
    <>
      <div className="board-detail-conatiner">
        <div className="detail-title">
          <div className="detail-btns">
            <button onClick={() => history.push(`/page/${match.params.id}/edit`)}>글수정</button>
            <button onClick={() => dispatch(deleteHandler(match.params.id, history))}>글삭제</button>
            <button onClick={() => history.push("/")}>홈으로</button>
          </div>

          <h1>{title ? title : "Loading..."}</h1>
          <div className="detail-subtitle">
            <div className="detail-subtitle-writer">작성자: {writer ? writer : "Loading..."}</div>
            <div className="detail-subtitle-date">Date: {date ? date : "Loading..."}</div>
          </div>
        </div>
        <div className="detail-main">{content ? content : "Loading..."}</div>

        <h2>Comments</h2>
        <hr></hr>
        <div className="add-comments-container">
          <input type="text" name="commentContent" placeholder="댓글을 입력해주세요." value={commentContent} onChange={onChangeHandler} />
          <div className="comment-btns">
            <button labelPosition="left" type="submit" onClick={onCreate}>
              Add Comment
            </button>
          </div>
        </div>
        <div className="comments-list">{commentList}</div>

        {/* <Form reply>
            <Form.TextArea value={content} placeholder="댓글을 입력해주세요." onChange={onChangeHandler} />
            <Button content="Add Reply" labelPosition="left" icon="edit" primary onClick={onCreate} />
          </Form> */}
        {/* <Comment /> */}
      </div>
    </>
  );
}

export default BoardDetailPage;
