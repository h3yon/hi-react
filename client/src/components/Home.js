import React from "react";
import "./styles/home.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readHandler } from "../modules/post";
import { Link } from "react-router-dom";
import PostItem from "./PostItem";

function Home({ history }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readHandler());
  }, []);

  const { posts } = useSelector((state) => state.post);
  const postList = posts.map((item) => (
    <Link to={`/page/${item.id}`} key={item.id}>
      <PostItem id={item.id} writer={item.writer} title={item.title} date={item.createdAt} />
    </Link>
  ));
  return (
    <div className="board-container">
      <div className="board-container-title">자유게시판</div>

      <div className="board-container-board">
        <div className="board-header">
          <div className="board-header-num">번호</div>
          <div className="board-header-writer">글쓴이</div>
          <div className="board-header-title">제목</div>
          <div className="board-header-date">날짜</div>
        </div>
        <div className="board-main">{postList}</div>
      </div>
      <button onClick={() => history.push("/write")} className="board-btn">
        글쓰기
      </button>
    </div>
  );
}

export default Home;
