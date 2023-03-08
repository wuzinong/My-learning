import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { Layout } from "./components/Layout";
import { Helmet } from "react-helmet";
import "./custom.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 6 * 1000,
    },
  },
});

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Helmet>
            {/* <meta
              http-equiv="Content-Security-Policy"
              content="default-src 'self';script-src 'self';style-src 'self' 'unsafe-inline';img-src 'self' https://cdn.sanity.io"
            /> */}
          </Helmet>
          <Routes>
            {AppRoutes.map((route, index) => {
              const { element, ...rest } = route;
              return <Route key={index} {...rest} element={element} />;
            })}
          </Routes>
        </Layout>
      </QueryClientProvider>
    );
  }
}
