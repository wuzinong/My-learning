import React, { useState, useContext, useEffect } from "react";
import { Menu, Row, Col, Dropdown, Divider, Button, Badge } from "antd";
import menuDefs from "./../config/menu";
import classNames from "classnames";
import { withRouter } from "react-router-dom";
import UserContext from "../stores/context";
import { roles } from "./../config/permission";
import { UPDATE_CURRENTUSER } from "../stores/povider";

import "./../assets/iconfont/iconfont.scss";
import { appVersion } from "../config/config";
import { CaretDownOutlined } from "@ant-design/icons";

function Sidebar(props: any) {
  const { state, dispatch } = useContext(UserContext);
  const menus: any = menuDefs.find(
    (item: any) => item.role === state.userInfo.currentRole
  );

  const [currentPath, setCurrentPath] = useState("");
  //onst [yearShow, setYear] = useState(fa)

  useEffect(() => {
    setCurrentPath(props.location.pathname);
  }, [props.location.pathname]);

  const onSelected = (attrs: any) => {
    const { key } = attrs;
    props.history.push(key);
    setCurrentPath(key);
  };

  const getRoleName = (key: string) => {
    let title: string = "";
    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === key) {
        title = roles[i].title;
        break;
      }
    }
    return title;
  };

  const menu = (
    <Menu
      onClick={(item) => {
        let { userInfo } = state;
        userInfo.currentRole = item.key;
        dispatch &&
          dispatch({
            type: UPDATE_CURRENTUSER,
            state: { ...state, userInfo }
          });
        props.history.push("/");
      }}
    >
      <Menu.ItemGroup title="Please select your role">
        <Menu.Divider />
        {state.userInfo.roles.map((role) => (
          <Menu.Item key={role}>
            <span
              className={classNames(
                "uppercase",
                role === state.userInfo.currentRole ? "bold" : ""
              )}
            >
              {roles.find((item) => role === item.name)?.title}
            </span>
          </Menu.Item>
        ))}
      </Menu.ItemGroup>
    </Menu>
  );

  return (
    <>
      <Row align="top" className="full-height margin-bottom-xl">
        <Col flex="auto">
          <Row
            justify="center"
            align="top"
            className={classNames("margin-y-lg")}
          >
            <Col
              className="cursor-pointer"
              onClick={() => {
                props.history.push("/");
              }}
            >
              <img
                src={
                  "https://placeholder.pics/svg/200x100/DEDEDE/DEDEDE/app%20logo"
                }
                alt="Poseidon"
                title={"Poseidon Version: " + appVersion}
              />
            </Col>
          </Row>
          <Row justify="center" className="margin-top-xl">
            <Col className="fs-sm">{state.userInfo.userName}</Col>
          </Row>
          <Row justify="center">
            <Col className="text-grey fs-xs">{state.userInfo.email}</Col>
          </Row>
          <Row justify="center" className="margin-top-xl">
            <Col className="bold Avenir uppercase">
              <span>{getRoleName(state.userInfo.currentRole)}</span>
              {state.userInfo.roles.length > 1 ? (
                <Dropdown placement="bottomCenter" overlay={menu}>
                  <Button className="fs-xs" type="link">
                    Switch <CaretDownOutlined />
                  </Button>
                </Dropdown>
              ) : null}
            </Col>
          </Row>

          <Divider />

          <Menu
            selectedKeys={[currentPath]}
            mode="vertical"
            onSelect={onSelected}
          >
            {menus
              ? menus.menus.map((menu: any) => {
                  return (
                    <Menu.Item key={menu.path}>
                      <span
                        className={classNames(
                          "iconfont",
                          "menubar-icon",
                          "margin-right-sm",
                          menu.icon
                        )}
                      ></span>
                      {menu.showBadge ? (
                        <Badge offset={[10, 0]}>{menu.title}</Badge>
                      ) : (
                        menu.title
                      )}
                    </Menu.Item>
                  );
                })
              : null}
          </Menu>
        </Col>
      </Row>
    </>
  );
}

export default withRouter(Sidebar);
