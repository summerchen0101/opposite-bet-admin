import React, { useEffect } from 'react';
import { Table, Space } from 'antd';
import { gotTableData } from '@/pages/account/Online/reducer';
import { selectFilteredData } from './selectors';
import { useSelector, useDispatch } from 'react-redux';
import ColorBox from '@/components/ColorBox';

const columns = [
  {
    title: '#',
    dataIndex: 'num',
    key: 'num',
    width: '10%',
  },
  {
    title: '帳號',
    dataIndex: 'account',
    key: 'account',
  },
  {
    title: '暱稱',
    dataIndex: 'nick',
    key: 'nick',
  },
  {
    title: '層級角色',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: '登入時間',
    dataIndex: 'loginTime',
    key: 'loginTime',
  },
  {
    title: '登入IP',
    dataIndex: 'ip',
    key: 'ip',
  },
  {
    title: '危險等級',
    key: 'danger',
    dataIndex: 'danger',
    render: (list) => (
      <Space size="small">
        {list && list.length > 0 ? (
          list.map((t, i) => <ColorBox key={i} color={t} />)
        ) : (
          <a>設定</a>
        )}
      </Space>
    ),
    width: '15%',
  },
];

const data = [
  {
    key: 1,
    num: 1,
    account: 'summer',
    nick: '夏天',
    role: '十級代理',
    roleValue: 10,
    loginTime: '2018-12-18 16:42:44',
    ip: '192.168.111.26',
    danger: ['#f5222d', '#fadb14'],
  },
  {
    key: 2,
    num: 2,
    account: 'sunny123',
    nick: 'Sunny',
    role: '八級代理',
    roleValue: 8,
    loginTime: '2018-12-18 16:42:44',
    ip: '192.168.111.26',
    danger: [],
  },
];

const Component: React.FC = () => {
  const dispatch = useDispatch();
  const filterdData = useSelector(selectFilteredData);
  useEffect(() => {
    dispatch(gotTableData(data));
  }, []);
  return (
    <Table
      columns={columns}
      dataSource={filterdData}
      size="small"
      scroll={{ x: 1200, y: 300 }}
    />
  );
};

export default Component;
