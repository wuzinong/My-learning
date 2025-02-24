import Page404 from "./../pages/page404";
import Dashboard from "./../pages/dashboard";
import NewItem from "./../pages/new";

export const mainRoutes = [
  {
    path: "/dashboard",
    component: Dashboard,
    authority: ["admin", "anonym"]
  },
  {
    path: "/new",
    component: NewItem,
    authority: ["admin", "anonym"],
    redirectPath: "/403"
  },
  {
    path: "/404",
    component: Page404,
    authority: ["admin", "anonym"],
    redirectPath: "/403"
  },
  {
    path: "/500",
    component: Page404,
    authority: ["admin", "anonym"]
  },
  {
    path: "/Error?msg=:msg",
    component: Page404,
    authority: ["admin", "anonym"]
  }
];
