const menuDefs = [
  {
    role: "admin",
    menus: [
      {
        key: 0,
        title: "dashboard",
        i18nKey: "dashboard",
        path: "/dashboard",
        icon: "icon-balance"
      },
      {
        key: 1,
        title: "New Item",
        i18nKey: "newItem",
        path: "/new",
        icon: "icon-renew"
      },
      {
        key: 2,
        title: "404 Page",
        i18nKey: "404page",
        path: "/404",
        icon: "icon-list"
      }
    ]
  },
  {
    role: "anonym",
    menus: [
      {
        key: 0,
        title: "404 Page",
        i18nKey: "404page",
        path: "/404",
        icon: "icon-list"
      }
    ]
  }
];

export default menuDefs;
