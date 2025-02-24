import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Dropdown, Menu } from "antd";
import { withRouter } from "react-router-dom";
import {
  QuestionCircleOutlined,
  UserOutlined,
  LoginOutlined,
  SettingFilled
} from "@ant-design/icons";
import styled from "styled-components";
import Logo from "./../../assets/images/logo.png";
import backgroundLogo from "./../../assets/images/logo-bleed.png";
import UserContext from "./../../stores/context";
import { FormattedMessage } from "react-intl";
import menuDefs from "./../../config/menu";

const Container: any = styled(Row)`
  height: 65px;
  border-bottom: 1px solid #e5e5e5;
  padding-right: 30px;
  .logo {
    background: url("${backgroundLogo}") repeat-x;
    min-width: 180px;
  }
  .sys-name {
    margin-right: 30px;
  }
  .header-icons .ant-col{
    min-width: 50px;
    text-align: center;
  }
`;
const DropdownContainer: any = styled(Dropdown)`
  display: block;
`;
const HeaderTabs: any = styled(Col)`
  cursor: pointer;
  margin-left: 3rem;
  align-self: flex-end;

  .ant-menu-horizontal {
    border-bottom: none;
    .ant-menu-item {
      margin-left: 20px;
      padding: 0;
      border-bottom-width: 4px !important;
    }
    .ant-menu-item-selected {
      font-weight: bold;
      border-bottom-width: 4px !important;
    }
  }
`;

function DNVGLHeader(props: any) {
  const { state } = useContext(UserContext);
  const menus: any = menuDefs.find(
    (item: any) => item.role === state.userInfo.currentRole
  );
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(props.location.pathname);
  }, [props.location.pathname]);

  const onSelected = (attrs: any) => {
    const { key } = attrs;
    props.history.push(key);
    setCurrentPath(key);
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <UserOutlined /> {state.userInfo.userName}
      </Menu.Item>
      <Menu.Item>
        <a
          href="https://services.veracity.com/EditProfile?loggedin=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SettingFilled />{" "}
          <FormattedMessage id="manageAccount"></FormattedMessage>
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <LoginOutlined />
        <FormattedMessage id="loginout"></FormattedMessage>
      </Menu.Item>
    </Menu>
  );
  const navMenu = (
    <Menu selectedKeys={[currentPath]} mode="horizontal" onSelect={onSelected}>
      {menus
        ? menus.menus.map((menu: any) => {
            return (
              <Menu.Item key={menu.path}>
                {menu.i18nKey ? (
                  <FormattedMessage id={menu.i18nKey} />
                ) : (
                  menu.title
                )}
              </Menu.Item>
            );
          })
        : null}
    </Menu>
  );
  return (
    <Container
      className="header-container flex-none"
      justify="space-between"
      align="middle"
    >
      <Col>
        <Row justify="space-between" align="middle">
          <Col
            className="logo cursor-pointer flex justify-end"
            onClick={() => {
              props.history.push("/");
            }}
          >
            <img src={Logo} alt="logo"></img>
          </Col>
          <HeaderTabs className="header-tabs flex row uppercase">
            {navMenu}
          </HeaderTabs>
        </Row>
      </Col>
      <Col>
        <Row className="header-icons" justify="space-between" align="middle">
          <Col className="uppercase bold sys-name">DNVGL App</Col>
          <Col>
            <QuestionCircleOutlined className="cursor-pointer" />
          </Col>
          <Col>
            <DropdownContainer className="cursor-pointer" overlay={menu}>
              <UserOutlined />
            </DropdownContainer>
          </Col>
        </Row>
      </Col>
    </Container>
  );
}
export default withRouter(DNVGLHeader);
