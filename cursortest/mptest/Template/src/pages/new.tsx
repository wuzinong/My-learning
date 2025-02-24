import { HomeOutlined, CloudUploadOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Select,
  TreeSelect,
  Cascader,
  DatePicker,
  InputNumber,
  Switch,
  Button,
  Breadcrumb,
  Divider
} from "antd";
import React from "react";

export default function NewItem(props: any) {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 10 }
  };

  return (
    <div className="full-height">
      {props.showInModal ? null : (
        <>
          <Breadcrumb>
            <Breadcrumb.Item onClick={() => props.history.push("/")}>
              <HomeOutlined className="cursor-pointer" />
            </Breadcrumb.Item>
            <Breadcrumb.Item>Create new item</Breadcrumb.Item>
          </Breadcrumb>
          <p className="fs-sm margin-top-sm">Create new item with form</p>
          <Divider className="margin-y-md" />
        </>
      )}

      <Form {...layout} layout="horizontal">
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              {
                title: "Light",
                value: "light",
                children: [{ title: "Bamboo", value: "bamboo" }]
              }
            ]}
          />
        </Form.Item>
        <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                value: "zhejiang",
                label: "Zhejiang",
                children: [
                  {
                    value: "hangzhou",
                    label: "Hangzhou"
                  }
                ]
              }
            ]}
          />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Switch">
          <Switch />
        </Form.Item>
        {props.showInModal ? null : (
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
            <Button type="primary" icon={<CloudUploadOutlined />}>
              Save
            </Button>
          </Form.Item>
        )}
      </Form>
    </div>
  );
}
