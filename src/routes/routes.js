
import News from '../pages/News';
import Newest from "../pages/Newest";
import Comments from '../pages/Comments';
import Ask from "../pages/Ask";
import Show from '../pages/Show';
import Jobs from '../pages/Jobs';
import Guidelines from "../pages/Guidelines";
import FAQ from "../pages/FAQ";
import Security from "../pages/Security";
import Lists from '../pages/Lists'
import Bookmarklet from "../pages/Bookmarklet";

const ROUTES =[
  {
    path: "/",
    exact: true,
    component: News,
  },
  {
    path: "/news",
    exact: true,
    component: News,
  },
  {
    path: "/newest",
    exact: true,
    component: Newest,
  },
  {
    path: "/item",
    exact: true,
    component: Comments,
  },
  {
    path: "/ask",
    exact: true,
    component: Ask,
  },
  {
    path: "/show",
    exact: true,
    component: Show,
  },
  {
    path: "/jobs",
    exact: true,
    component: Jobs,
  },
  {
    path: "/guidelines",
    exact: true,
    component: Guidelines,
  },
  {
    path: "/faq",
    exact: true,
    component: FAQ,
  },
  {
    path: "/security",
    exact: true,
    component: Security,
  },
  {
    path: "/lists",
    exact: true,
    component: Lists,
  },
  {
    path: "/bookmarklet",
    exact: true,
    component: Bookmarklet,
  }
];

export default ROUTES;
