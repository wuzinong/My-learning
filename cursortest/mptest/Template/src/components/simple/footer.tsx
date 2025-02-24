import React, { useContext } from "react";
import { Row, Col, Button, Tooltip, Select } from "antd";
import {
  LinkedinFilled,
  TwitterCircleFilled,
  FacebookFilled,
  YoutubeFilled
} from "@ant-design/icons";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import Util from "../../utils/util";
import UserContext from "./../../stores/context";
import { UPDATE_LANG } from "../../stores/povider";

const FooterContainer: any = styled(Row)`
  padding: 0 30px;
  height: 50px;
  border-top: solid 1px #e8e8e8;
  font-size: 12px;
  button {
    font-size: 12px;
  }
  .footer-icons {
    .copyright {
      margin-right: 1rem;
    }
    a {
      margin-left: 1rem;
    }
  }
`;

export default function DNVGLFooter() {
  const { Option } = Select;
  const linkList: any[] = [
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/company/dnvgl/",
      icon: LinkedinFilled
    },
    {
      title: "Twitter",
      href: "https://twitter.com/DNVGL",
      icon: TwitterCircleFilled
    },
    {
      title: "Facebook",
      href: "https://www.facebook.com/dnvgl",
      icon: FacebookFilled
    },
    {
      title: "YouTube",
      href: "https://www.youtube.com/user/dnvgl",
      icon: YoutubeFilled
    }
  ];

  const { state, dispatch } = useContext(UserContext);

  const langChange = (lang: string) => {
    Util.setCulture(lang);
    if (dispatch) {
      dispatch({ type: UPDATE_LANG, state: { ...state, lang } });
    }
  };

  return (
    <FooterContainer
      justify="space-between"
      className="flex-none"
      align="middle"
    >
      <Col>
        <Button size="small" type="link">
          <FormattedMessage id="faq" />
        </Button>
        <Button size="small" type="link">
          <FormattedMessage id="privacy" />
        </Button>
        <Button size="small" type="link">
          <FormattedMessage id="termsOfUse" />
        </Button>
        <Select
          defaultValue={state.lang}
          style={{ width: 120 }}
          onChange={langChange}
        >
          <Option value="zh">简体中文</Option>
          <Option value="en">English</Option>
        </Select>
      </Col>
      <Col className="footer-icons">
        <span className="copyright">
          Copyright &copy; <strong>DNVGL</strong> AS 2020
        </span>
        {linkList.map((item: any) => {
          const Comp = item.icon;
          return (
            <Tooltip key={item.title} title={item.title}>
              <Button
                size="small"
                type="primary"
                shape="circle"
                icon={<Comp />}
                target="_blank"
                rel="noopener noreferrer"
                href={item.href}
              ></Button>
            </Tooltip>
          );
        })}
      </Col>
    </FooterContainer>
  );
}
