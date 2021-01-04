import React, { useState, useEffect } from "react";

import Text from "../../atoms/Text";
import Link from "../../atoms/Link";
import NavigationLink from "../NavgationLink";

import { deferGetApiCall } from "../../../api/HackerNewsApi";
import { timeConversion, getHostname } from "../../../utils";

const NewsCard = ({ subUrl, index, type }) => {
  const [news, setNews] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const subscription = deferGetApiCall(subUrl).subscribe((res) => {
      setNews(res);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [subUrl]);

  if (loading) {
    return <></>;
  }

  return news ? (
    <table>
      <tr>
        <td>
          {type === "comments" && (
            <Text label={`${index}`} fontWeight={"bold"} />
          )}
        </td>
        <td>
          <Link label={news.title} />
          <Text
            color="gray"
            fontSize="sm"
            label={` (${getHostname(news.url)})`}
          />
        </td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>
          {type !== "jobs" && (
            <>
              <Text
                color="gray"
                fontSize="xs"
                label={`${news.score} points by `}
              />
              <Text color="gray" fontSize="xs" label={`${news.by} `} />
            </>
          )}
          <Text
            color="gray"
            fontSize="xs"
            label={` ${timeConversion(news.time)} `}
          />

          {type !== "jobs" && (
            <>
              <Text color="gray" fontSize="xs" label={" | "} />
              <Text color="gray" fontSize="xs" label={"hide"} />
            </>
          )}
          {(type === "news" || type === "ask" || type === "show") && (
            <>
              <Text color="gray" fontSize="xs" label={" | "} />
              <NavigationLink
                fontSize="xs"
                label={` ${news.kids ? news.kids.length : 0} comments : '`}
                link={`/item?id=${news.id}`}
              />
            </>
          )}
        </td>
      </tr>
    </table>
  ) : (
    <></>
  );
};

export default NewsCard;
