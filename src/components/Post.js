import React from "react";
import "./style/Post.css";

const Post = ({
  author,
  content,
  image,
  date,
  ava,
  likesCount,
  looks,
  comments,
  downloads,
}) => {
  return (
    <div className="post">
      <div className="post-header">
        <div className="post-header-ava">
          <img src={ava} className="ava" alt="alt-image" />
        </div>
        <div className="post-header-name">{author.name}</div>
        <div className="post-header-nickname">{author.nickname}</div>

        <div className="post-header-date">
          <span className="date-style"></span>Date: {date}
        </div>
      </div>
      <span className="content">
        <h4 className="Hcontent">{content}</h4>
      </span>
      <div className="post-image">
        <img src={image} className="img" alt="alt-image" />
      </div>
      <div className="post-actions">
        <div className="likesCount">{likesCount}</div>
        <div className="looks">{looks}</div>
        <div className="comments">{comments}</div>
        <div className="downloads">{downloads}</div>
      </div>
    </div>
  );
};

export default Post;
