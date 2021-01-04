import React from "react";
import NewsCard from "../../molecules/NewsCard";
import NavigationLink from "../../molecules/NavgationLink";

const NewsContainer = ({
  newsIds,
  nextPageQuery,
  subUrl,
  indexStart,
  isNextPage,
  type,
}) => {
  let renderNews = newsIds.map((item, index) => {
    return (
      <NewsCard
        index={indexStart + index + 1}
        key={index}
        subUrl={`${subUrl}/${item}.json`}
        type={type}
      />
    );
  });

  return (
    <table>
      <tbody>
        <tr>
          <td>{renderNews}</td>
        </tr>
        <tr>
          <td>
            <NavigationLink color="gray" link={nextPageQuery} label="More" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default NewsContainer;
