import React from "react";

function CommentItem({ content, createdAt }) {
  return (
    <div className="item">
      <div className="item-id">{content}</div>
      <div className="item-writer">{createdAt}</div>
    </div>
  );
}

export default CommentItem;
