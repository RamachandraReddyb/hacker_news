import React, { useState, useEffect } from "react";
import { deferGetApiCall } from "../../../api/HackerNewsApi";
import Text from "../../atoms/Text";
import { timeConversion } from "../../../utils";

const Comment = ({ id, subUrl, className }) => {
  const [comments, setComments] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const subscription = deferGetApiCall(`${subUrl}/${id}.json`).subscribe(
      (resp) => {
        setComments(resp);
        setLoading(false);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [id, subUrl]);

  if (loading) {
    return <></>;
  }
  return comments && !comments.deleted ? (
    <div className={className}>
      <div>
        <Text label={`${comments.by} `} color="gray" fontSize="sm" />
        <Text
          label={timeConversion(comments.time)}
          color="gray"
          fontSize="sm"
        />
      </div>
      <div>{comments.text}</div>
      <Text label="reply" color="gray" fontSize="sm" />
      <br />
      <br />
      {Array.isArray(comments.kids) &&
        comments.kids.map((item, index) => (
          <Comment className="p-l-20" key={index} subUrl={subUrl} id={item} />
        ))}
    </div>
  ) : (
    <></>
  );
};

export default Comment;
