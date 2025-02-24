import React, { useEffect, useState } from "react";
import { Result, Button } from "antd";
import { injectIntl } from "react-intl";
import Image404 from "./../assets/images/undraw_empty_xct9.svg";

function Page404(props: any) {
  const i18n = (key: string) => {
    return props.intl.formatMessage({ id: key });
  };

  const [statusCode, SetStatusCode] = useState("404");

  useEffect(() => {
    SetStatusCode(props.history.location.state);
  }, [props]);

  return (
    <Result
      icon={<img src={Image404} alt={statusCode} style={{ width: 250 }} />}
      title={statusCode}
      subTitle={i18n("pageNotExist")}
      extra={
        <Button onClick={() => props.history.push("/")} type="primary">
          {i18n("backHome")}
        </Button>
      }
    />
  );
}
export default injectIntl(Page404);
