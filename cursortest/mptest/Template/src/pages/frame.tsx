import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Layout } from "antd";
import Sidebar from "./../components/sidebar";
import ClassNames from "classnames";
import { isUseVeractiyComponent } from "../config/config";
import DNVGLFooter from "../components/simple/footer";
import DNVGLHeader from "../components/simple/header";

const { Sider, Content } = Layout;

export default function Frame(props: any) {
  return (
    <section className="main-container min-full-height flex column">
      {isUseVeractiyComponent ? <Header></Header> : <DNVGLHeader />}

      <Layout className="flex-auto layout-main">
        {isUseVeractiyComponent ? (
          <Sider
            width={280}
            breakpoint="lg"
            collapsedWidth="0"
            className={ClassNames(
              "bg-white",
              "padding-top-sm",
              "layout-sidebar"
            )}
          >
            <Sidebar />
          </Sider>
        ) : null}

        <Content className={ClassNames("bg-white", "padding-md")}>
          {props.children}
        </Content>
      </Layout>
      {isUseVeractiyComponent ? <Footer></Footer> : <DNVGLFooter />}
    </section>
  );
}
