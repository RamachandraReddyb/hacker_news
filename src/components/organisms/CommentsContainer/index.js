import React from "react";
import NewsCard from "../../molecules/NewsCard";
import Comment from "../../molecules/Comment";

import "./comments.css";

const CommentsContainer = ({ subUrl, commentsArray }) => {
  return (
    <div className="comments">
      <NewsCard subUrl={`${subUrl}/${commentsArray.id}.json`} />
      <textarea name="text" rows={6} cols={60}></textarea>
      <br />
      <input type="submit" value="Add comment" style={{ margin: "1px" }} />
      <div style={{ height: 10 }} />

      {Array.isArray(commentsArray.kids) &&
        commentsArray.kids.map((item, key) => (
          <Comment key={key} id={item} subUrl={subUrl} />
        ))}
      <div style={{ height: 10 }} />
    </div>
  );
};

export default CommentsContainer;
