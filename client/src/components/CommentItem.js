import React from "react";
import "./styles/commentitem.scss";

function CommentItem({ content, createdAt }) {
  return (
    <div className="comment-item">
      <div className="comment-item-content">{content}</div>
      <div className="comment-item-date">{createdAt}</div>
    </div>
  );
}

export default CommentItem;
