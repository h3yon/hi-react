import React from "react";
import "./styles/comment.scss";
import { Button, Image } from "semantic-ui-react";

export function Comment(props) {
  return (
    <div className="comment">
      <Image className="user-image" src="http://via.placeholder.com/48x48" circular />
      <div>
        <div className="user-name">User name</div>
        <span>Comment text</span>
        <div className="comment-actions">
          <Button size="mini" compact>
            REPLY
          </Button>
        </div>
      </div>
    </div>
  );
}
