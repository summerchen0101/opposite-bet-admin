import IconLink from '@/components/IconLink';
import TableSets from '@/components/TableSets';
import {
  ContainerOutlined,
  DeleteOutlined,
  EyeFilled,
  FilterFilled,
  RedoOutlined,
} from '@ant-design/icons';
import { Button, Checkbox, Popconfirm, Popover, Space, Switch } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleScoreModal } from '../reducer';
import DeleteConfirmTip from '@/components/DeleteConfirmTip';
import {
  InputModifyPopover,
  SelectModifyPopover,
} from '@/components/ModifyPopover';
import { useHistory } from 'react-router-dom';
import { eventScore } from '@/lib/routes';

const columns = [
  {
    title: '賽事編號',
    dataIndex: 'eventId',
    width: '10%',
    allowFiltered: true,
  },
  {
    title: '開賽時間',
    dataIndex: 'startAt',
    allowFiltered: true,
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
    render(value, row) {
      return (
        <Popover content={<InputModifyPopover value={value} />} trigger="click">
          <Button type="link">{value}</Button>
        </Popover>
      );
    },
  },
  {
    title: '國家',
    dataIndex: 'country',
    render(value, row) {
      const options = [
        { label: '巴西', value: 'opt1' },
        { label: '美國', value: 'opt2' },
      ];
      return (
        <Popover
          content={<SelectModifyPopover options={options} value={value} />}
          trigger="click"
        >
          <Button type="link">{value}</Button>
        </Popover>
      );
    },
  },
  {
    title: '筆數/實貨量',
    dataIndex: 'count',
    render(count, row) {
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
      const dispatch = useDispatch();
      const onCreate = (e) => dispatch(toggleScoreModal(true));
      if (!result) {
        return <a onClick={onCreate}>點擊添加</a>;
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
    title: () => (
      <>
        操作
        <IconLink
          IconComp={FilterFilled}
          style={{ float: 'right', marginTop: 4 }}
        />
      </>
    ),
    key: 'control',
    fixed: ('right' as unknown) as boolean,
    render: (text, record) => {
      const history = useHistory();
      return (
        <Space size="small">
          <Checkbox defaultChecked={false} />
          <IconLink label="查看投注" IconComp={EyeFilled} />
          <IconLink label="重置比分" IconComp={ContainerOutlined} />
          <IconLink
            label="比分"
            IconComp={RedoOutlined}
            onClick={() => history.push(eventScore)}
          />
          <DeleteConfirmTip>
            <IconLink IconComp={DeleteOutlined} />
          </DeleteConfirmTip>
        </Space>
      );
    },
    width: '15%',
  },
];

const data = [];
for (let i = 1; i <= 50; i++) {
  data.push({
    key: i,
    eventId: 3123,
    startAt: '2020-12-02',
    teams: ['AAA', 'BBB'],
    league: '大聯盟123',
    country: '美國',
    count: 10,
    volume: 20320,
    isOpened: true,
    // result: {
    //   full: '3:2',
    //   firstHalf: '2:1',
    // },
  });
}
const Component: React.FC = () => {
  return <TableSets columns={columns} data={data} />;
};

export default Component;
