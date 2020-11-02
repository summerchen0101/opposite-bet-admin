import React, { useEffect, useState } from 'react';
import Table from '@/components/Table';
import TableHead from '@/components/TableHead';
import TableBody from '@/components/TableBody';
import {
  EyeFilled,
  RedoOutlined,
  ContainerOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import { Checkbox, Space, Switch } from 'antd';
import IconLink from '@/components/IconLink';
const columns = [
  {
    title: '賽事編號',
    dataIndex: 'eventId',
    width: '10%',
  },
  {
    title: '開賽時間',
    dataIndex: 'startAt',
  },
  {
    title: '隊名',
    dataIndex: 'teams',
    render(teams) {
      if (!teams) return '-';
      return (
        <>
          <span>{teams[0]}</span>
          <br />
          <span>{teams[1]}</span>
        </>
      );
    },
  },
  {
    title: '聯盟',
    dataIndex: 'league',
  },
  {
    title: '國家',
    dataIndex: 'country',
  },
  {
    title: '筆數/實貨量',
    dataIndex: 'count',
    render(count, row) {
      console.log(row);
      return `${count}/${row.volume}`;
    },
  },
  {
    title: '開始',
    dataIndex: 'isOpened',
    render: (isOpened) => <Switch defaultChecked={isOpened} />,
  },
  {
    title: '結果',
    dataIndex: 'result',
    render: (result) => {
      if (!result) {
        return <a>點擊添加</a>;
      }
      return (
        <>
          <span>全場波膽: {result.full}</span>
          <br />
          <span>上半波膽: {result.firstHalf}</span>
        </>
      );
    },
  },
  {
    title: '操作',
    render: (text, record) => {
      return (
        <Space size="small">
          <Checkbox defaultChecked={false} />
          <IconLink IconComp={EyeFilled} />
          <IconLink IconComp={ContainerOutlined} />
          <IconLink IconComp={RedoOutlined} />
          <IconLink IconComp={DeleteOutlined} />
        </Space>
      );
    },
    width: '15%',
  },
];

const data = [
  {
    eventId: 3123,
    startAt: '2020-12-02',
    teams: ['AAA', 'BBB'],
    league: '大聯盟123',
    country: '美國',
    count: 10,
    volume: 20320,
    isOpened: true,
    result: {
      full: '3:2',
      firstHalf: '2:1',
    },
  },
];

const Component: React.FC = () => {
  return (
    <Table>
      <TableHead columns={columns}></TableHead>
      <TableBody columns={columns} data={data}></TableBody>
    </Table>
  );
};

export default Component;
