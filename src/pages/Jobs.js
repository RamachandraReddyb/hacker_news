import React, { useState, useEffect } from "react";
import { divide, slice, multiply } from "ramda";
import { useLocation } from "react-router-dom";
import NewsContainer from "../components/organisms/NewsContainer";
import { getJobsApi, ITEM_URL } from "../api/HackerNewsApi";
import { getCurrentPage } from "../utils";

const Jobs = () => {
  const [storyIds, setStoryIds] = useState([]);
  const [newsIds, setNewsIds] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const storyIndex = multiply(currentPage - 1, 30);
  const location = useLocation();

  useEffect(() => {
    const subscription = getJobsApi().subscribe((res) => {
      setStoryIds(res);
      setPageCount(Math.ceil(divide(res.length, 30)));
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []); // not passing storyIds & pageCount since getNews is gettting ids

  useEffect(() => {
    setIsLoading(true);
    let q = getCurrentPage(location.search, "page");
    let pageStories = slice(q - 1, 30, storyIds); // taking 30 items per page
    setCurrentPage(q);
    if (pageStories.length > 0) {
      setNewsIds(pageStories);
    }
    setIsLoading(false);
  }, [storyIds, location.search]); // using second useeffect to execute once

  return (
    !isLoading && (
      <NewsContainer
        subUrl={ITEM_URL}
        newsIds={newsIds}
        indexStart={storyIndex}
        nextPageQuery={`/news?page=${currentPage ? currentPage + 1 : 2}`}
        isNextPage={currentPage < pageCount}
        type="jobs"
      />
    )
  );
};

export default Jobs;
