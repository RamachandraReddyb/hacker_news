import { defer } from "rxjs";
export const BASE_URL = "https://hacker-news.firebaseio.com/v0";
export const ITEM_URL = `${BASE_URL}/item`;

export const API = {
  ask: `${BASE_URL}/askstories.json`,
  jobs: `${BASE_URL}/jobstories.json`,
  newest: `${BASE_URL}/newstories.json`,
  news: `${BASE_URL}/topstories.json`,
  show: `${BASE_URL}/showstories.json`,
};

export const getNews = () => deferGetApiCall(API.news);
export const getNewestNews = () => deferGetApiCall(API.newest);
export const getAskApi = () => deferGetApiCall(API.ask);
export const getShowApi = () => deferGetApiCall(API.show);
export const getJobsApi = () => deferGetApiCall(API.jobs);

export const deferGetApiCall = (url) => defer(() => getApiRequest(url));

export const getApiRequest = (url) => {
  return fetch(url).then((res) => res.json());
};
