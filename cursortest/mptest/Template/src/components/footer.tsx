import React, { useContext } from "react";
import { Select, Typography } from "antd";
import Util from "../utils/util";
import UserContext from "./../stores/context";
import { UPDATE_LANG } from "../stores/povider";
import VeracityFooter from "@veracity/js-internal/VeracityFooter";
import { Column, Row } from "@veracity/js-internal/Footer";

const { Link, Text } = Typography;

const shortcuts: any[] = [
  {
    cate: "Veracity",
    items: [
      {
        title: "Home",
        link: "https://www.veracity.com/?loggedin=1"
      },
      {
        title: "About Veracity",
        link: "https://www.veracity.com/about?loggedin=1"
      },
      {
        title: "Veracity Partner Program",
        link: "https://partner.veracity.com/?loggedin=1"
      },
      {
        title: "FAQ",
        link: "https://services.veracity.com/FAQ"
      }
    ]
  },
  {
    cate: "Legal",
    items: [
      {
        title: "Privacy statement",
        link: "https://services.veracity.com/PrivacyStatement"
      },
      {
        title: "Terms of use",
        link: "https://services.veracity.com/TermsOfUse"
      },
      {
        title: "Security and compliance",
        link:
          "https://www.veracity.com/about/security-and-compliance?loggedin=1"
      }
    ]
  },
  {
    cate: "Developer",
    items: [
      {
        title: "Developer home",
        link: "https://developer.veracity.com/?loggedin=1"
      },
      {
        title: "Developer program",
        link: "https://go.veracity.com/devprogram?loggedin=1"
      },
      {
        title: "Documentation",
        link: "https://developer.veracity.com/docs?loggedin=1"
      },
      {
        title: "API portal",
        link: "https://api-portal.veracity.com/?loggedin=1"
      }
    ]
  },
  {
    cate: "Contact us",
    items: [
      {
        title: "Get support",
        link: "https://services.veracity.com/form/Support"
      },
      {
        title: "Email us",
        link: "mailto:contact@veracity.com",
        copyable: true
      },
      {
        title: "DNV GL AS"
      },
      {
        title: "NO-1322 Høvik, Norway"
      }
    ]
  }
];

function MenuList(props: any) {
  const { cate, items } = props;

  return (
    <Column heading={cate}>
      {items.map((item: any) => {
        return item.link ? (
          <Link
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            key={item.title}
          >
            {item.title}
          </Link>
        ) : (
          <Text key={item.title}>{item.title}</Text>
        );
      })}
    </Column>
  );
}

const sitemapLinks: JSX.Element[] = [
  <a key="veracity" href="https://veracity.com">
    Veracity
  </a>,
  <a key="ulv" href="https://www.ulv.no">
    Ulv
  </a>,
  <a key="elg" href="https://www.elg.no">
    Elg
  </a>,
  <a key="sau" href="https://www.sau.no">
    Sau
  </a>
];

export default function Footer() {
  const { Option } = Select;

  const { state, dispatch } = useContext(UserContext);

  const langChange = (lang: string) => {
    Util.setCulture(lang);
    if (dispatch) {
      dispatch({ type: UPDATE_LANG, state: { ...state, lang } });
    }
  };

  return (
    <>
      <VeracityFooter sitemapLinks={sitemapLinks}>
        <Row>
          {shortcuts.map((item: any) => {
            return (
              <MenuList key={item.cate} cate={item.cate} items={item.items} />
            );
          })}
        </Row>
      </VeracityFooter>
      <Select defaultValue={state.lang} className="none" onChange={langChange}>
        <Option value="zh">简体中文</Option>
        <Option value="en">English</Option>
      </Select>
    </>
  );
}
