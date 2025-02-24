import React, { Component } from "react";
import ErrorImage from "./../assets/images/undraw_QA_engineers_dg5p.svg";
import { Result, Button, Typography } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

const { Paragraph, Text } = Typography;
export default class ErrorBoundary extends Component<
  {},
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(err: any, info: any) {
    console.log(err, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Result
          icon={<img src={ErrorImage} />}
          title="Submission Failed"
          subTitle="Please check and modify the following information before resubmitting."
          extra={[
            <Button type="primary" key="console">
              Go Console
            </Button>,
            <Button key="buy">Buy Again</Button>
          ]}
        >
          <div className="desc">
            <Paragraph>
              <Text
                strong
                style={{
                  fontSize: 16
                }}
              >
                The content you submitted has the following error:
              </Text>
            </Paragraph>
            <Paragraph>
              <CloseCircleOutlined className="site-result-demo-error-icon" />{" "}
              Your account has been frozen. <a>Thaw immediately &gt;</a>
            </Paragraph>
            <Paragraph>
              <CloseCircleOutlined className="site-result-demo-error-icon" />{" "}
              Your account is not yet eligible to apply.{" "}
              <a>Apply Unlock &gt;</a>
            </Paragraph>
          </div>
        </Result>
      );
    } else {
      return this.props.children;
    }
  }
}
