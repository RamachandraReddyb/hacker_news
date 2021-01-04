import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ITEM_URL, deferGetApiCall } from "../api/HackerNewsApi";
import CommentsContainer from "../components/organisms/CommentsContainer";

const Comments = () => {
  const [loading, setLoading] = useState(true);
  const [commentsIds, setCommentsIds] = useState();
  const location = useLocation();
  const storyId = Number(new URLSearchParams(location.search).get("id"));

  useEffect(() => {
    const subscription = deferGetApiCall(
      `${ITEM_URL}/${storyId}.json`
    ).subscribe((res) => {
      setCommentsIds(res);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [storyId]);

  return (
    <>
      {!loading && commentsIds && (
        <CommentsContainer subUrl={ITEM_URL} commentsArray={commentsIds} />
      )}
    </>
  );
};

export default Comments;
