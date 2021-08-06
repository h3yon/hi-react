import React from "react";
import "./styles/postitem.scss";
function PostItem({ id, writer, title, date }) {
  return (
    <div className="item">
      <div className="item-id">{id}</div>
      <div className="item-writer">{writer}</div>
      <div className="item-title">{title}</div>
      <div className="item-date">{date}</div>
    </div>
  );
}

export default PostItem;
