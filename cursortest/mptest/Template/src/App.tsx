import React, { Suspense, useEffect } from "react";
import { Helmet } from "react-helmet";
import { ConfigProvider, Spin } from "antd";
import en_US from "antd/es/locale-provider/en_US";
import zh_CN from "antd/es/locale-provider/zh_CN";
import {
  Switch,
  Redirect,
  HashRouter,
  withRouter,
  Route
} from "react-router-dom";
import Frame from "./pages/frame";
import { mainRoutes } from "./routes";
import { IntlProvider } from "react-intl";
import GlobalContext from "./stores/context";
import GlobalProvider from "./stores/povider";
import messages from "./locales/index";
import AuthorizedRoute from "./components/authorized";
import page404 from "./pages/page404";
import ErrorBoundary from "antd/lib/alert/ErrorBoundary";

import "./mock/index";

import "./styles/layout.scss";
import "./styles/antd.reset.less";
import "./styles/dnvgl.base.scss";

const antdLocales: any = {
  zh: zh_CN,
  en: en_US
};

const MainPage = withRouter((props: any) => {
  useEffect(() => {
    if (window.location.pathname !== "/") {
      window.location.replace("/");
    }
  }, []);

  const { context } = props;
  const isRoleIncluded = (roles: string[]) => {
    if (context.state.userInfo.roles.length === 0) {
      return false;
    }
    const has: boolean = roles.some((role: string) => {
      return context.state.userInfo.roles.indexOf(role) >= 0;
    });
    return has;
  };
  const authoriedPages: any = mainRoutes.filter(
    (item) => !item.authority || isRoleIncluded(item.authority)
  );
  let firstPage: string = "";

  if (authoriedPages.length > 0) {
    const currentRolePages = authoriedPages.filter(
      (item: any) =>
        item.authority.indexOf(context.state.userInfo.currentRole) >= 0
    );
    if (currentRolePages.length > 0) {
      firstPage = currentRolePages[0].path;
    }
  }

  return (
    <Suspense
      fallback={
        <div className="lazy full-height flex justify-content-center align-content-center">
          Loading
        </div>
      }
    >
      <Frame>
        {authoriedPages.length ? (
          <ErrorBoundary>
            <Switch>
              <Redirect exact from="/" to={firstPage}></Redirect>
              {authoriedPages.map((route: any) => {
                const {
                  path,
                  component,
                  authority,
                  redirectPath,
                  ...rest
                } = route;
                return (
                  <AuthorizedRoute
                    key={route.path}
                    path={path}
                    component={component}
                    authority={authority}
                    redirectPath={redirectPath}
                    {...rest}
                  />
                );
              })}
              <Route path="/404" component={page404} />
              <Redirect to="/404"></Redirect>
            </Switch>
          </ErrorBoundary>
        ) : (
          <div className="layout-loading">
            <Spin size="large" tip="Poseidon for Signatories is loading..." />
          </div>
        )}
      </Frame>
    </Suspense>
  );
});

const App = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>DNV GL App</title>
      <meta name="keywords" content="App of DVNGL" />
    </Helmet>
    <HashRouter>
      <GlobalProvider>
        <GlobalContext.Consumer>
          {(context: any) => (
            <ConfigProvider
              csp={{
                nonce: "nonce-2726a7d26a"
              }}
              locale={antdLocales["en" || context.state.lang]}
            >
              <IntlProvider
                locale={context.state.lang}
                messages={messages[context.state.lang]}
              >
                <MainPage context={context} />
              </IntlProvider>
            </ConfigProvider>
          )}
        </GlobalContext.Consumer>
      </GlobalProvider>
    </HashRouter>
  </>
);

export default App;
