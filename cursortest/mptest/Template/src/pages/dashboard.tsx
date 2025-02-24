import React, { useEffect, useState } from "react";
import {
  Table,
  Progress,
  Row,
  Col,
  Breadcrumb,
  Button,
  Divider,
  Space,
  Modal,
  Input,
  Tooltip,
  Checkbox
} from "antd";
// import { getProjectList } from "../api/index";
import Dayjs from "dayjs";
import {
  HomeOutlined,
  CloudUploadOutlined,
  SearchOutlined,
  RollbackOutlined
} from "@ant-design/icons";
import NewItem from "./new";
import { getProjectList } from "./../api/index";

export default function Dashboard(props: any) {
  const [pageSize, setPageSize] = useState(20);
  const [dataSource, setDataSource] = useState<any>([]);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(true);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  useEffect(() => {
    getProjectList().then((data: any) => {
      setDataSource(data.data.data);
      setLoading(false);
    });
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSearch = (selectedKeys: any, confirm: any, dataIndex: any) => {
    console.log(dataIndex);
    confirm();
  };

  const handleReset = (clearFilters: any) => {
    clearFilters();
  };

  const searchInput: any = React.createRef();

  const getColumnSearchProps = (dataIndex: any, placeholder: string) => ({
    // eslint-disable-next-line react/display-name
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }: any) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${placeholder}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    // eslint-disable-next-line react/display-name
    filterIcon: (filtered: any) => (
      <SearchOutlined
        style={{
          padding: 5,
          color: filtered ? "#fff" : undefined,
          backgroundColor: filtered ? "#f50" : undefined
        }}
      />
    ),
    onFilter: (value: any, record: any) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible: any) => {
      if (visible) {
        setTimeout(() => searchInput.current.select(), 100);
      }
    }
  });

  const columns = [
    {
      title: "Project number",
      width: 400,
      onHeaderCell: () => {
        return {
          className: "header-cell"
        };
      },
      dataIndex: "name",
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
      key: "name",
      ...getColumnSearchProps("name", "Project number")
    },
    {
      title: "Tower progress",
      width: 200,
      onHeaderCell: () => {
        return {
          className: "header-cell"
        };
      },
      dataIndex: "progress",
      sorter: (a: any, b: any) => a.progress - b.progress,
      // eslint-disable-next-line react/display-name
      render: (result: any) => {
        return (
          <Progress
            strokeColor="#E98300"
            showInfo={false}
            percent={result.step1}
            successPercent={result.step2}
          />
        );
      }
    },
    {
      title: "Order number",
      width: 200,
      onHeaderCell: () => {
        return {
          className: "header-cell"
        };
      },
      dataIndex: "orderNum",
      sorter: (a: any, b: any) => a.orderNum.localeCompare(b.orderNum),
      ...getColumnSearchProps("orderNum", "Order number")
    },
    {
      title: "Created date",
      width: 150,
      onHeaderCell: () => {
        return {
          className: "header-cell"
        };
      },
      dataIndex: "created",
      sorter: (a: any, b: any) => dataColSorter(a.created, b.created),
      render: function format(date: any) {
        return <span>{Dayjs(date).format("YYYY-MM-DD")}</span>;
      }
    },
    {
      title: "Reviewer",
      width: 200,
      onHeaderCell: () => {
        return {
          className: "header-cell"
        };
      },
      dataIndex: "reviewer",
      sorter: (a: any, b: any) => a.reviewer.localeCompare(b.reviewer),
      ...getColumnSearchProps("reviewer", "Reviewer Name")
    }
  ];
  const onSelectChange = (keys: any) => {
    setSelectedRowKeys(keys);
    setButtonDisabled(keys.length === 0);
  };
  const rowSelection = {
    selectedRowKeys,
    hideDefaultSelections: true,
    onChange: onSelectChange,
    // eslint-disable-next-line react/display-name
    renderCell: (
      checked: boolean,
      record: any,
      index: number,
      originNode: any
    ) => {
      return (
        <>
          {index % 2 === 0 ? (
            originNode
          ) : (
            <Tooltip title="Cannot select current item">
              <Checkbox disabled={true} />
            </Tooltip>
          )}
        </>
      );
    }
  };

  const dataColSorter = (a: any, b: any) => {
    let aTimeStamp = 0;
    let bTimeStamp = 0;
    if (a !== null) {
      aTimeStamp = new Date(a).getTime();
    }
    if (b !== null) {
      bTimeStamp = new Date(b).getTime();
    }
    return aTimeStamp - bTimeStamp;
  };

  const onPageSizeChange = (page: number) => {
    setPageSize(page);
  };

  const onClickWithdraw = () => {
    setLoading(true);
    const newDataSource: any = dataSource.filter(
      (item: any, index: number) => index > 0
    );
    setSelectedRowKeys([]);
    setDataSource(newDataSource);
    setLoading(false);
    setButtonDisabled(true);
    Modal.success({
      title: "Deleted successfully",
      content: <>You have deleted selected item.</>
    });
  };

  return (
    <div className="full-height">
      <Breadcrumb>
        <Breadcrumb.Item onClick={() => props.history.push("/")}>
          <HomeOutlined className="cursor-pointer" />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Table List</Breadcrumb.Item>
      </Breadcrumb>
      <p className="fs-sm margin-top-sm">Show all items in the table</p>
      <Divider style={{ marginTop: 10, marginBottom: 10 }} />

      <Row justify="space-between" className="margin-bottom-md" align="middle">
        <Col>
          <Space>
            <Button
              type="primary"
              disabled={buttonDisabled}
              loading={loading}
              icon={<RollbackOutlined />}
              onClick={onClickWithdraw}
            >
              Delete
            </Button>
            <Button
              type="primary"
              onClick={showModal}
              icon={<CloudUploadOutlined />}
            >
              Create
            </Button>
          </Space>
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <Table
        loading={loading}
        rowSelection={rowSelection}
        rowKey="id"
        size="small"
        dataSource={dataSource}
        columns={columns}
        onRow={(row) => {
          return {
            onClick: () => {
              props.history.push(`/view/${row.id}`);
            }
          };
        }}
        pagination={{
          className: "padding-y-xl flex justify-end",
          pageSize: pageSize,
          showLessItems: false,
          size: "small",
          showSizeChanger: true,
          pageSizeOptions: ["10", "20", "50"],
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
          onShowSizeChange: (current, value) => {
            onPageSizeChange(value);
            window.scrollTo(0, 0);
          }
        }}
        rowClassName={(record, index) => {
          return index % 2 === 0 ? "" : "row-cell-even";
        }}
      />
      <Modal
        title="Create New Item"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={600}
      >
        <NewItem showInModal={true} />
      </Modal>
    </div>
  );
}
